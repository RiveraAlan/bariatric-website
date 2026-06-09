import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { teamMembers } from '../data/team'

function getInitials(name: string): string {
  const cleaned = name.replace(/\b(Dr|Dra|Lic|CSP|Mtro|Mtra)\.?\s*/gi, '').trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  return parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join('') || name.charAt(0).toUpperCase()
}

export default function TeamSection() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage || i18n.language || 'es').startsWith('en') ? 'en' : 'es'
  const scrollRef = useRef<HTMLDivElement>(null)

  const getStep = (el: HTMLDivElement) => {
    const card = el.querySelector<HTMLElement>('[data-team-card]')
    return card ? card.offsetWidth + 24 : el.clientWidth
  }

  const scrollByCards = (direction: -1 | 1) => {
    const el = scrollRef.current
    if (!el) return
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: direction * getStep(el), behavior: 'smooth' })
    }
  }

  // Auto-advance the carousel, pausing while the pointer is over it.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let paused = false
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    el.addEventListener('pointerenter', pause)
    el.addEventListener('pointerleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })

    const id = window.setInterval(() => {
      if (paused) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: getStep(el), behavior: 'smooth' })
      }
    }, 3500)

    return () => {
      window.clearInterval(id)
      el.removeEventListener('pointerenter', pause)
      el.removeEventListener('pointerleave', resume)
      el.removeEventListener('touchstart', pause)
    }
  }, [])

  return (
    <section id="team" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('team.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label={lang === 'en' ? 'Previous' : 'Anterior'}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:border-primary-400 hover:text-primary-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label={lang === 'en' ? 'Next' : 'Siguiente'}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:border-primary-400 hover:text-primary-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              data-team-card
              className="snap-start shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-500 to-primary-700">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/90 tracking-wide">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {member.years}+ {t('team.yearsExperience')}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mt-1 mb-5">
                  {member.specialty[lang]}
                </p>

                <div className="space-y-2">
                  {member.credentials[lang].map((credential, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* Trailing spacer so the last card never sits flush against the edge */}
          <div className="shrink-0 w-1" aria-hidden="true" />
        </div>

        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('team.readyToTransform')}
          </h3>
          <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
            {t('team.readyToTransformDesc')}
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center">
            {t('team.scheduleNow')}
          </a>
        </div>
      </div>
    </section>
  )
}
