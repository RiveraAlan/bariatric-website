import { Helmet } from 'react-helmet-async'
import { CheckCircle, HeartPulse, Shield, TrendingDown } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import sleeveImage from '../assets/Facebook Image (2).jpg'
import recoveryImage from '../assets/Facebook Image (5).jpg'
import surgeryVideoUrl from '../assets/Facebook Video Download.mp4'

export default function BandaGastrica() {
  return (
    <div>
      <Helmet>
        <title>Manga Gástrica | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Conoce la cirugía de manga gástrica: descripción, resultados, riesgos, exámenes preoperatorios y dieta post-operatoria."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/banda-gastrica" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Cirugías"
        title="Manga Gástrica"
        subtitle="Descripción, resultados, riesgos y cuidados post-operatorios."
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
                  Procedimiento restrictivo y definitivo
                </h2>
                <p className="text-lg text-gray-600">
                  La manga gástrica es un procedimiento restrictivo de más reciente aparición para el
                  control de la obesidad. Se extrae del 70–80% del estómago (curvatura mayor), dejando
                  una “manga” que limita la cantidad de alimento.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-3xl font-bold text-primary-700">65.2%</div>
                  <div className="text-sm text-gray-600">Pérdida promedio del exceso de peso</div>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-3xl font-bold text-primary-700">70–80%</div>
                  <div className="text-sm text-gray-600">Estómago extraído</div>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-2">
                  <div className="text-3xl font-bold text-primary-700">Grelina</div>
                  <div className="text-sm text-gray-600">Se inhibe su producción en muchos casos</div>
                </div>
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
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={sleeveImage} alt="Manga gástrica" className="w-full h-[420px] object-cover" />
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Control del apetito, reducción de ingesta y resultados sostenibles con seguimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Pérdida de peso</div>
              <div className="text-gray-600">
                Los pacientes con manga gástrica pueden conseguir una pérdida del exceso de peso
                promedio de 65.2%.
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Control del apetito</div>
              <div className="text-gray-600">
                Se inhibe la producción de la hormona Grelina, que se produce en el fondo del estómago.
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Procedimiento definitivo</div>
              <div className="text-gray-600">
                Se extrae del 70–80% del estómago, curvatura mayor.
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-700" />
              </div>
              <div className="font-bold text-gray-900">Enfoque integral</div>
              <div className="text-gray-600">
                Mejores resultados con nutrición, ejercicio y seguimiento médico.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-200">
              <video
                src={surgeryVideoUrl}
                className="w-full h-[420px] object-cover"
                controls
                playsInline
              />
            </div>

            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                Descripción
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿En qué consiste?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>La manga gástrica es un procedimiento restrictivo.</p>
                <p>
                  Procedimiento quirúrgico de más reciente aparición para el control de la obesidad.
                </p>
                <p>
                  Se coloca una sonda del 60 fr, ferulizando la curvatura menor del estómago.
                </p>
                <p>
                  Procedimiento definitivo (Se extrae del 70-80% del estómago, curvatura mayor).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                Resultados
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Resultados esperados</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Los pacientes con manga gástrica pueden conseguir una pérdida del exceso de peso
                    promedio de 65.2%.
                  </li>
                  <li>
                    Además, con el procedimiento de la manga gástrica se inhibe la producción de la
                    hormona Grelina, que se produce en el fondo del estómago.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={recoveryImage} alt="Recuperación" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Riesgos</h2>
              <p className="text-lg text-gray-600">
                Toda cirugía tiene riesgos. Una evaluación completa y seguimiento reducen complicaciones.
              </p>
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fugas</li>
                  <li>Sangrado en la línea del engrapado</li>
                  <li>Obstrucción postoperatoria</li>
                  <li>Reflujo gástrico</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8 space-y-6">
              <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                Exámenes preoperatorios
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
                    <span>TP</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5" />
                    <span>TPT</span>
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

              <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-4">
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Agenda una cita</div>
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

              {/* <div className="text-xs text-gray-500">
                COFEPRIS Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dieta post-operatoria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una guía general de progresión. Tu equipo médico ajustará según tu caso.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-2">
              <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Dieta</div>
              <div className="text-xl font-bold text-primary-700">1 semana</div>
              <div className="text-gray-700">Líquidos claros</div>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-2">
              <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Dieta</div>
              <div className="text-xl font-bold text-primary-700">2 - 3 semanas</div>
              <div className="text-gray-700">
                Ingerir alimentos cocidos o licuados. Cada comida deberá de ser de 200cc,
                es decir aproximadamente 1 taza. Comer lentamente pero no durar más de 30
                minutos. Líquidos entre cada comida ilimitados.
              </div>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-2">
              <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Dieta</div>
              <div className="text-xl font-bold text-primary-700">1 - 6 meses</div>
              <div className="text-gray-700">Mantener una dieta con alto contenido de proteínas</div>
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
