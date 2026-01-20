import NavigationHeader from '../components/NavigationHeader.tsx'
import HeroSection from '../components/HeroSection.tsx'
import AboutSection from '../components/AboutSection.tsx'
import ServicesSection from '../components/ServicesSection.tsx'
import GlobalReachSection from '../components/GlobalReachSection.tsx'
import TeamSection from '../components/TeamSection.tsx'
import TestimonialsSection from '../components/TestimonialsSection.tsx'
import FAQSection from '../components/FAQSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import FooterSection from '../components/FooterSection.tsx'

type HomeProps = {
  locale?: 'en' | 'es',
}

export default function Home({ locale = 'es' }: HomeProps) {
  const isEnglish = locale === 'en'

  return (
    <div>
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GlobalReachSection />
      <TeamSection />
      <TestimonialsSection
        title={isEnglish ? 'Success Stories' : 'Historias de Éxito'}
        subtitle={isEnglish
          ? 'Learn about the experiences of our patients and how they have transformed their lives'
          : 'Conoce las experiencias de nuestros pacientes y cómo han transformado sus vidas'}
        weightLossLabel={isEnglish ? 'Weight loss' : 'Pérdida de peso'}
        procedureLabel={isEnglish ? 'Procedure' : 'Procedimiento'}
        videoTestimonialsTitle={isEnglish ? 'Video Testimonials' : 'Video Testimonios'}
        hoverHint={isEnglish ? 'Hover to see before/after' : 'Pasa el cursor para ver antes/después'}
        beforeLabel={isEnglish ? 'Before' : 'Antes'}
        afterLabel={isEnglish ? 'After' : 'Después'}
        ageLabel={isEnglish ? 'years' : 'años'}
      />
      <FAQSection />
      <ContactSection
        title={isEnglish ? 'Schedule Your Consultation' : 'Agenda tu Consulta'}
        subtitle={isEnglish
          ? 'We are here to help you. Contact us and take the first step towards a healthier life'
          : 'Estamos aquí para ayudarte. Contáctanos y da el primer paso hacia una vida más saludable'}
        contactInfoTitle={isEnglish ? 'Contact Information' : 'Información de Contacto'}
        phoneLabel={isEnglish ? 'Phone' : 'Teléfono'}
        emailLabel={isEnglish ? 'Email' : 'Email'}
        addressLabel={isEnglish ? 'Address' : 'Dirección'}
        scheduleLabel={isEnglish ? 'Schedule' : 'Horario'}
        mondayFriday={isEnglish ? 'Monday to Friday: 9:00 AM - 7:00 PM' : 'Lunes a Viernes: 9:00 AM - 7:00 PM'}
        saturday={isEnglish ? 'Saturdays: 9:00 AM - 2:00 PM' : 'Sábados: 9:00 AM - 2:00 PM'}
        sendMessageTitle={isEnglish ? 'Send Us a Message' : 'Envíanos un Mensaje'}
        fullNameLabel={isEnglish ? 'Full Name' : 'Nombre Completo'}
        emailAddressLabel={isEnglish ? 'Email Address' : 'Correo Electrónico'}
        phoneNumberLabel={isEnglish ? 'Phone' : 'Teléfono'}
        messageLabel={isEnglish ? 'Message' : 'Mensaje'}
        sendButton={isEnglish ? 'Send Message' : 'Enviar Mensaje'}
        successMessage={isEnglish
          ? "Thanks for your message! We'll get back to you soon."
          : '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'}
      />
      <FooterSection />
    </div>
  )
}
