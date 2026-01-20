import { Helmet } from 'react-helmet-async'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

export default function Faq() {
  return (
    <div>
      <Helmet>
        <title>FAQ | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Frequently asked questions about bariatric surgery: candidacy, procedures, recovery, and more."
        />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about bariatric surgery."
      />

      <FAQSection />

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
