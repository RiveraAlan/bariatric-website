<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { TrendingUp, Scale, Heart } from 'lucide-vue-next'
import consultationImage from '../assets/Facebook Image (2).jpg'
import obesityImage from '../assets/Facebook Image (4).jpg'

const { t } = useI18n()
const successRate = ref(0)
const statsCard = ref<HTMLElement | null>(null)

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
    callback(parseFloat(current.toFixed(1)))
  }, 16)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(98.5, 2000, (val) => successRate.value = val)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  if (statsCard.value) {
    observer.observe(statsCard.value)
  }
})
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content - Images -->
        <div class="relative">
          <div class="grid grid-cols-2 gap-4">
            <img
              :src="consultationImage"
              alt="Consultation"
              class="rounded-2xl shadow-lg w-full h-[300px] object-cover" />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=500&fit=crop"
              alt="Medical Team"
              class="rounded-2xl shadow-lg w-full h-[300px] object-cover mt-8" />
          </div>
          <div ref="statsCard" class="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl max-w-[250px]">
            <div class="text-4xl font-bold mb-2">{{ successRate }}%</div>
            <p class="text-sm text-primary-50">{{ t('about.successRate') }}</p>
          </div>
        </div>

        <!-- Right Content - Text -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ t('about.title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('about.description') }}
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <TrendingUp class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ t('about.provenExperience') }}</h4>
                <p class="text-gray-600">{{ t('about.provenExperienceDesc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Scale class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ t('about.comprehensiveApproach') }}</h4>
                <p class="text-gray-600">{{ t('about.comprehensiveApproachDesc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Heart class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ t('about.personalizedCare') }}</h4>
                <p class="text-gray-600">{{ t('about.personalizedCareDesc') }}</p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <a href="#contact" class="btn-primary inline-flex items-center">
              {{ t('hero.scheduleConsult') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Obesity Information Section -->
  <section id="obesity" class="py-20 bg-primary-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content - Text -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ t('obesity.title') }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-4">
              {{ t('obesity.description1') }}
            </p>
            <p class="text-gray-600 leading-relaxed">
              {{ t('obesity.description2') }}
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h4 class="font-semibold text-gray-900 mb-4">{{ t('obesity.comorbidities') }}</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {{ t('obesity.diabetes') }}
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {{ t('obesity.hypertension') }}
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {{ t('obesity.cardiovascular') }}
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {{ t('obesity.sleepApnea') }}
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {{ t('obesity.jointProblems') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Content - Image -->
        <div class="relative">
          <img
            :src="obesityImage"
            alt="Health Information"
            class="rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
          <div class="absolute -top-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-[200px]">
            <div class="text-3xl font-bold text-primary-600 mb-2">IMC > 30</div>
            <p class="text-sm text-gray-600">{{ t('obesity.bmiIndicator') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
