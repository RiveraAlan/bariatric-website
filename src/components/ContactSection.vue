<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-vue-next'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
  formData.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('contact.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.contactInfo') }}</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ t('contact.phone') }}</h4>
                  <p class="text-gray-600">(33) 3101 7777</p>
                  <p class="text-gray-600">(33) 3813 1685</p>
                  <p class="text-gray-600">(33) 3813 1686</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ t('contact.email') }}</h4>
                  <p class="text-gray-600">contacto@obesityfernandoaceves.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ t('contact.address') }}</h4>
                  <p class="text-gray-600">
                    Blvd. Puerta de Hierro # 5150, Torre "C" 2do. Piso Int. 201<br />
                    Col. Puerta de Hierro<br />
                    Zapopan, Jalisco, México
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ t('contact.schedule') }}</h4>
                  <p class="text-gray-600">{{ t('contact.mondayFriday') }}</p>
                  <p class="text-gray-600">{{ t('contact.saturday') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="rounded-2xl overflow-hidden shadow-lg h-[300px] bg-gray-200">
            <iframe
              title="Hospital Puerta de Hierro Andares, Zapopan"
              src="https://maps.google.com/maps?q=Hospital%20Puerta%20de%20Hierro%20Andares%2C%20Av.%20Empresarios%20150%2C%20Puerta%20de%20Hierro%2C%2045116%20Zapopan%2C%20Jal&z=16&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.sendMessage') }}</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.fullName') }}</label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                :placeholder="t('contact.fullName')" />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.emailAddress') }}</label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                :placeholder="t('contact.emailAddress')" />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.phoneNumber') }}</label>
              <input
                v-model="formData.phone"
                type="tel"
                id="phone"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                :placeholder="t('contact.phoneNumber')" />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.message') }}</label>
              <textarea
                v-model="formData.message"
                id="message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                :placeholder="t('contact.message')"></textarea>
            </div>

            <button type="submit" class="btn-primary w-full flex items-center justify-center">
              <Send class="w-5 h-5 mr-2" />
              {{ t('contact.sendButton') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
