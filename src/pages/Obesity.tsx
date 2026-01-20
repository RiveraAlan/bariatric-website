import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Activity, ArrowRight, Scale, Shield } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'
import obesityImage from '../assets/Facebook Image (6).jpg'

export default function Obesity() {
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric')
  const [heightCm, setHeightCm] = useState('')
  const [weightKg, setWeightKg] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [weightLb, setWeightLb] = useState('')

  const bmi = (() => {
    if (units === 'metric') {
      const h = Number(heightCm) / 100
      const w = Number(weightKg)
      if (!h || !w) return null
      return w / (h * h)
    }

    const ft = Number(heightFt)
    const inch = Number(heightIn)
    const w = Number(weightLb)
    const totalIn = (ft * 12) + inch
    if (!totalIn || !w) return null
    return (w / (totalIn * totalIn)) * 703
  })()

  return (
    <div>
      <Helmet>
        <title>Obesity | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="What is obesity? Medical and surgical treatments, associated conditions, and BMI calculator."
        />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Obesity"
        title="Obesity"
        subtitle="Information, treatment options, and BMI calculator."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                What is obesity?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A chronic metabolic disorder
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Obesity is a chronic metabolic disorder. A person is said to be obese when they
                  have an excess of adipose tissue (body fat) that causes an increase in body weight
                  with respect to what would correspond according to their sex, height and age.
                </p>
                <p>
                  Obesity increases morbidity and mortality, impacts quality of life, and has become a
                  major social and public health problem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#treatment" className="btn-secondary inline-flex items-center justify-center">
                  View treatment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#bmi"
                  className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  BMI calculator
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={obesityImage} alt="Obesity" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="treatment" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Treatment can be medical or surgical depending on your case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Medical</div>
              <div className="text-gray-700 leading-relaxed">
                Diets, medications, exercise, and behavior modifications supervised by a nutrition
                specialist.
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Surgical</div>
              <div className="text-gray-700 leading-relaxed">
                Bariatric surgery may be an option when medical treatment fails. Surgery alone does
                not cure obesity; long-term nutrition and lifestyle changes are essential.
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 p-8">
            <div className="text-sm font-bold tracking-wide text-primary-700 uppercase mb-4">
              Surgical options
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/banda-gastrica"
                className="group rounded-xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              >
                <div className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  Gastric Sleeve
                </div>
                <div className="text-sm text-gray-600 mt-1">View procedure details</div>
              </a>
              <a
                href="/bypass-gastrico"
                className="group rounded-xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              >
                <div className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  Gastric Bypass
                </div>
                <div className="text-sm text-gray-600 mt-1">View procedure details</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="bmi" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                    Body Mass Index
                  </div>
                  <div className="text-2xl font-bold text-gray-900">BMI</div>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
                BMI is calculated as weight (kg) divided by height (m) squared. If your BMI is over
                30, it is considered obesity.
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Calculator</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUnits('metric')}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                      units === 'metric'
                        ? 'bg-white border-primary-300 text-primary-700'
                        : 'bg-transparent border-gray-200 text-gray-700'
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    onClick={() => setUnits('imperial')}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                      units === 'imperial'
                        ? 'bg-white border-primary-300 text-primary-700'
                        : 'bg-transparent border-gray-200 text-gray-700'
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              {units === 'metric' ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Height (cm)</label>
                    <input
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Weight (kg)</label>
                    <input
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Height (ft)</label>
                    <input
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Height (in)</label>
                    <input
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Weight (lb)</label>
                    <input
                      value={weightLb}
                      onChange={(e) => setWeightLb(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-white border border-gray-200 p-6">
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Your BMI</div>
                <div className="text-4xl font-bold text-primary-700 mt-2">
                  {bmi ? bmi.toFixed(1) : '--'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Schedule Your Consultation"
        subtitle="We are here to help you. Contact us and take the first step towards a healthier life"
        contactInfoTitle="Contact Information"
        phoneLabel="Phone"
        emailLabel="Email"
        addressLabel="Address"
        scheduleLabel="Schedule"
        mondayFriday="Monday to Friday: 9:00 AM - 7:00 PM"
        saturday="Saturdays: 9:00 AM - 2:00 PM"
        sendMessageTitle="Send Us a Message"
        fullNameLabel="Full Name"
        emailAddressLabel="Email Address"
        phoneNumberLabel="Phone"
        messageLabel="Message"
        sendButton="Send Message"
        successMessage="Thanks for your message! We'll get back to you soon."
      />

      <FooterSection />
    </div>
  )
}
