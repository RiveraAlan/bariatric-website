import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import worldMap from '../assets/World Vector Map.svg'

type Location = {
  name: string,
  top: string,
  left: string,
}

export default function GlobalReachSection() {
  const { t } = useTranslation()
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  const locations: Location[] = [
    { name: 'Canadá', top: '42%', left: '12%' },
    { name: 'Estados Unidos', top: '50%', left: '18%' },
    { name: 'México', top: '60%', left: '20%' },
    { name: 'Puerto Rico', top: '60%', left: '29%' },
    { name: 'Sudamérica', top: '75%', left: '28%' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-0 items-center">
          <div className="space-y-6 lg:pr-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('globalReach.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {t('globalReach.description')}
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                {t('globalReach.exploreLocations')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">Américas</div>
                <p className="text-sm text-gray-600">{t('globalReach.internationalPatients')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">{locations.length}</div>
                <p className="text-sm text-gray-600">{t('globalReach.countriesServed')}</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center">
                {t('globalReach.scheduleInternational')}
              </a>
            </div>
          </div>

          <div className="relative lg:-mr-[200px] xl:-mr-[300px] mt-12 lg:mt-0">
            <div className="relative w-full">
              <img src={worldMap} alt="World Map" className="w-full h-auto opacity-30" />

              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ top: location.top, left: location.left }}
                  onMouseEnter={() => setSelectedLocation(index)}
                  onMouseLeave={() => setSelectedLocation(null)}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-125">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    <div className="absolute inset-0 w-8 h-8 bg-primary-400 rounded-full animate-ping opacity-75"></div>

                    {selectedLocation === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-xl z-10">
                        <div className="font-semibold">{location.name}</div>
                        <div className="text-xs text-gray-300">{t('globalReach.patients')}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                          <div className="border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
