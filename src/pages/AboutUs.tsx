import { Helmet } from 'react-helmet-async'
import { Award, Download, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'
import doctorImage from '../assets/Nosotros Image.avif'

export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us | Dr. Fernando Aceves</title>
        <meta
          name="description"
          content="Learn about our bariatric surgery clinic, mission, and the experience of Dr. Fernando Aceves."
        />
        <link rel="canonical" href="https://www.obesityfernandoaceves.com/about-us" />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="About"
        title="Who we are"
        subtitle="A certified obesity surgery clinic integrated by specialists with experience in the management of the patient with obesity."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                Obesity Fernando Aceves
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our goals
              </h2>
              <p className="text-lg text-gray-600">
                We are a certified obesity surgery clinic integrated by specialists with experience in
                the management of the patient with obesity.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Provide</div>
                  <div className="text-gray-600">Healthcare services</div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Improve</div>
                  <div className="text-gray-600">
                    Your current health and help prevent comorbidities
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Help</div>
                  <div className="text-gray-600">
                    You choose the best surgical procedure
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="font-bold text-gray-900">Achieve</div>
                  <div className="text-gray-600">
                    Safe weight loss and long-term maintenance of your ideal weight
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-200">
              <img
                src={doctorImage}
                alt="Dr. Fernando Aceves"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="text-sm font-bold tracking-wide text-primary-700 uppercase">
                  Dr. Fernando Aceves
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Background and certifications
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Graduate of Universidad Autónoma de Guadalajara as a Physician and Surgeon (degree
                  issued by Universidad Nacional Autónoma de México) with Professional License No.
                  1440914.
                </p>
                <p>
                  Specialty in General Surgery, Centro Médico de Occidente, Guadalajara, Jal. Diploma
                  issued by Instituto Mexicano del Seguro Social, Specialty License No. 3223758.
                </p>
                <p>
                  Certified by the Mexican Council of General Surgery as a General Surgery Specialist,
                  Certificate No. C3872.
                </p>
                <p>
                  Certified as a Bariatric Surgery Specialist by the Mexican Council of General Surgery
                  A.C. and by the Mexican College of Obesity and Metabolic Diseases Surgery, Certificate
                  No. COEM1324.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl bg-white border-2 border-gray-200 p-6 space-y-4">
                  <div className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                    Download CV
                  </div>
                  <a
                    href="https://www.obesityfernandoaceves.com/_files/ugd/20be60_3e98c9318ec141329fe5912ff054af23.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </a>
                </div>

                {/* <div className="text-xs text-gray-500">
                  COFEPRIS Autorización: XXXXXX Folio: XXXXX http://www.cofepris.gob.mx
                </div> */}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TeamSection />

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
