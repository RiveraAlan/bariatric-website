<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import worldMap from '../assets/World Vector Map.svg'

const { t } = useI18n()

const locations = ref([
  { name: 'Canadá', patients: '150+', top: '42%', left: '12%' },
  { name: 'Estados Unidos', patients: '500+', top: '50%', left: '18%' },
  { name: 'México', patients: '2000+', top: '60%', left: '20%' },
  { name: 'Puerto Rico', patients: '100+', top: '60%', left: '29%' },
  { name: 'Sudamérica', patients: '300+', top: '75%', left: '28%' },
])

const selectedLocation = ref<number | null>(null)
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-[1fr,1.2fr] gap-0 items-center">
        <!-- Left Content -->
        <div class="space-y-6 lg:pr-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ t('globalReach.title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-4">
              {{ t('globalReach.description') }}
            </p>
            <p class="text-gray-600 leading-relaxed italic">
              {{ t('globalReach.exploreLocations') }}
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="text-3xl font-bold text-primary-600 mb-2">3000+</div>
              <p class="text-sm text-gray-600">{{ t('globalReach.internationalPatients') }}</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <p class="text-sm text-gray-600">{{ t('globalReach.countriesServed') }}</p>
            </div>
          </div>

          <div class="pt-4">
            <a href="#contact" class="btn-primary inline-flex items-center">
              {{ t('globalReach.scheduleInternational') }}
            </a>
          </div>
        </div>

        <!-- Right Content - Map (extends to edge) -->
        <div class="relative lg:-mr-[200px] xl:-mr-[300px] mt-12 lg:mt-0">
          <!-- World Map -->
          <div class="relative w-full">
            <img :src="worldMap" alt="World Map" class="w-full h-auto opacity-30" />
            
            <!-- Location Markers -->
            <div
              v-for="(location, index) in locations"
              :key="index"
              class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              :style="{ top: location.top, left: location.left }"
              @mouseenter="selectedLocation = index"
              @mouseleave="selectedLocation = null">
              <!-- Marker Pin -->
              <div class="relative">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-125">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <!-- Pulse Animation -->
                <div class="absolute inset-0 w-8 h-8 bg-primary-400 rounded-full animate-ping opacity-75"></div>
                
                <!-- Tooltip -->
                <div
                  v-if="selectedLocation === index"
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-xl z-10">
                  <div class="font-semibold">{{ location.name }}</div>
                  <div class="text-xs text-gray-300">{{ location.patients }} {{ t('globalReach.patients') }}</div>
                  <!-- Arrow -->
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                    <div class="border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
