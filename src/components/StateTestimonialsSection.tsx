import { Star, Quote } from 'lucide-react'
import type { StateData } from '../data/states'

type StateTestimonialsSectionProps = {
  stateData: StateData,
}

export default function StateTestimonialsSection({ stateData }: StateTestimonialsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from {stateData.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real patients from {stateData.name} who transformed their lives with medical tourism bariatric surgery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary-300 mb-3" />
            <p className="text-gray-700 mb-4 italic">
              "I was nervous about traveling to Mexico, but the entire experience exceeded my expectations. The facility was modern, the staff was amazing, and I saved over $12,000. Best decision I ever made!"
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">Sarah M.</p>
              <p className="text-sm text-gray-600">{stateData.majorCities[0]}, {stateData.abbreviation}</p>
              <p className="text-sm text-primary-600 font-semibold mt-1">Lost 95 lbs</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary-300 mb-3" />
            <p className="text-gray-700 mb-4 italic">
              "The surgeon was incredibly skilled and the hospital was spotless. I couldn't afford the surgery in the US, but medical tourism made it possible. I'm down 80 pounds and feel amazing!"
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">Michael R.</p>
              <p className="text-sm text-gray-600">{stateData.majorCities[1] || stateData.majorCities[0]}, {stateData.abbreviation}</p>
              <p className="text-sm text-primary-600 font-semibold mt-1">Lost 80 lbs</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary-300 mb-3" />
            <p className="text-gray-700 mb-4 italic">
              "From start to finish, everything was handled professionally. The patient coordinator answered all my questions, and the follow-up care has been excellent. Worth every penny!"
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">Jennifer L.</p>
              <p className="text-sm text-gray-600">{stateData.majorCities[2] || stateData.majorCities[0]}, {stateData.abbreviation}</p>
              <p className="text-sm text-primary-600 font-semibold mt-1">Lost 110 lbs</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Join Thousands of Successful Patients</h3>
            <p className="text-primary-100 mb-6">
              Over 2,000 patients from across the United States have trusted us with their weight loss journey. You could be next!
            </p>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
