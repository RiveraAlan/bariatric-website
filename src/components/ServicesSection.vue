<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Heart, Activity, Shield, CheckCircle } from 'lucide-vue-next'

const { t } = useI18n()

const services = computed(() => [
  {
    title: t('services.gastricSleeve'),
    description: t('services.gastricSleeveDesc'),
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    benefits: [
      t('services.effectiveWeightLoss'),
      t('services.metabolicImprovement'),
      t('services.quickRecovery'),
      t('services.safeProcedure'),
    ],
  },
  {
    title: t('services.gastricBypass'),
    description: t('services.gastricBypassDesc'),
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
    benefits: [
      t('services.longTermResults'),
      t('services.diabetesControl'),
      t('services.comorbiditiesReduction'),
      t('services.qualityOfLifeImprovement'),
    ],
  },
])
</script>

<template>
  <section id="surgeries" class="py-20 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('services.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">
              {{ service.title }}
            </h3>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <div class="space-y-3">
              <div
                v-for="(benefit, idx) in service.benefits"
                :key="idx"
                class="flex items-center space-x-3">
                <CheckCircle class="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span class="text-gray-700">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose Us Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t('services.whyChooseUs') }}
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Heart class="w-8 h-8 text-primary-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ t('services.personalizedAttention') }}</h4>
            <p class="text-gray-600">{{ t('services.personalizedAttentionDesc') }}</p>
          </div>
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Activity class="w-8 h-8 text-primary-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ t('services.advancedTechnology') }}</h4>
            <p class="text-gray-600">{{ t('services.advancedTechnologyDesc') }}</p>
          </div>
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Shield class="w-8 h-8 text-primary-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ t('services.provenExperience') }}</h4>
            <p class="text-gray-600">{{ t('services.provenExperienceDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
