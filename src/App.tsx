import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import HomeEn from './pages/HomeEn'
import HomeEs from './pages/HomeEs'
import MedicalTourism from './pages/MedicalTourism.tsx'
import StatePage from './pages/StatePage.tsx'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import BypassGastrico from './pages/BypassGastrico'
import Contacto from './pages/Contacto'
import Contact from './pages/Contact'
import Cirugias from './pages/Cirugias'
import Surgeries from './pages/Surgeries'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Faq from './pages/Faq'
import BandaGastrica from './pages/BandaGastrica'
import Obesidad from './pages/Obesidad'
import Obesity from './pages/Obesity'
import Nosotros from './pages/Nosotros'
import AboutUs from './pages/AboutUs'
import Testimonios from './pages/Testimonios'
import Testimonials from './pages/Testimonials'
import { statesData } from './data/states'

function App() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const pathname = location.pathname

    const isSegment = (prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`)

    const isEnglishRoute =
      isSegment('/en') ||
      isSegment('/about-us') ||
      isSegment('/testimonials') ||
      isSegment('/contact') ||
      isSegment('/surgeries') ||
      isSegment('/obesity') ||
      isSegment('/faq')

    const isNeutralRoute = isSegment('/blog')

    const isSpanishRoute =
      pathname === '/' ||
      isSegment('/es') ||
      isSegment('/bypass-gastrico') ||
      isSegment('/banda-gastrica') ||
      isSegment('/nosotros') ||
      isSegment('/testimonios') ||
      isSegment('/contacto') ||
      isSegment('/cirugias') ||
      isSegment('/obesidad') ||
      isSegment('/preguntas-frecuentes') ||
      isSegment('/preguntas-frequentes')

    if (isNeutralRoute) return

    const nextLanguage = isEnglishRoute ? 'en' : (isSpanishRoute ? 'es' : null)
    if (!nextLanguage) return

    const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase()
    if (!currentLanguage.startsWith(nextLanguage)) {
      i18n.changeLanguage(nextLanguage)
    }
  }, [i18n, location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/en" element={<HomeEn />} />
      <Route path="/es" element={<HomeEs />} />
      <Route path="/bypass-gastrico" element={<BypassGastrico />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cirugias" element={<Cirugias />} />
      <Route path="/surgeries" element={<Surgeries />} />
      <Route path="/banda-gastrica" element={<BandaGastrica />} />
      <Route path="/obesidad" element={<Obesidad />} />
      <Route path="/obesity" element={<Obesity />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/testimonios" element={<Testimonios />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/preguntas-frequentes" element={<PreguntasFrecuentes />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/medical-tourism" element={<MedicalTourism />} />
      {statesData.map((state) => (
        <Route
          key={state.slug}
          path={`/${state.slug}`}
          element={<StatePage stateSlug={state.slug} />}
        />
      ))}
    </Routes>
  )
}

export default App
