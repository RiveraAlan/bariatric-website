import { useMemo, useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Scale, Heart } from 'lucide-react'
import consultationImage from '../assets/Facebook Image (2).jpg'
import obesityImage from '../assets/Facebook Image (4).jpg'

export default function AboutSection() {
  const { t, i18n } = useTranslation()
  const [successRate, setSuccessRate] = useState(0)
  const statsCardRef = useRef<HTMLDivElement>(null)

  const [isBmiModalOpen, setIsBmiModalOpen] = useState(false)
  const [bmiUnits, setBmiUnits] = useState<'imperial' | 'metric'>('imperial')
  const [bmiHeightFt, setBmiHeightFt] = useState('')
  const [bmiHeightIn, setBmiHeightIn] = useState('')
  const [bmiWeightLbs, setBmiWeightLbs] = useState('')
  const [bmiHeightCm, setBmiHeightCm] = useState('')
  const [bmiWeightKg, setBmiWeightKg] = useState('')

  const bmiValue = useMemo(() => {
    if (bmiUnits === 'metric') {
      const heightCm = Number(bmiHeightCm)
      const weightKg = Number(bmiWeightKg)

      if (!Number.isFinite(heightCm) || !Number.isFinite(weightKg)) return null
      if (heightCm <= 0 || weightKg <= 0) return null

      const heightM = heightCm / 100
      if (heightM <= 0) return null

      const bmi = weightKg / (heightM * heightM)
      if (!Number.isFinite(bmi)) return null
      return Math.round(bmi * 10) / 10
    }

    const heightFt = Number(bmiHeightFt)
    const heightIn = Number(bmiHeightIn)
    const weightLbs = Number(bmiWeightLbs)

    if (!Number.isFinite(heightFt) || !Number.isFinite(heightIn) || !Number.isFinite(weightLbs)) return null
    if (heightFt <= 0 || heightIn < 0 || weightLbs <= 0) return null

    const totalInches = heightFt * 12 + heightIn
    if (totalInches <= 0) return null

    const bmi = (703 * weightLbs) / (totalInches * totalInches)
    if (!Number.isFinite(bmi)) return null
    return Math.round(bmi * 10) / 10
  }, [bmiHeightCm, bmiHeightFt, bmiHeightIn, bmiUnits, bmiWeightKg, bmiWeightLbs])

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
      callback(parseFloat(current.toFixed(1)))
    }, 16)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(98.5, 2000, (val) => setSuccessRate(val))
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsCardRef.current) {
      observer.observe(statsCardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isBmiModalOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBmiModalOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isBmiModalOpen])

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={consultationImage}
                  alt="Consultation"
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=500&fit=crop"
                  alt="Medical Team"
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover mt-8"
                />
              </div>
              <div ref={statsCardRef} className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl max-w-[250px]">
                <div className="text-4xl font-bold mb-2">{successRate}%</div>
                <p className="text-sm text-primary-50">{t('about.successRate')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('about.provenExperience')}</h4>
                    <p className="text-gray-600">{t('about.provenExperienceDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('about.comprehensiveApproach')}</h4>
                    <p className="text-gray-600">{t('about.comprehensiveApproachDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('about.personalizedCare')}</h4>
                    <p className="text-gray-600">{t('about.personalizedCareDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#contact" className="btn-primary inline-flex items-center">
                  {t('hero.scheduleConsult')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="obesity" className="py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('obesity.title')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {t('obesity.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('obesity.description2')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-4">{t('obesity.comorbidities')}</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {t('obesity.diabetes')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {t('obesity.hypertension')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {t('obesity.cardiovascular')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {t('obesity.sleepApnea')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {t('obesity.jointProblems')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src={obesityImage}
                alt="Health Information"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold text-primary-600 mb-2">{(i18n.resolvedLanguage || i18n.language || 'es').startsWith('en') ? 'BMI' : 'IMC'} &gt; 30</div>
                <p className="text-sm text-gray-600">{t('obesity.bmiIndicator')}</p>
                <button
                  type="button"
                  onClick={() => setIsBmiModalOpen(true)}
                  className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  {t('obesity.bmiCalculatorButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isBmiModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsBmiModalOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{t('obesity.bmiCalculatorTitle')}</h3>
              <button
                type="button"
                onClick={() => setIsBmiModalOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-sm text-gray-600">{t('obesity.bmiCalculatorHelper')}</p>

              <div className="flex items-center justify-center">
                <div className="inline-flex rounded-lg border-2 border-gray-200 bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setBmiUnits('imperial')}
                    className={
                      `px-4 py-2 rounded-md text-sm font-semibold transition-colors ` +
                      (bmiUnits === 'imperial' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-50')
                    }
                  >
                    {t('obesity.unitsImperial')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBmiUnits('metric')}
                    className={
                      `px-4 py-2 rounded-md text-sm font-semibold transition-colors ` +
                      (bmiUnits === 'metric' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-50')
                    }
                  >
                    {t('obesity.unitsMetric')}
                  </button>
                </div>
              </div>

              {bmiUnits === 'metric' ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">{t('obesity.heightCentimeters')}</label>
                    <input
                      inputMode="numeric"
                      value={bmiHeightCm}
                      onChange={(e) => setBmiHeightCm(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
                      placeholder="175"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">{t('obesity.weightKilograms')}</label>
                    <input
                      inputMode="numeric"
                      value={bmiWeightKg}
                      onChange={(e) => setBmiWeightKg(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
                      placeholder="80"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">{t('obesity.heightFeet')}</label>
                    <input
                      inputMode="numeric"
                      value={bmiHeightFt}
                      onChange={(e) => setBmiHeightFt(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
                      placeholder="5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">{t('obesity.heightInches')}</label>
                    <input
                      inputMode="numeric"
                      value={bmiHeightIn}
                      onChange={(e) => setBmiHeightIn(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
                      placeholder="10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">{t('obesity.weightPounds')}</label>
                    <input
                      inputMode="numeric"
                      value={bmiWeightLbs}
                      onChange={(e) => setBmiWeightLbs(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none"
                      placeholder="180"
                    />
                  </div>
                </div>
              )}

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-sm text-gray-600">{t('obesity.yourBmi')}</div>
                <div className="text-4xl font-bold text-primary-700 mt-2">
                  {bmiValue ? bmiValue : '--'}
                </div>
                <div className="text-xs text-gray-500 mt-2">{t('obesity.bmiDisclaimer')}</div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsBmiModalOpen(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {t('obesity.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
