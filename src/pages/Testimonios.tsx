import { Helmet } from 'react-helmet-async'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

export default function Testimonios() {
  return (
    <div>
      <Helmet>
        <title>Testimonios | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Testimonios de pacientes antes y después de cirugía bariátrica."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/testimonios" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Testimonios"
        title="Testimonios"
        subtitle="Compartimos algunos testimonios gráficos de nuestros pacientes antes y después de haberse sometido a un procedimiento de cirugía bariátrica."
      />

      <TestimonialsSection
        title="Historias de Éxito"
        subtitle="Conoce las experiencias de nuestros pacientes y cómo han transformado sus vidas"
        weightLossLabel="Pérdida de peso"
        procedureLabel="Procedimiento"
        videoTestimonialsTitle="Video Testimonios"
        hoverHint="Pasa el cursor para ver antes/después"
        beforeLabel="Antes"
        afterLabel="Después"
        ageLabel="años"
      />

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
