import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getStateBySlug } from '../data/states'
import NavigationHeader from '../components/NavigationHeader.tsx'
import MedicalTourismHero from '../components/MedicalTourismHero.tsx'
import WhyMedicalTourismSection from '../components/WhyMedicalTourismSection.tsx'
import CostComparisonSection from '../components/CostComparisonSection.tsx'
import TravelLogisticsSection from '../components/TravelLogisticsSection.tsx'
import StateTestimonialsSection from '../components/StateTestimonialsSection.tsx'
import ServicesSection from '../components/ServicesSection.tsx'
import FAQSection from '../components/FAQSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import FooterSection from '../components/FooterSection.tsx'

type StatePageProps = {
  stateSlug: string,
}

export default function StatePage({ stateSlug }: StatePageProps) {
  const navigate = useNavigate()
  const stateData = getStateBySlug(stateSlug)

  useEffect(() => {
    if (!stateData) {
      navigate('/')
    }
  }, [stateData, navigate])

  if (!stateData) return null

  return (
    <div>
      <Helmet>
        <title>{stateData.metaTitle}</title>
        <meta name="description" content={stateData.metaDescription} />
        <meta property="og:title" content={stateData.metaTitle} />
        <meta property="og:description" content={stateData.metaDescription} />
        <meta 
          name="keywords" 
          content={`bariatric surgery ${stateData.name}, weight loss surgery ${stateData.abbreviation}, gastric sleeve ${stateData.name}, gastric bypass ${stateData.name}, ${stateData.majorCities.join(', ')}`}
        />
      </Helmet>

      <NavigationHeader />
      <MedicalTourismHero stateData={stateData} />
      <WhyMedicalTourismSection />
      <CostComparisonSection stateData={stateData} />
      <ServicesSection />
      <TravelLogisticsSection stateData={stateData} />
      <StateTestimonialsSection stateData={stateData} />
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
