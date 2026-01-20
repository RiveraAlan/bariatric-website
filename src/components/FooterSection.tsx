import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function FooterSection() {
  const { t } = useTranslation()
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  const pathname = location.pathname
  const isSegment = (prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  const isEnglish = isSegment('/en') || isSegment('/about-us') || isSegment('/testimonials') || isSegment('/contact') || isSegment('/surgeries') || isSegment('/obesity') || isSegment('/faq')

  const homeHref = isEnglish ? '/en' : '/es'
  const aboutHref = isEnglish ? '/about-us' : '/nosotros'
  const obesityHref = isEnglish ? '/obesity' : '/obesidad'
  const surgeriesHref = isEnglish ? '/surgeries' : '/cirugias'
  const testimonialsHref = isEnglish ? '/testimonials' : '/testimonios'
  const contactHref = isEnglish ? '/contact' : '/contacto'

  const quickLinks = [
    { name: 'nav.home', href: homeHref },
    { name: 'nav.about', href: aboutHref },
    { name: 'nav.obesity', href: obesityHref },
    { name: 'nav.surgeries', href: surgeriesHref },
    { name: 'nav.testimonials', href: testimonialsHref },
    { name: 'nav.contact', href: contactHref },
  ]

  const services = [
    { name: 'services.gastricSleeve', href: isEnglish ? '/surgeries' : '/banda-gastrica' },
    { name: 'services.gastricBypass', href: isEnglish ? '/surgeries' : '/bypass-gastrico' },
    { name: 'footer.nutritionalConsultation', href: contactHref },
    { name: 'footer.postOperativeFollowUp', href: contactHref },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Fernando Aceves</h3>
            <p className="text-primary-100 mb-4 text-sm">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-100 hover:text-white text-sm transition-colors">
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-primary-100 hover:text-white text-sm transition-colors">
                    {t(service.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">(33) 3101 7777</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">contacto@obesityfernandoaceves.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">Zapopan, Jalisco, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-200 text-sm">
              © {currentYear} Dr. Fernando Aceves. {t('footer.allRightsReserved')}.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                {t('footer.termsConditions')}
              </a>
            </div>
          </div>
          <p className="text-primary-300 text-xs mt-4 text-center">
            COFEPRIS Autorización: XXXXXX Folio: XXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
