<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X, Phone } from 'lucide-vue-next'
import LanguageSwitcher from './LanguageSwitcher.vue'
import logo from '../assets/Nosotros Image.avif'

const { t } = useI18n()
const mobileMenuOpen = ref(false)

const navigation = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.obesity'), href: '#obesity' },
  { name: t('nav.surgeries'), href: '#surgeries' },
  { name: t('nav.testimonials'), href: '#testimonials' },
  { name: t('nav.contact'), href: '#contact' },
])
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#home" class="flex-shrink-0">
            <img :src="logo" alt="Dr. Fernando Aceves" class="h-12 w-auto" />
          </a>
        </div>

        <!-- Right Side: Navigation + Actions -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Desktop Navigation -->
          <div class="flex items-center space-x-6">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-gray-700 hover:text-primary-600 text-sm font-medium transition-colors">
              {{ item.name }}
            </a>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+523331017777" class="flex items-center text-primary-600 font-semibold text-sm">
              <Phone class="w-4 h-4 mr-2" />
              (33) 3101 7777
            </a>
            <a href="#contact" class="btn-primary">
              {{ t('nav.schedule') }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none">
            <Menu v-if="!mobileMenuOpen" class="block h-6 w-6" />
            <X v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
          {{ item.name }}
        </a>
        <div class="px-3 py-2 space-y-2">
          <LanguageSwitcher />
          <a href="tel:+523331017777" class="flex items-center text-primary-600 font-semibold">
            <Phone class="w-5 h-5 mr-2" />
            (33) 3101 7777
          </a>
          <a href="#contact" class="btn-primary block text-center">
            {{ t('nav.schedule') }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
