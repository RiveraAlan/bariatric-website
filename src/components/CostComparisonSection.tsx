import { Check } from 'lucide-react'
import type { StateData } from '../data/states'

type CostComparisonSectionProps = {
  stateData: StateData,
}

export default function CostComparisonSection({ stateData }: CostComparisonSectionProps) {
  return (
    <section id="cost-comparison" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cost Comparison: {stateData.name} vs Mexico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you can save with medical tourism. Prices include surgery, hospital stay, and post-op care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gastric Sleeve</h3>
              <p className="text-sm text-gray-600">Most Popular</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">{stateData.name}</span>
                <span className="text-2xl font-bold text-red-600">$15,000</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Mexico</span>
                <span className="text-2xl font-bold text-green-600">$4,500</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">Save $10,500</div>
                <div className="text-sm text-green-700">70% Savings</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-primary-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Best Value
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gastric Bypass</h3>
              <p className="text-sm text-gray-600">Most Effective</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">{stateData.name}</span>
                <span className="text-2xl font-bold text-red-600">$23,000</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Mexico</span>
                <span className="text-2xl font-bold text-green-600">$5,500</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">Save $17,500</div>
                <div className="text-sm text-green-700">76% Savings</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Duodenal Switch</h3>
              <p className="text-sm text-gray-600">Maximum Results</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">{stateData.name}</span>
                <span className="text-2xl font-bold text-red-600">$28,000</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="text-gray-600">Mexico</span>
                <span className="text-2xl font-bold text-green-600">$7,500</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">Save $20,500</div>
                <div className="text-sm text-green-700">73% Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Mexico Package</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All surgical fees and anesthesia</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">3-night hospital stay</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Pre-operative lab work and tests</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Post-operative medications</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Airport transfers</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Recovery hotel stay</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">24/7 patient coordinator support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lifetime follow-up care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
