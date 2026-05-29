import { Helmet } from 'react-helmet-async'
import { CheckCircle, HeartPulse, Shield, TrendingDown } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import procedureImage from '../assets/Facebook Image (4).jpg'
import recoveryImage from '../assets/Facebook Image (1).jpg'

export default function MiniBypass() {
  return (
    <div>
      <Helmet>
        <title>Mini Bypass Gástrico | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Conoce el mini bypass gástrico (una anastomosis): descripción, beneficios, consideraciones, estudios preoperatorios y dieta post-operatoria."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/mini-bypass" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Cirugías"
        title="Mini Bypass Gástrico"
        subtitle="Bypass de una sola anastomosis: descripción, beneficios y cuidados."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                  Resumen
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Un bypass más simple y eficaz
                </h2>
                <p className="text-lg text-gray-600">
                  El mini bypass gástrico, o bypass de una sola anastomosis, combina restricción
                  de la ingesta con una reducción de la absorción mediante una única conexión
                  intestinal. Esto simplifica la cirugía y acorta el tiempo quirúrgico, manteniendo
                  excelentes resultados en pérdida de peso y control metabólico.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                  Agendar consulta
                </a>
                <a
                  href="tel:+523331017777"
                  className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  (33) 3101 7777
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-2xl font-bold text-primary-700">1 anastomosis</div>
                  <div className="text-sm text-gray-600">Una sola conexión intestinal</div>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-2xl font-bold text-primary-700">Menor tiempo</div>
                  <div className="text-sm text-gray-600">Cirugía más corta que el Y de Roux</div>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-2xl font-bold text-primary-700">Metabólico</div>
                  <div className="text-sm text-gray-600">Mejora de diabetes tipo 2 e hipertensión</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={procedureImage} alt="Mini bypass gástrico" className="w-full h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 max-w-xs">
                  <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">COFEPRIS</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={recoveryImage} alt="Recuperación" className="w-full h-[420px] object-cover" />
            </div>

            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                ¿Cómo funciona?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Descripción</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Se crea una bolsa gástrica alargada y estrecha a partir del estómago, que se
                  conecta directamente a un asa del intestino delgado mediante una sola anastomosis.
                </p>
                <p>
                  De esta forma se reduce la cantidad de alimento que se puede ingerir y se disminuye
                  la absorción de calorías, apoyando una pérdida de peso significativa.
                </p>
                <p>
                  Al requerir una única conexión, el procedimiento es técnicamente más sencillo y
                  habitualmente más rápido que el bypass gástrico en Y de Roux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resultados, control metabólico y cambios sostenibles con seguimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Pérdida de peso</div>
              <div className="text-gray-600">Pérdida de peso significativa y sostenida con el cambio de estilo de vida.</div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Mejoría metabólica</div>
              <div className="text-gray-600">Buen control de la diabetes tipo 2 y otras condiciones asociadas a la obesidad.</div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Una sola conexión</div>
              <div className="text-gray-600">Menos tiempo quirúrgico y una única anastomosis intestinal.</div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Recuperación favorable</div>
              <div className="text-gray-600">Procedimiento laparoscópico con recuperación apoyada por seguimiento del equipo.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Consideraciones</h2>
              <p className="text-lg text-gray-600">
                Toda cirugía tiene riesgos. Una evaluación completa y el seguimiento reducen
                complicaciones.
              </p>
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posibles deficiencias nutricionales (hierro, vitamina B12 y calcio) que requieren suplementación.</li>
                  <li>Posibilidad de reflujo biliar en algunos casos.</li>
                  <li>Necesidad de seguimiento nutricional y cambios permanentes en el estilo de vida.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 space-y-6">
              <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                Estudios preoperatorios
              </div>
              <div className="text-gray-700">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Biometría Hemática completa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Química Sanguínea completa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Perfil de Lípidos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Perfil Tiroideo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Exámen General de Orina</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Ultrasonido de abdomen alto</span>
                  </div>
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>Valoraciones médicas (cardiológica, nutricional y psicológica)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 space-y-4">
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                  Agenda una cita
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+523331017777"
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    (33) 3101 7777
                  </a>
                  <a
                    href="#contact"
                    className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center w-full"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Agenda tu Consulta"
        subtitle="Estamos aquí para ayudarte. Contáctanos y da el primer paso hacia una vida más saludable"
        contactInfoTitle="Información de Contacto"
        phoneLabel="Teléfono"
        emailLabel="Email"
        addressLabel="Dirección"
        scheduleLabel="Horario"
        mondayFriday="Lunes a Viernes: 9:00 AM - 7:00 PM"
        saturday="Sábados: 9:00 AM - 2:00 PM"
        sendMessageTitle="Envíanos un Mensaje"
        fullNameLabel="Nombre Completo"
        emailAddressLabel="Correo Electrónico"
        phoneNumberLabel="Teléfono"
        messageLabel="Mensaje"
        sendButton="Enviar Mensaje"
        successMessage="¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
      />

      <FooterSection />
    </div>
  )
}
