import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, HeartPulse, Shield } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'
import bypassImage from '../assets/Facebook Image (1).jpg'
import sleeveImage from '../assets/Facebook Image (2).jpg'

export default function Cirugias() {
  return (
    <div>
      <Helmet>
        <title>Cirugías | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Cirugía bariátrica: conoce nuestros servicios, procedimientos disponibles y cómo agendar una cita o videoconsulta."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/cirugias" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Cirugías"
        title="Cirugías"
        subtitle="Cirugía bariátrica y procedimientos disponibles."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">Cirugía bariátrica</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nuestros servicios
              </h2>
              <p className="text-lg text-gray-600">
                Te ayudamos a elegir el procedimiento adecuado con una evaluación completa, seguimiento
                y atención personalizada.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Evaluación</div>
                  <div className="text-sm text-gray-600">Cardiología, nutrición y psicología</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Seguridad</div>
                  <div className="text-sm text-gray-600">Protocolos y seguimiento post-op</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Resultados</div>
                  <div className="text-sm text-gray-600">Enfoque integral y hábitos sostenibles</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#procedimientos" className="btn-secondary inline-flex items-center justify-center">
                  Ver procedimientos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+523331017777"
                  className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  (33) 3101 7777
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={bypassImage} alt="Cirugía bariátrica" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="procedimientos" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">Cirugías</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Procedimientos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/banda-gastrica"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={sleeveImage}
                  alt="Manga Gástrica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  Manga Gástrica
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-gray-600">
                  Conoce en qué consiste la manga gástrica, beneficios y consideraciones.
                </div>
                <div className="inline-flex items-center text-primary-700 font-semibold">
                  Ver detalles
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/bypass-gastrico"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={bypassImage}
                  alt="Bypass Gástrico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  Bypass Gástrico
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-gray-600">
                  Descripción, resultados, riesgos y cuidados post-operatorios del bypass gástrico.
                </div>
                <div className="inline-flex items-center text-primary-700 font-semibold">
                  Ver detalles
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          {/* <div className="mt-10 text-xs text-gray-500">
            COFEPRIS Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
          </div> */}
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
