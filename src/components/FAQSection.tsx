import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'faq.questions.q1',
      answer: 'faq.questions.a1',
    },
    {
      question: 'faq.questions.q2',
      answer: 'faq.questions.a2',
    },
    {
      question: 'faq.questions.q3',
      answer: 'faq.questions.a3',
    },
    {
      question: 'faq.questions.q4',
      answer: 'faq.questions.a4',
    },
    {
      question: 'faq.questions.q5',
      answer: 'faq.questions.a5',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{t(faq.question)}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{t(faq.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('faq.moreQuestions')}
          </h3>
          <a href="#contact" className="btn-primary inline-flex items-center">
            {t('faq.contactSpecialist')}
          </a>
        </div>
      </div>
    </section>
  )
}
