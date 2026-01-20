import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, HeartPulse, Shield } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'
import bypassImage from '../assets/Facebook Image (1).jpg'
import sleeveImage from '../assets/Facebook Image (2).jpg'

export default function Surgeries() {
  return (
    <div>
      <Helmet>
        <title>Surgeries | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Bariatric surgery options and services. Learn about procedures and schedule a consultation."
        />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Surgeries"
        title="Surgeries"
        subtitle="Bariatric surgery and available procedures."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">Bariatric surgery</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our services</h2>
              <p className="text-lg text-gray-600">
                We help you choose the right procedure with a comprehensive evaluation and follow-up.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Evaluation</div>
                  <div className="text-sm text-gray-600">Nutrition, psychology, and cardiology</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Safety</div>
                  <div className="text-sm text-gray-600">Protocols and post-op follow-up</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Results</div>
                  <div className="text-sm text-gray-600">Sustainable habits and support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#procedures" className="btn-secondary inline-flex items-center justify-center">
                  View procedures
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+523331017777"
                  className="bg-white hover:bg-gray-50 text-primary-700 font-semibold py-3 px-6 rounded-lg border-2 border-primary-200 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  (33) 3101 7777
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={bypassImage} alt="Bariatric surgery" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="procedures" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">Procedures</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Options</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/banda-gastrica"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img src={sleeveImage} alt="Gastric Sleeve" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Gastric Sleeve</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-gray-600">Learn about the gastric sleeve procedure and considerations.</div>
                <div className="inline-flex items-center text-primary-700 font-semibold">
                  View details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/bypass-gastrico"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img src={bypassImage} alt="Gastric Bypass" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Gastric Bypass</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-gray-600">Description, results, risks, and post-op guidance.</div>
                <div className="inline-flex items-center text-primary-700 font-semibold">
                  View details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

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
