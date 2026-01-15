<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-vue-next'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'nav.home', href: '#home' },
  { name: 'nav.about', href: '#about' },
  { name: 'nav.obesity', href: '#obesity' },
  { name: 'nav.surgeries', href: '#surgeries' },
  { name: 'nav.testimonials', href: '#testimonials' },
  { name: 'nav.contact', href: '#contact' },
]

const services = [
  { name: 'services.gastricSleeve', href: '#surgeries' },
  { name: 'services.gastricBypass', href: '#surgeries' },
  { name: 'footer.nutritionalConsultation', href: '#contact' },
  { name: 'footer.postOperativeFollowUp', href: '#contact' },
]
</script>

<template>
  <footer class="bg-primary-900 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">Dr. Fernando Aceves</h3>
          <p class="text-primary-100 mb-4 text-sm">
            {{ t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
              <Youtube class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-primary-100 hover:text-white text-sm transition-colors">
                {{ t(link.name) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('footer.services') }}</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <a :href="service.href" class="text-primary-100 hover:text-white text-sm transition-colors">
                {{ t(service.name) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('footer.contact') }}</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <Phone class="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
              <span class="text-primary-100">(33) 3101 7777</span>
            </li>
            <li class="flex items-start space-x-2">
              <Mail class="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
              <span class="text-primary-100">contacto@obesityfernandoaceves.com</span>
            </li>
            <li class="flex items-start space-x-2">
              <MapPin class="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
              <span class="text-primary-100">Zapopan, Jalisco, México</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-primary-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-primary-200 text-sm">
            © {{ currentYear }} Dr. Fernando Aceves. {{ t('footer.allRightsReserved') }}.
          </p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-primary-200 hover:text-white transition-colors">
              {{ t('footer.privacyPolicy') }}
            </a>
            <a href="#" class="text-primary-200 hover:text-white transition-colors">
              {{ t('footer.termsConditions') }}
            </a>
          </div>
        </div>
        <p class="text-primary-300 text-xs mt-4 text-center">
          COFEPRIS Autorización: XXXXXX Folio: XXXXX
        </p>
      </div>
    </div>
  </footer>
</template>
