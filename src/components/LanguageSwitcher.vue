<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Globe } from 'lucide-vue-next'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <button
    @click="toggleLanguage"
    class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-primary-600">
    <Globe class="w-5 h-5" />
    <span class="text-sm font-medium">{{ locale === 'es' ? 'ES' : 'EN' }}</span>
  </button>
</template>
