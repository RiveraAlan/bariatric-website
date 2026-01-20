import { Helmet } from 'react-helmet-async'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'

export default function Contacto() {
  return (
    <div>
      <Helmet>
        <title>Contacto | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Contáctanos para agendar una cita o videoconsulta. Atención personalizada, teléfonos de consultorio, correo y ubicación."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/contacto" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Contacto"
        title="Contáctanos"
        subtitle="Agenda una cita o videoconsulta. Atención personalizada."
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
