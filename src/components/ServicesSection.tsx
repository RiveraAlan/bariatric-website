import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Heart, Activity, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import sleeveImage from '../assets/Facebook Image (2).jpg'
import bypassImage from '../assets/Facebook Image (1).jpg'
import miniBypassImage from '../assets/Facebook Image (4).jpg'
import bipartitionImage from '../assets/Facebook Image.jpg'

type Service = {
  title: string,
  description: string,
  image: string,
  href: string,
  benefits: string[],
}

export default function ServicesSection() {
  const { t } = useTranslation()

  const services = useMemo<Service[]>(() => [
    {
      title: t('services.gastricSleeve'),
      description: t('services.gastricSleeveDesc'),
      image: sleeveImage,
      href: '/manga-gastrica',
      benefits: [
        t('services.effectiveWeightLoss'),
        t('services.metabolicImprovement'),
        t('services.quickRecovery'),
        t('services.safeProcedure'),
      ],
    },
    {
      title: t('services.gastricBypass'),
      description: t('services.gastricBypassDesc'),
      image: bypassImage,
      href: '/bypass-gastrico',
      benefits: [
        t('services.longTermResults'),
        t('services.diabetesControl'),
        t('services.comorbiditiesReduction'),
        t('services.qualityOfLifeImprovement'),
      ],
    },
    {
      title: t('services.miniBypass'),
      description: t('services.miniBypassDesc'),
      image: miniBypassImage,
      href: '/mini-bypass',
      benefits: [
        t('services.effectiveWeightLoss'),
        t('services.diabetesControl'),
        t('services.metabolicImprovement'),
        t('services.quickRecovery'),
      ],
    },
    {
      title: t('services.intestinalBipartition'),
      description: t('services.intestinalBipartitionDesc'),
      image: bipartitionImage,
      href: '/biparticion-intestinal',
      benefits: [
        t('services.longTermResults'),
        t('services.diabetesControl'),
        t('services.metabolicImprovement'),
        t('services.qualityOfLifeImprovement'),
      ],
    },
  ], [t])

  return (
    <section id="surgeries" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center text-primary-700 font-semibold">
                  {t('services.viewDetails')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('services.whyChooseUs')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('services.personalizedAttention')}</h4>
              <p className="text-gray-600">{t('services.personalizedAttentionDesc')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Activity className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('services.advancedTechnology')}</h4>
              <p className="text-gray-600">{t('services.advancedTechnologyDesc')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('services.provenExperience')}</h4>
              <p className="text-gray-600">{t('services.provenExperienceDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
