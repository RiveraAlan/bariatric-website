import { Plane, Hotel, Calendar, Shield, Users, Phone } from 'lucide-react'
import type { StateData } from '../data/states'

type TravelLogisticsSectionProps = {
  stateData: StateData,
}

export default function TravelLogisticsSection({ stateData }: TravelLogisticsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey from {stateData.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all the details so you can focus on your transformation. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Travel</h3>
            <p className="text-gray-600">
              Direct flights from {stateData.majorCities[0]} to Tijuana or San Diego. We arrange airport pickup and all transfers.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hotel className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comfortable Stay</h3>
            <p className="text-gray-600">
              Modern hospital facilities and recovery hotel included. Private rooms with 24/7 nursing care.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Full Support</h3>
            <p className="text-gray-600">
              Bilingual patient coordinators available 24/7. We're with you every step of the way.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Your 5-Day Timeline
          </h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Day 1: Arrival</h4>
                <p className="text-gray-700">
                  Fly from {stateData.majorCities[0]} to San Diego/Tijuana. We pick you up and transfer you to the hospital. Meet your surgeon and complete pre-op tests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Day 2: Surgery Day</h4>
                <p className="text-gray-700">
                  Your bariatric surgery is performed in the morning. Recovery in private hospital room with 24/7 nursing care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Day 3: Recovery</h4>
                <p className="text-gray-700">
                  Continue recovery in hospital. Begin walking and liquid diet. Medical team monitors your progress closely.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Day 4: Hotel Recovery</h4>
                <p className="text-gray-700">
                  Transfer to recovery hotel. Continue healing in comfort with coordinator support. Final check-up with surgeon.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Day 5: Return Home</h4>
                <p className="text-gray-700">
                  Airport transfer and fly back to {stateData.name}. Return home with complete post-op instructions and lifetime support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <Calendar className="w-8 h-8 text-primary-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h4>
            <p className="text-gray-600 text-sm">
              Choose dates that work for you. We accommodate your schedule and can arrange surgery within 2-4 weeks.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <Users className="w-8 h-8 text-primary-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Companion Welcome</h4>
            <p className="text-gray-600 text-sm">
              Bring a family member or friend. Companion accommodations available at discounted rates.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <Phone className="w-8 h-8 text-primary-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Lifetime Follow-Up</h4>
            <p className="text-gray-600 text-sm">
              Virtual follow-up appointments with your surgeon. Ongoing support from {stateData.name} after you return home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
