<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Star, Quote } from 'lucide-vue-next'

const { t } = useI18n()
import beforeImage from '../assets/facebook image (6).jpg'
import afterImage from '../assets/facebook image (7).jpg'

const testimonials = [
  {
    name: 'María López',
    age: 35,
    weightLoss: '45 kg',
    procedure: 'Manga Gástrica',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    text: 'Después de años luchando con mi peso, decidí someterme a la manga gástrica con el Dr. Aceves. Ha sido la mejor decisión de mi vida. He perdido 45 kg y mi salud ha mejorado increíblemente.',
    rating: 5,
    beforeImage: beforeImage,
    afterImage: afterImage,
  },
  {
    name: 'Roberto Sánchez',
    age: 42,
    weightLoss: '52 kg',
    procedure: 'Bypass Gástrico',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    text: 'El equipo del Dr. Aceves me brindó un apoyo excepcional durante todo el proceso. Logré perder 52 kg y controlar mi diabetes. Estoy eternamente agradecido.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=500&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Ana Rodríguez',
    age: 38,
    weightLoss: '38 kg',
    procedure: 'Manga Gástrica',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    text: 'La atención personalizada y el seguimiento continuo hicieron toda la diferencia. Me siento como una persona nueva, con más energía y confianza.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
]

const sliderPositions = ref<number[]>(testimonials.map(() => 50))

const handleSliderMove = (index: number, event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percentage = (x / rect.width) * 100
  sliderPositions.value[index] = Math.max(0, Math.min(100, percentage))
}
</script>

<template>
  <section id="testimonials" class="py-20 bg-gradient-to-br from-primary-50 to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flip-card h-[500px] group perspective">
          <!-- Card Inner Container -->
          <div class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
            <!-- Front Side -->
            <div class="flip-card-front absolute w-full h-full backface-hidden">
              <div class="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                <!-- Quote Icon -->
                <div class="absolute top-6 right-6 text-primary-200">
                  <Quote class="w-12 h-12" />
                </div>

                <!-- Profile -->
                <div class="flex items-center space-x-4 mb-6">
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                    <p class="text-sm text-gray-500">{{ testimonial.age }} años</p>
                  </div>
                </div>

                <!-- Rating -->
                <div class="flex space-x-1 mb-4">
                  <Star
                    v-for="i in testimonial.rating"
                    :key="i"
                    class="w-5 h-5 text-yellow-400 fill-current" />
                </div>

                <!-- Testimonial Text -->
                <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
                  "{{ testimonial.text }}"
                </p>

                <!-- Stats -->
                <div class="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <div class="text-2xl font-bold text-primary-600">{{ testimonial.weightLoss }}</div>
                    <div class="text-xs text-gray-500">{{ t('testimonials.weightLoss') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-semibold text-gray-900">{{ testimonial.procedure }}</div>
                    <div class="text-xs text-gray-500">{{ t('testimonials.procedure') }}</div>
                  </div>
                </div>

                <!-- Hover Hint -->
                <div class="text-center mt-4 text-xs text-gray-400">
                  Hover to see before/after
                </div>
              </div>
            </div>

            <!-- Back Side -->
            <div class="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
              <div class="bg-white rounded-2xl shadow-lg h-full overflow-hidden">
                <!-- Before/After Slider -->
                <div
                  class="relative w-full h-full cursor-ew-resize select-none"
                  @mousemove="handleSliderMove(index, $event)">
                  <!-- After Image (Background) -->
                  <img
                    :src="testimonial.afterImage"
                    alt="After"
                    class="absolute inset-0 w-full h-full object-cover" />

                  <!-- Before Image (Clipped) -->
                  <div
                    class="absolute inset-0 overflow-hidden"
                    :style="{ width: sliderPositions[index] + '%' }">
                    <img
                      :src="testimonial.beforeImage"
                      alt="Before"
                      class="absolute inset-0 w-full h-full object-cover"
                      :style="{ width: (100 / (sliderPositions[index] || 50) * 100) + '%' }" />
                  </div>

                  <!-- Slider Line -->
                  <div
                    class="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                    :style="{ left: sliderPositions[index] + '%' }">
                    <!-- Slider Handle -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div class="flex space-x-1">
                        <div class="w-0.5 h-4 bg-gray-400"></div>
                        <div class="w-0.5 h-4 bg-gray-400"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Labels -->
                  <div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                  <div class="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>

                  <!-- Weight Loss Badge -->
                  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <div class="text-center">
                      <div class="text-2xl font-bold">{{ testimonial.weightLoss }}</div>
                      <div class="text-xs">{{ t('testimonials.weightLoss') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Testimonials Section -->
      <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t('testimonials.videoTestimonials') }}
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative rounded-xl overflow-hidden shadow-md aspect-video bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
              alt="Video Testimonial"
              class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div class="w-0 h-0 border-l-[16px] border-l-primary-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden shadow-md aspect-video bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
              alt="Video Testimonial"
              class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div class="w-0 h-0 border-l-[16px] border-l-primary-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.group:hover .group-hover\:rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
