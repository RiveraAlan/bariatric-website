import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import type { StateData } from '../data/states'

type HeroSectionProps = {
  stateData?: StateData,
}

export default function HeroSection({ stateData }: HeroSectionProps) {
  const { t } = useTranslation()

  const heroVideos = useMemo(() => {
    const videos = Object.values(
      import.meta.glob('../assets/quirofano/*.MP4', {
        eager: true,
        as: 'url',
      }),
    ) as string[]

    return videos
  }, [])

  const [activeSlot, setActiveSlot] = useState<0 | 1>(0)
  const [slotVideoIndices, setSlotVideoIndices] = useState<[number, number]>(() => {
    if (heroVideos.length <= 1) return [0, 0]
    return [0, 1]
  })
  const [isCrossfading, setIsCrossfading] = useState(false)
  const videoRef0 = useRef<HTMLVideoElement | null>(null)
  const videoRef1 = useRef<HTMLVideoElement | null>(null)

  const heroTitle = useMemo(() => {
    if (stateData) {
      return `Transform Your Life with Bariatric Surgery in ${stateData.name}`
    }
    return t('hero.title')
  }, [stateData, t])

  const heroSubtitle = useMemo(() => {
    if (stateData) {
      return `Serving ${stateData.majorCities.join(', ')} and surrounding areas. Expert weight loss surgery with world-class care in Mexico.`
    }
    return t('hero.subtitle')
  }, [stateData, t])

  const [years, setYears] = useState(0)
  const [surgeries, setSurgeries] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

  const animateValue = (target: number, duration: number, callback: (value: number) => void) => {
    const start = 0
    const increment = target / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      callback(Math.floor(current))
    }, 16)

    return timer
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      animateValue(15, 2000, (val) => setYears(val))
      animateValue(2000, 2000, (val) => setSurgeries(val))
      animateValue(98, 2000, (val) => setSatisfaction(val))
    }, 500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (heroVideos.length <= 1) {
      setActiveSlot(0)
      setSlotVideoIndices([0, 0])
      return
    }

    setSlotVideoIndices([0, 1])
    setActiveSlot(0)
  }, [heroVideos.length])

  const getVideoRef = (slot: 0 | 1) => (slot === 0 ? videoRef0 : videoRef1)

  const crossfadeToNext = () => {
    if (isCrossfading) return
    if (heroVideos.length <= 1) return

    const outgoingSlot: 0 | 1 = activeSlot
    const nextSlot: 0 | 1 = activeSlot === 0 ? 1 : 0
    const nextEl = getVideoRef(nextSlot).current
    if (!nextEl) return

    const nextIndex = slotVideoIndices[nextSlot]

    setIsCrossfading(true)
    nextEl.currentTime = 0
    void nextEl.play().catch(() => undefined)

    window.setTimeout(() => {
      setActiveSlot(nextSlot)
      setIsCrossfading(false)

      setSlotVideoIndices(([slot0, slot1]) => {
        const currentIndices: [number, number] = [slot0, slot1]
        const newActiveIndex = nextIndex
        const newPreloadIndex = (newActiveIndex + 1) % heroVideos.length

        currentIndices[nextSlot] = newActiveIndex
        currentIndices[outgoingSlot] = newPreloadIndex
        return currentIndices
      })
    }, 700)
  }

  useEffect(() => {
    if (heroVideos.length <= 1) return

    const el = getVideoRef(activeSlot).current
    if (!el) return

    const onTimeUpdate = () => {
      if (isCrossfading) return
      if (!Number.isFinite(el.duration) || el.duration <= 0) return

      const remaining = el.duration - el.currentTime
      if (remaining <= 1.0) {
        crossfadeToNext()
      }
    }

    el.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      el.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [activeSlot, heroVideos.length, isCrossfading])

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-[18.5%] top-1/2 h-[80%] w-[60%] -translate-y-1/2">
            <video
              ref={videoRef0}
              autoPlay
              loop={heroVideos.length <= 1}
              muted
              playsInline
              src={heroVideos[slotVideoIndices[0]]}
              className={
                `absolute inset-0 h-full w-full object-cover -rotate-90 origin-center transition-opacity duration-700 ` +
                (activeSlot === 0 ? (isCrossfading ? 'opacity-0' : 'opacity-100') : (isCrossfading ? 'opacity-100' : 'opacity-0'))
              }
            />
            <video
              ref={videoRef1}
              autoPlay
              loop={heroVideos.length <= 1}
              muted
              playsInline
              src={heroVideos[slotVideoIndices[1]]}
              className={
                `absolute inset-0 h-full w-full object-cover -rotate-90 origin-center transition-opacity duration-700 ` +
                (activeSlot === 1 ? (isCrossfading ? 'opacity-0' : 'opacity-100') : (isCrossfading ? 'opacity-100' : 'opacity-0'))
              }
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-700 from-0% via-primary-700 via-70% to-transparent to-88%"></div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8 text-white col-span-2">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-primary-50">
                {heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                {t('hero.scheduleConsult')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#about" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white/30 transition-colors duration-200 inline-flex items-center justify-center">
                {t('hero.learnMore')}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-6xl font-bold">{years}+</div>
                <div className="text-sm text-primary-100 mt-1">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-6xl font-bold">{surgeries}+</div>
                <div className="text-sm text-primary-100 mt-1">{t('hero.successfulSurgeries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-6xl font-bold">{satisfaction}%</div>
                <div className="text-sm text-primary-100 mt-1">{t('hero.satisfaction')}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
