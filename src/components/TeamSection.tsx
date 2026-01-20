import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Award } from 'lucide-react'

type TeamMember = {
  name: string,
  title: string,
  image: string,
  credentials: string[],
}

export default function TeamSection() {
  const { t } = useTranslation()

  const team = useMemo<TeamMember[]>(() => [
    {
      name: 'Dr. Fernando Aceves',
      title: t('team.bariatricSurgeon'),
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      credentials: [
        t('team.certifiedBy'),
        t('team.laparoscopicSpecialist'),
        `15+ ${t('team.yearsExperience')}`,
      ],
    },
    {
      name: 'Dra. María González',
      title: t('team.clinicalNutritionist'),
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      credentials: [
        t('team.bariatricNutritionSpecialist'),
        t('team.nutritionMasters'),
        t('team.certifiedClinicalNutrition'),
      ],
    },
    {
      name: 'Dr. Carlos Ramírez',
      title: t('team.anesthesiologist'),
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      credentials: [
        t('team.certifiedAnesthesiology'),
        t('team.bariatricAnesthesiaSpecialist'),
        `10 ${t('team.yearsExperience')}`,
      ],
    },
    {
      name: 'Lic. Ana Martínez',
      title: t('team.clinicalPsychologist'),
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      credentials: [
        t('team.obesityPsychologySpecialist'),
        t('team.cognitiveBehavioralTherapy'),
        t('team.prePostOperativeSupport'),
      ],
    },
  ], [t])

  return (
    <section id="team" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 h-[400px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-200 text-sm">{member.title}</p>
                </div>
              </div>

              <div className="space-y-2">
                {member.credentials.map((credential, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('team.readyToTransform')}
          </h3>
          <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
            {t('team.readyToTransformDesc')}
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center">
            {t('team.scheduleNow')}
          </a>
        </div>
      </div>
    </section>
  )
}
