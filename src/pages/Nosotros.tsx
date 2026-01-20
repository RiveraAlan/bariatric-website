import { Helmet } from 'react-helmet-async'
import { Award, Download, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'
import doctorImage from '../assets/Nosotros Image.avif'

export default function Nosotros() {
  return (
    <div>
      <Helmet>
        <title>Nosotros | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Conoce quiénes somos, nuestra misión, objetivos y la trayectoria del Dr. Fernando Aceves en cirugía bariátrica."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/nosotros" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Nosotros"
        title="Quiénes somos"
        subtitle="Clínica certificada en cirugía de obesidad, integrada por especialistas con experiencia en el manejo del paciente obeso."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                Obesity Fernando Aceves
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nuestros objetivos
              </h2>
              <p className="text-lg text-gray-600">
                Somos una clínica certificada en cirugía de obesidad, integrada por especialistas con
                experiencia en el manejo del paciente obeso.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Proveer</div>
                  <div className="text-gray-600">Servicios de salud</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Mejorar</div>
                  <div className="text-gray-600">
                    La salud actual del paciente y prevenir comorbilidades
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Ayudar</div>
                  <div className="text-gray-600">
                    En la elección del mejor procedimiento quirúrgico
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Lograr</div>
                  <div className="text-gray-600">
                    Bajar de peso de manera segura y mantener el peso ideal a largo plazo
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-200">
              <img
                src={doctorImage}
                alt="Dr. Fernando Aceves"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                  Dr. Fernando Aceves
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Trayectoria y certificaciones
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Graduado de la Universidad Autónoma de Guadalajara como Médico Cirujano (diploma
                  expedido por la Universidad Nacional Autónoma de México) con Cédula Profesional No.
                  1440914.
                </p>
                <p>
                  Especialidad en Cirugía General Centro Médico de Occidente de Guadalajara, Jal.
                  Diploma emitido por el Instituto Mexicano del Seguro Social, Cédula de Especialidad
                  No. 3223758.
                </p>
                <p>
                  Certificado por el Consejo Mexicano de Cirugía General como Especialista en Cirugía
                  General, Certificado No. C3872.
                </p>
                <p>
                  Certificado como Especialista en Cirugía Bariátrica por el Consejo Mexicano de
                  Cirugía General A.C. y por el Colegio Mexicano de Cirugía de Obesidad y
                  Enfermedades Metabólicas, certificado No. COEM1324.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl bg-white border-2 border-gray-200 p-6 space-y-4">
                  <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                    Descargar CV
                  </div>
                  <a
                    href="https://www.obesityfernandoaceves.com/_files/ugd/20be60_3e98c9318ec141329fe5912ff054af23.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar
                  </a>
                </div>

                {/* <div className="text-xs text-gray-500">
                  COFEPRIS Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
                </div> */}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TeamSection />

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
