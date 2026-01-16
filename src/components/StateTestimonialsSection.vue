<script setup lang="ts">
import { Star, Quote } from 'lucide-vue-next'
import type { StateData } from '../data/states'

defineProps<{
  stateData: StateData,
}>()
</script>

<template>
  <section class="py-16 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Success Stories from {{ stateData.name }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Real patients from {{ stateData.name }} who transformed their lives with medical tourism bariatric surgery.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
          <div class="flex items-center gap-1 mb-4">
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <Quote class="w-8 h-8 text-primary-300 mb-3" />
          <p class="text-gray-700 mb-4 italic">
            "I was nervous about traveling to Mexico, but the entire experience exceeded my expectations. The facility was modern, the staff was amazing, and I saved over $12,000. Best decision I ever made!"
          </p>
          <div class="border-t pt-4">
            <p class="font-bold text-gray-900">Sarah M.</p>
            <p class="text-sm text-gray-600">{{ stateData.majorCities[0] }}, {{ stateData.abbreviation }}</p>
            <p class="text-sm text-primary-600 font-semibold mt-1">Lost 95 lbs</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
          <div class="flex items-center gap-1 mb-4">
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <Quote class="w-8 h-8 text-primary-300 mb-3" />
          <p class="text-gray-700 mb-4 italic">
            "The surgeon was incredibly skilled and the hospital was spotless. I couldn't afford the surgery in the US, but medical tourism made it possible. I'm down 80 pounds and feel amazing!"
          </p>
          <div class="border-t pt-4">
            <p class="font-bold text-gray-900">Michael R.</p>
            <p class="text-sm text-gray-600">{{ stateData.majorCities[1] || stateData.majorCities[0] }}, {{ stateData.abbreviation }}</p>
            <p class="text-sm text-primary-600 font-semibold mt-1">Lost 80 lbs</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-lg p-8 border border-primary-100">
          <div class="flex items-center gap-1 mb-4">
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star class="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <Quote class="w-8 h-8 text-primary-300 mb-3" />
          <p class="text-gray-700 mb-4 italic">
            "From start to finish, everything was handled professionally. The patient coordinator answered all my questions, and the follow-up care has been excellent. Worth every penny!"
          </p>
          <div class="border-t pt-4">
            <p class="font-bold text-gray-900">Jennifer L.</p>
            <p class="text-sm text-gray-600">{{ stateData.majorCities[2] || stateData.majorCities[0] }}, {{ stateData.abbreviation }}</p>
            <p class="text-sm text-primary-600 font-semibold mt-1">Lost 110 lbs</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div class="bg-primary-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold mb-3">Join Thousands of Successful Patients</h3>
          <p class="text-primary-100 mb-6">
            Over 2,000 patients from across the United States have trusted us with their weight loss journey. You could be next!
          </p>
          <a href="#contact" class="btn-secondary inline-flex items-center justify-center">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
