import { ArrowRight, MapPin, DollarSign, Clock } from 'lucide-react'
import type { StateData } from '../data/states'

type MedicalTourismHeroProps = {
  stateData: StateData,
}

export default function MedicalTourismHero({ stateData }: MedicalTourismHeroProps) {
  const heroTitle = `Bariatric Surgery for ${stateData.name} Residents`

  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center gap-2 text-primary-200 mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">{stateData.name}</span>
          <span className="text-primary-400">•</span>
          <span className="text-sm">{stateData.majorCities.join(' • ')}</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Save up to 70% on weight loss surgery with world-class care in Mexico. Serving patients from {stateData.majorCities[0]} and throughout {stateData.name}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#cost-comparison" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white/30 transition-colors duration-200 inline-flex items-center justify-center">
              Compare Costs
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <DollarSign className="w-8 h-8 mb-3 text-primary-200" />
              <div className="text-3xl font-bold mb-1">$4,500</div>
              <div className="text-sm text-primary-200">Average Cost in Mexico</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 mb-3 text-primary-200" />
              <div className="text-3xl font-bold mb-1">3-5 Days</div>
              <div className="text-sm text-primary-200">Total Trip Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 mb-3 text-primary-200" />
              <div className="text-3xl font-bold mb-1">2-4 Hours</div>
              <div className="text-sm text-primary-200">Flight from {stateData.majorCities[0]}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f0fdfa"/>
        </svg>
      </div>
    </section>
  )
}
