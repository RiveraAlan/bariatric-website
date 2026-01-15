<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'

const { t } = useI18n()
const openIndex = ref<number | null>(0)

const faqs = [
  {
    question: 'faq.questions.q1',
    answer: 'faq.questions.a1',
  },
  {
    question: 'faq.questions.q2',
    answer: 'faq.questions.a2',
  },
  {
    question: 'faq.questions.q3',
    answer: 'faq.questions.a3',
  },
  {
    question: 'faq.questions.q4',
    answer: 'faq.questions.a4',
  },
  {
    question: 'faq.questions.q5',
    answer: 'faq.questions.a5',
  },
]

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('faq.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden">
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">{{ t(faq.question) }}</span>
            <ChevronDown
              class="w-5 h-5 text-primary-600 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }" />
          </button>
          <div
            v-show="openIndex === index"
            class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-gray-600 leading-relaxed">{{ t(faq.answer) }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          {{ t('faq.moreQuestions') }}
        </h3>
        <a href="#contact" class="btn-primary inline-flex items-center">
          {{ t('faq.contactSpecialist') }}
        </a>
      </div>
    </div>
  </section>
</template>
