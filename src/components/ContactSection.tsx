import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

type ContactSectionProps = {
  addressLabel: string,
  contactInfoTitle: string,
  emailAddressLabel: string,
  emailLabel: string,
  fullNameLabel: string,
  messageLabel: string,
  mondayFriday: string,
  phoneLabel: string,
  phoneNumberLabel: string,
  saturday: string,
  scheduleLabel: string,
  sendButton: string,
  sendMessageTitle: string,
  subtitle: string,
  successMessage: string,
  title: string,
}

export default function ContactSection({
  addressLabel,
  contactInfoTitle,
  emailAddressLabel,
  emailLabel,
  fullNameLabel,
  messageLabel,
  mondayFriday,
  phoneLabel,
  phoneNumberLabel,
  saturday,
  scheduleLabel,
  sendButton,
  sendMessageTitle,
  subtitle,
  successMessage,
  title,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(successMessage)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{contactInfoTitle}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{phoneLabel}</h4>
                    <p className="text-gray-600">(33) 3101 7777</p>
                    <p className="text-gray-600">(33) 3813 1685</p>
                    <p className="text-gray-600">(33) 3813 1686</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{emailLabel}</h4>
                    <p className="text-gray-600">contacto@obesityfernandoaceves.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{addressLabel}</h4>
                    <p className="text-gray-600">
                      Blvd. Puerta de Hierro # 5150, Torre "C" 2do. Piso Int. 201<br />
                      Col. Puerta de Hierro<br />
                      Zapopan, Jalisco, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{scheduleLabel}</h4>
                    <p className="text-gray-600">{mondayFriday}</p>
                    <p className="text-gray-600">{saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.4!3d20.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzAwLjAiTiAxMDPCsDI0JzAwLjAiVw!5e0!3m2!1sen!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{sendMessageTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {fullNameLabel}
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={fullNameLabel}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {emailAddressLabel}
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={emailAddressLabel}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {phoneNumberLabel}
                </label>
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={phoneNumberLabel}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {messageLabel}
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={messageLabel}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                {sendButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
