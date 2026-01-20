import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { statesData } from '../data/states'
import NavigationHeader from '../components/NavigationHeader.tsx'
import FooterSection from '../components/FooterSection.tsx'
import { Search, MapPin, ArrowRight } from 'lucide-react'

export default function MedicalTourism() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStates = useMemo(() => {
    if (!searchQuery) return statesData
    const query = searchQuery.toLowerCase()
    return statesData.filter(state => 
      state.name.toLowerCase().includes(query) ||
      state.abbreviation.toLowerCase().includes(query) ||
      state.majorCities.some(city => city.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const navigateToState = (slug: string) => {
    navigate(`/${slug}`)
  }

  return (
    <div>
      <NavigationHeader />
      
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('medicalTourism.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('medicalTourism.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder={t('medicalTourism.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredStates.map(state => (
              <button
                key={state.slug}
                onClick={() => navigateToState(state.slug)}
                className="group p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-sm text-gray-500">{state.abbreviation}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{state.majorCities.join(', ')}</span>
                </div>
              </button>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('medicalTourism.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('medicalTourism.whyChooseTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary-600">60%</div>
                <h3 className="text-xl font-semibold">{t('medicalTourism.stats.costSavingsTitle')}</h3>
                <p className="text-gray-600">{t('medicalTourism.stats.costSavingsDesc')}</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary-600">15+</div>
                <h3 className="text-xl font-semibold">{t('medicalTourism.stats.yearsExperienceTitle')}</h3>
                <p className="text-gray-600">{t('medicalTourism.stats.yearsExperienceDesc')}</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary-600">2000+</div>
                <h3 className="text-xl font-semibold">{t('medicalTourism.stats.successfulSurgeriesTitle')}</h3>
                <p className="text-gray-600">{t('medicalTourism.stats.successfulSurgeriesDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
