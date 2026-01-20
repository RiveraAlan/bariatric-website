import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages, Menu, X, Phone } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/Nosotros Image.avif'

export default function NavigationHeader() {
  const { t } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = location.pathname
  const isSegment = (prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  const isEnglish = isSegment('/en') || isSegment('/about-us') || isSegment('/testimonials') || isSegment('/contact') || isSegment('/surgeries') || isSegment('/obesity') || isSegment('/faq')

  const languageSwitchHref = (() => {
    if (isEnglish) {
      if (isSegment('/en')) return '/es'
      if (isSegment('/about-us')) return '/nosotros'
      if (isSegment('/testimonials')) return '/testimonios'
      if (isSegment('/contact')) return '/contacto'
      if (isSegment('/surgeries')) return '/cirugias'
      if (isSegment('/obesity')) return '/obesidad'
      if (isSegment('/faq')) return '/preguntas-frecuentes'
      if (isSegment('/blog')) return pathname

      return '/es'
    }

    if (pathname === '/' || isSegment('/es')) return '/en'
    if (isSegment('/nosotros')) return '/about-us'
    if (isSegment('/testimonios')) return '/testimonials'
    if (isSegment('/contacto')) return '/contact'
    if (isSegment('/cirugias')) return '/surgeries'
    if (isSegment('/obesidad')) return '/obesity'
    if (isSegment('/preguntas-frecuentes') || isSegment('/preguntas-frequentes')) return '/faq'
    if (isSegment('/bypass-gastrico') || isSegment('/banda-gastrica')) return '/surgeries'
    if (isSegment('/blog')) return pathname

    return '/en'
  })()

  const languageSwitchLabel = isEnglish ? 'ES' : 'EN'

  const homeHref = isEnglish ? '/en' : '/es'
  const aboutHref = isEnglish ? '/about-us' : '/nosotros'
  const obesityHref = isEnglish ? '/obesity' : '/obesidad'
  const surgeriesHref = isEnglish ? '/surgeries' : '/cirugias'
  const testimonialsHref = isEnglish ? '/testimonials' : '/testimonios'
  const contactHref = isEnglish ? '/contact' : '/contacto'

  const navigation = [
    { name: t('nav.home'), href: homeHref },
    { name: t('nav.about'), href: aboutHref },
    { name: t('nav.obesity'), href: obesityHref },
    { name: t('nav.surgeries'), href: surgeriesHref },
    { name: t('nav.testimonials'), href: testimonialsHref },
    { name: t('nav.contact'), href: contactHref },
    { name: t('nav.blog'), href: '/blog' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href={homeHref} className="flex-shrink-0">
              <img src={logo} alt="Dr. Fernando Aceves" className="h-12 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={languageSwitchHref}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 text-sm font-semibold transition-colors"
                aria-label={`Switch language to ${languageSwitchLabel}`}
              >
                <Languages className="w-4 h-4" />
                <span>{languageSwitchLabel}</span>
              </a>
              <a href="tel:+523331017777" className="flex items-center text-primary-600 font-semibold text-sm">
                <Phone className="w-4 h-4 mr-2" />
                (33) 3101 7777
              </a>
              <a href={contactHref} className="btn-primary">
                {t('nav.schedule')}
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              {!mobileMenuOpen ? (
                <Menu className="block h-6 w-6" />
              ) : (
                <X className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 space-y-2">
              <a
                href={languageSwitchHref}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors"
                aria-label={`Switch language to ${languageSwitchLabel}`}
              >
                <Languages className="w-5 h-5" />
                <span>{languageSwitchLabel}</span>
              </a>
              <a href="tel:+523331017777" className="flex items-center text-primary-600 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (33) 3101 7777
              </a>
              <a href={contactHref} className="btn-primary block text-center">
                {t('nav.schedule')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
