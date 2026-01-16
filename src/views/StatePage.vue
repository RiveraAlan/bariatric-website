<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { getStateBySlug } from '../data/states'
import NavigationHeader from '../components/NavigationHeader.vue'
import MedicalTourismHero from '../components/MedicalTourismHero.vue'
import WhyMedicalTourismSection from '../components/WhyMedicalTourismSection.vue'
import CostComparisonSection from '../components/CostComparisonSection.vue'
import TravelLogisticsSection from '../components/TravelLogisticsSection.vue'
import StateTestimonialsSection from '../components/StateTestimonialsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import FAQSection from '../components/FAQSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

const route = useRoute()
const router = useRouter()

const stateData = computed(() => {
  const slug = route.name as string
  return getStateBySlug(slug)
})

onMounted(() => {
  if (!stateData.value) {
    router.push('/')
  }
})

useHead(computed(() => ({
  title: stateData.value?.metaTitle || 'Bariatric Surgery',
  meta: [
    {
      name: 'description',
      content: stateData.value?.metaDescription || '',
    },
    {
      property: 'og:title',
      content: stateData.value?.metaTitle || 'Bariatric Surgery',
    },
    {
      property: 'og:description',
      content: stateData.value?.metaDescription || '',
    },
    {
      name: 'keywords',
      content: `bariatric surgery ${stateData.value?.name}, weight loss surgery ${stateData.value?.abbreviation}, gastric sleeve ${stateData.value?.name}, gastric bypass ${stateData.value?.name}, ${stateData.value?.majorCities.join(', ')}`,
    },
  ],
})))
</script>

<template>
  <div v-if="stateData">
    <NavigationHeader />
    <MedicalTourismHero :state-data="stateData" />
    <WhyMedicalTourismSection />
    <CostComparisonSection :state-data="stateData" />
    <ServicesSection />
    <TravelLogisticsSection :state-data="stateData" />
    <StateTestimonialsSection :state-data="stateData" />
    <FAQSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>
