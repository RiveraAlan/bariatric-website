<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowRight } from 'lucide-vue-next'
import heroVideo from '../assets/Facebook Video Download.mp4'
import type { StateData } from '../data/states'

const props = defineProps<{
  stateData?: StateData,
}>()

const { t } = useI18n()

const heroTitle = computed(() => {
  if (props.stateData) {
    return `Transform Your Life with Bariatric Surgery in ${props.stateData.name}`
  }
  return t('hero.title')
})

const heroSubtitle = computed(() => {
  if (props.stateData) {
    return `Serving ${props.stateData.majorCities.join(', ')} and surrounding areas. Expert weight loss surgery with world-class care in Mexico.`
  }
  return t('hero.subtitle')
})

const years = ref(0)
const surgeries = ref(0)
const satisfaction = ref(0)

const animateValue = (target: number, duration: number, callback: (value: number) => void) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    callback(Math.floor(current))
  }, 16)
}

onMounted(() => {
  setTimeout(() => {
    animateValue(15, 2000, (val) => years.value = val)
    animateValue(2000, 2000, (val) => surgeries.value = val)
    animateValue(98, 2000, (val) => satisfaction.value = val)
  }, 500)
})
</script>

<template>
  <section id="home" class="relative overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        loop
        muted
        playsinline
        :src="heroVideo"
        class="absolute right-0 top-0 h-full w-auto min-w-[50%] object-cover">
      </video>
    </div>

    <!-- Gradient Overlay - Fades from solid color on left to transparent on right -->
    <div class="absolute inset-0 z-10 bg-gradient-to-r from-primary-700 from-0% via-primary-700 via-48% to-transparent to-58%"></div>

    <!-- Content -->
    <div class="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 text-white">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {{ heroTitle }}
            </h1>
            <p class="text-lg md:text-xl text-primary-50">
              {{ heroSubtitle }}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-secondary inline-flex items-center justify-center">
              {{ t('hero.scheduleConsult') }}
              <ArrowRight class="ml-2 w-5 h-5" />
            </a>
            <a href="#about" class="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white/30 transition-colors duration-200 inline-flex items-center justify-center">
              {{ t('hero.learnMore') }}
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl md:text-6xl font-bold">{{ years }}+</div>
              <div class="text-sm text-primary-100 mt-1">{{ t('hero.yearsExperience') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-6xl font-bold">{{ surgeries }}+</div>
              <div class="text-sm text-primary-100 mt-1">{{ t('hero.successfulSurgeries') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-6xl font-bold">{{ satisfaction }}%</div>
              <div class="text-sm text-primary-100 mt-1">{{ t('hero.satisfaction') }}</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Empty space for video to show through -->
        <div class="hidden lg:block"></div>
      </div>
    </div>

    <!-- Wave Divider -->
    <div class="absolute bottom-0 left-0 right-0 z-30">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>
