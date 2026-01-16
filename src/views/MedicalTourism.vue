<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { statesData } from '../data/states'
import NavigationHeader from '../components/NavigationHeader.vue'
import FooterSection from '../components/FooterSection.vue'
import { Search, MapPin, ArrowRight } from 'lucide-vue-next'

const router = useRouter()
const searchQuery = ref('')

const filteredStates = computed(() => {
  if (!searchQuery.value) return statesData
  const query = searchQuery.value.toLowerCase()
  return statesData.filter(state => 
    state.name.toLowerCase().includes(query) ||
    state.abbreviation.toLowerCase().includes(query) ||
    state.majorCities.some(city => city.toLowerCase().includes(query))
  )
})

const navigateToState = (slug: string) => {
  router.push(`/${slug}`)
}
</script>

<template>
  <div>
    <NavigationHeader />
    
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
            Medical Tourism for Bariatric Surgery
          </h1>
          <p class="text-xl text-primary-100">
            Find affordable, world-class weight loss surgery options for your state. We serve patients from all 50 states and Puerto Rico.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto mb-12">
          <div class="relative">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by state, abbreviation, or city..."
              class="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <button
            v-for="state in filteredStates"
            :key="state.slug"
            @click="navigateToState(state.slug)"
            class="group p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-lg transition-all duration-200 text-left">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {{ state.name }}
                </h3>
                <p class="text-sm text-gray-500">{{ state.abbreviation }}</p>
              </div>
              <ArrowRight class="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </div>
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <MapPin class="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span class="line-clamp-2">{{ state.majorCities.join(', ') }}</span>
            </div>
          </button>
        </div>

        <div v-if="filteredStates.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">No states found matching your search.</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-primary-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Medical Tourism?
          </h2>
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="space-y-3">
              <div class="text-4xl font-bold text-primary-600">60%</div>
              <h3 class="text-xl font-semibold">Cost Savings</h3>
              <p class="text-gray-600">Save up to 60% compared to US prices without compromising quality</p>
            </div>
            <div class="space-y-3">
              <div class="text-4xl font-bold text-primary-600">15+</div>
              <h3 class="text-xl font-semibold">Years Experience</h3>
              <p class="text-gray-600">Expert surgeons with decades of bariatric surgery experience</p>
            </div>
            <div class="space-y-3">
              <div class="text-4xl font-bold text-primary-600">2000+</div>
              <h3 class="text-xl font-semibold">Successful Surgeries</h3>
              <p class="text-gray-600">Thousands of satisfied patients from across the United States</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
