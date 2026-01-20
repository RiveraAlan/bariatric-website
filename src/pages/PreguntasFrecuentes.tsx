import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'

type FAQ = {
  question: string,
  answer: string,
}

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQ[] = [
    {
      question: '¿CÓMO SABER SI SOY CANDIDATO PARA LA CIRUGÍA?',
      answer: 'Si su IMC es mayor a 35 y su condición de salud está relacionada con la obesidad, indican la necesidad de reducir de peso.',
    },
    {
      question: '¿QUÉ PROCEDIMIENTO ES MEJOR PARA MÍ?',
      answer: 'Usted y su médico deben de elegir el mejor método de acuerdo a su edad, peso, antecedentes y estado de salud actual.',
    },
    {
      question: '¿QUÉ ES EL ÍNDICE DE MASA COPORAL IMC?',
      answer: 'Es el método utilizado para establecer el rango más saludable que puede tener una persona entre su talla y peso. Es un indicador nutricional el cual resulta de la división de la masa (kilogramos) entre el cuadrado de la estatura (metros).',
    },
    {
      question: '¿TODAS LAS CIRUGÍAS BARIÁTRICAS SON REALIZADAS MEDIANTE LAPAROSCOPÍA?',
      answer: 'Las cirugías se realizan por laparoscopía, aunque en algunos casos se puede requerir que sea cirugía abierta.',
    },
    {
      question: '¿CUÁNTO TIEMPO DURA LA CIRUGÍA?',
      answer: 'Entre 1 y 3 horas dependiendo del procedimiento efectuado.',
    },
    {
      question: '¿CUÁNTO ES EL TIEMPO DE HOSPITALIZACIÓN?',
      answer: '1 día para banda gástrica. 4 días para manga gástrica. 4 días para bypass.',
    },
    {
      question: '¿SI VIVO FUERA DE GUADALAJARA, CUÁNTO TIEMPO DEBO DE PERMANECER EN LA CIUDAD?',
      answer: 'Puede dejar la ciudad el mismo día en que usted es dado de alta del hospital.',
    },
    {
      question: '¿EN QUE FORMA CAMBIARÁ MI VIDA?',
      answer: 'Para que la cirugía efectuada tenga éxito, sus hábitos alimenticios deberán cambiar, usted tendrá que tener una dieta controlada por un especialista en nutrición. Así mismo será importante el iniciar una rutina de ejercicio moderado.',
    },
    {
      question: '¿CUÁNTO TIEMPO DEBO ESPERAR PARA EMBARAZARME?',
      answer: 'Podrá tratar de embarazarse despúes de 2 años.',
    },
    {
      question: '¿CUÁNTO TIEMPO PASARÁ PARA QUE PUEDA REGRESAR A MI NIVEL DE ACTIVIDAD, ANTERIOR AL PROCEDIMIENTO QUIRÚRGICO?',
      answer: 'Estas varían en cada persona según las condiciones físicas del paciente, naturaleza de la actividad que quiera hacer y el tipo de cirugía al que fue sometido. Usted podrá trabajar en algunos casos. Normalmente son 3 y 6 semanas posteriores al procedimiento.',
    },
    {
      question: '¿A QUE EDAD ME PUEDO PRACTICAR LA CIRUGÍA?',
      answer: 'Desde adultos jóvenes (17 años) hasta la edad entre 60 y 70, esta última dependiendo de cada paciente.',
    },
    {
      question: '¿DEBO TOMAR VITAMINAS DESPUÉS DE PRACTICADA LA CIRUGÍA?',
      answer: 'Normalmente no se requieren vitaminas después de la colocación de la banda gástrica. En los procedimientos de manga y bypass gástrico, su médico le indicará la dosis y suplementos alimenticios a tomar.',
    },
    {
      question: '¿LA CIRUGÍA DE BANDA GÁSTRICA ES REVERSIBLE?',
      answer: 'Si, éste es un proceso que puede ser reversado completamente, solamente es necesario remover la banda de silicón.',
    },
    {
      question: '¿DESPUÉS DE LA CIRUGÍA, TENDRÉ QUE EVITAR ALGÚN TIPO DE COMIDAS Y BEBIDAS?',
      answer: 'Usted podrá comer y beber casi todo. Podrá tener dificultad en ingerir ciertos alimentos como carne roja y pan. Con respecto a las bebidas deberá evitar las bebidas gaseosas.',
    },
    {
      question: '¿SI SOY DE FUERA, ES NECESARIO QUE LLEVE UN ACOMPAÑANTE?',
      answer: 'No es necesario que usted traiga un acompañante, nosotros le vamos a ayudar desde el momento que llega a Guadalajara hasta el día en que lo den de alta del hospital. Pero si usted se siente mejor y más seguro con un acompañante, usted puede traerlo.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <Helmet>
        <title>Preguntas Frecuentes | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Resuelve tus dudas sobre cirugía bariátrica: candidatos, procedimientos, IMC, laparoscopía, tiempos de cirugía y recuperación, vitaminas, dieta y más."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/preguntas-frecuentes" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Preguntas Frecuentes"
        title="Preguntas Frecuentes"
        subtitle="Resuelve tus dudas sobre cirugía bariátrica."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <a href="#contact" className="btn-primary inline-flex items-center">
              Contactar especialista
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
