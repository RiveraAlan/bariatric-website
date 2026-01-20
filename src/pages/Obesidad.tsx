import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Activity,
  ArrowRight,
  Scale,
  Shield,
} from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import AboutSection from '../components/AboutSection'
import obesityImage from '../assets/Facebook Image (6).jpg'

export default function Obesidad() {
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
        <title>Obesidad | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="¿Qué es la obesidad? Tratamientos médicos y quirúrgicos, opciones de cirugía bariátrica, riesgos y cálculo de IMC."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/obesidad" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Obesidad"
        title="Obesidad"
        subtitle="Información, tratamiento, riesgos y opciones quirúrgicas."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                ¿Qué es la obesidad?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Una alteración metabólica crónica
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La obesidad es una alteración metabólica crónica. Se dice que una persona es obesa
                  cuando tiene un exceso de tejido adiposo (grasa corporal) que le origina un aumento
                  de peso corporal con respecto a lo que correspondería según su sexo, talla y edad.
                </p>
                <p>
                  La obesidad es causa de una considerable morbilidad y mortalidad, tiene un profundo
                  impacto negativo sobre la calidad de vida, y se ha convertido en un problema social.
                </p>
                <p>
                  Actualmente lo sufren un número muy importante de personas y ha ido aumentando
                  considerablemente en los últimos años.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#tratamiento" className="btn-secondary inline-flex items-center justify-center">
                  Ver tratamiento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#bmi"
                  className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Calcular IMC
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={obesityImage} alt="Obesidad" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="tratamiento" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tratamiento</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El abordaje puede ser médico o quirúrgico, según tu caso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Médico</div>
              <div className="text-gray-700 leading-relaxed">
                Para el tratamiento del sobrepeso y la obesidad se pueden recurrir a dietas,
                fármacos, ejercicio, modificación de conductas supervisado por el especialista en
                nutrición.
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Quirúrgico</div>
              <div className="text-gray-700 leading-relaxed">
                Los procedimientos quirúrgicos se aplican en el tratamiento de la obesidad cuando el
                tratamiento médico falla, la cirugía bariátrica resulta ser una opción para bajar de
                peso.
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl border-2 border-gray-200 p-8">
            <div className="text-sm font-bold tracking-wide text-primary-700 uppercase mb-4">
              Las opciones quirúrgicas son
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/banda-gastrica"
                className="group rounded-xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              >
                <div className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  Manga Gástrica
                </div>
                <div className="text-sm text-gray-600 mt-1">Ver detalles del procedimiento</div>
              </a>
              <a
                href="/bypass-gastrico"
                className="group rounded-xl border border-gray-200 p-6 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              >
                <div className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  Bypass Gástrico
                </div>
                <div className="text-sm text-gray-600 mt-1">Ver detalles del procedimiento</div>
              </a>
            </div>

            <div className="text-sm text-gray-600 mt-6">
              La cirugía bariátrica, por sí sola no cura la obesidad, ya que después de la cirugía se
              debe de seguir un plan de alimentación adecuada para bajar de peso (supervisado por un
              especialista en nutrición).
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Condiciones de salud relacionadas
              </h2>
              <p className="text-lg text-gray-600">
                La obesidad puede causar diversos problemas en la salud, tanto físicos como
                psicológicos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8">
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                <div>Cardiopatía isquémica (angina de pecho, infarto al miocardío).</div>
                <div>Hipertensión arterial sistémica (presión alta).</div>
                <div>Dislipidemia (aumento de colesterol y triglicéridos).</div>
                <div>Aumento de ácido úrico.</div>
                <div>Problemas vasculares, como insuficiencia venosa.</div>
                <div>Diabetes mellitus.</div>
                <div>Infertilidad.</div>
                <div>Problemas en vesícula biliar.</div>
                <div>Dolor de espalda y rodillas.</div>
                <div>Dificultad para realizar movimientos.</div>
                <div>Apnea del sueño (detenciones de la respiración durante el sueño).</div>
                <div>Psicológicos y psicosociales (como disminución de la autoestima).</div>
                <div>Higiene personal.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bmi" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                    Índice de masa corporal
                  </div>
                  <div className="text-2xl font-bold text-gray-900">IMC</div>
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed">
                Es el método utilizado para establecer el rango más saludable que puede tener una
                persona entre su talla y peso. Es un indicador nutricional el cual resulta de la
                división de la masa (kilogramos) entre el cuadrado de la estatura (metros). Si su IMC
                es mayor a 30, es considerado como obesidad.
              </div>

              <div className="text-gray-700">
                Puedes calcularlo en el sitio con nuestra herramienta.
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Calculadora</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUnits('metric')}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                      units === 'metric'
                        ? 'bg-white border-primary-300 text-primary-700'
                        : 'bg-transparent border-gray-200 text-gray-700'
                    }`}
                  >
                    Métrico
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
                    <label className="text-sm font-semibold text-gray-700">Estatura (cm)</label>
                    <input
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Peso (kg)</label>
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
                    <label className="text-sm font-semibold text-gray-700">Estatura (pies)</label>
                    <input
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Estatura (pulgadas)</label>
                    <input
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      inputMode="decimal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Peso (lb)</label>
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
                <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">Tu IMC</div>
                <div className="text-4xl font-bold text-primary-700 mt-2">
                  {bmi ? bmi.toFixed(1) : '--'}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-10 text-xs text-gray-500">
            COFEPRIS Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
          </div> */}
        </div>
      </section>

      <AboutSection />

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
