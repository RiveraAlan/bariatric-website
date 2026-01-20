import { Helmet } from 'react-helmet-async'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

export default function Testimonials() {
  return (
    <div>
      <Helmet>
        <title>Testimonials | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Before and after testimonials from bariatric surgery patients."
        />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Testimonials"
        title="Testimonials"
        subtitle="Success stories from patients who have undergone bariatric surgery."
      />

      <TestimonialsSection
        title="Success Stories"
        subtitle="Learn about the experiences of our patients and how they have transformed their lives"
        weightLossLabel="Weight loss"
        procedureLabel="Procedure"
        videoTestimonialsTitle="Video Testimonials"
        hoverHint="Hover to see before/after"
        beforeLabel="Before"
        afterLabel="After"
        ageLabel="years"
      />

      <ContactSection
        title="Schedule Your Consultation"
        subtitle="We are here to help you. Contact us and take the first step towards a healthier life"
        contactInfoTitle="Contact Information"
        phoneLabel="Phone"
        emailLabel="Email"
        addressLabel="Address"
        scheduleLabel="Schedule"
        mondayFriday="Monday to Friday: 9:00 AM - 7:00 PM"
        saturday="Saturdays: 9:00 AM - 2:00 PM"
        sendMessageTitle="Send Us a Message"
        fullNameLabel="Full Name"
        emailAddressLabel="Email Address"
        phoneNumberLabel="Phone"
        messageLabel="Message"
        sendButton="Send Message"
        successMessage="Thanks for your message! We'll get back to you soon."
      />

      <FooterSection />
    </div>
  )
}
