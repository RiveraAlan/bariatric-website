import { DollarSign, Award, Heart, Globe, Clock, Shield } from 'lucide-react'

export default function WhyMedicalTourismSection() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Medical Tourism for Bariatric Surgery?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of Americans travel to Mexico each year for affordable, world-class weight loss surgery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Savings</h3>
            <p className="text-gray-600">
              Save 60-75% compared to US prices. The same procedures, same quality, but at a fraction of the cost. No insurance needed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Surgeons</h3>
            <p className="text-gray-600">
              Board-certified surgeons with 15+ years experience and thousands of successful procedures. Trained in the US and Mexico.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
            <p className="text-gray-600">
              State-of-the-art hospitals with the latest technology. JCI-accredited facilities meeting international standards.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">No Wait Times</h3>
            <p className="text-gray-600">
              Schedule your surgery within 2-4 weeks. No lengthy approval processes or insurance delays. Start your journey now.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Access</h3>
            <p className="text-gray-600">
              Just a short flight away. Direct flights to Tijuana/San Diego from major US cities. We handle all logistics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Care</h3>
            <p className="text-gray-600">
              All-inclusive packages with lifetime follow-up. From pre-op to post-op, we're with you every step of the way.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Safety & Accreditation</h3>
            <p className="text-gray-600">Our partner hospitals meet the highest international standards</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">JCI</div>
              <p className="text-sm text-gray-600">Joint Commission International Accredited</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-sm text-gray-600">Patient Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
