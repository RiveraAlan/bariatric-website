<script setup lang="ts">
import { DollarSign, Award, Heart, Globe, Clock, Shield } from 'lucide-vue-next'
</script>

<template>
  <section class="py-16 bg-primary-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Medical Tourism for Bariatric Surgery?
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Thousands of Americans travel to Mexico each year for affordable, world-class weight loss surgery.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <DollarSign class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Massive Savings</h3>
          <p class="text-gray-600">
            Save 60-75% compared to US prices. The same procedures, same quality, but at a fraction of the cost. No insurance needed.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Award class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Expert Surgeons</h3>
          <p class="text-gray-600">
            Board-certified surgeons with 15+ years experience and thousands of successful procedures. Trained in the US and Mexico.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Heart class="w-8 h-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
          <p class="text-gray-600">
            State-of-the-art hospitals with the latest technology. JCI-accredited facilities meeting international standards.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Clock class="w-8 h-8 text-orange-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">No Wait Times</h3>
          <p class="text-gray-600">
            Schedule your surgery within 2-4 weeks. No lengthy approval processes or insurance delays. Start your journey now.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Globe class="w-8 h-8 text-red-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Easy Access</h3>
          <p class="text-gray-600">
            Just a short flight away. Direct flights to Tijuana/San Diego from major US cities. We handle all logistics.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Shield class="w-8 h-8 text-indigo-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Comprehensive Care</h3>
          <p class="text-gray-600">
            All-inclusive packages with lifetime follow-up. From pre-op to post-op, we're with you every step of the way.
          </p>
        </div>
      </div>

      <div class="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Safety & Accreditation</h3>
          <p class="text-gray-600">Our partner hospitals meet the highest international standards</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">JCI</div>
            <p class="text-sm text-gray-600">Joint Commission International Accredited</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <p class="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <p class="text-sm text-gray-600">Patient Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
