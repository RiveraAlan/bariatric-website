import { useState } from 'react'
import { testimonials as realTestimonials } from '../data/testimonials'
import type { Testimonial } from '../data/testimonials'

type TestimonialsSectionProps = {
  afterLabel?: string,
  ageLabel?: string,
  beforeLabel?: string,
  hoverHint?: string,
  lang?: 'es' | 'en',
  procedureLabel?: string,
  testimonials?: Testimonial[],
  title: string,
  subtitle: string,
  videoTestimonialsTitle?: string,
  weightLossLabel?: string,
}

export default function TestimonialsSection({
  afterLabel = 'Después',
  ageLabel = 'años',
  beforeLabel = 'Antes',
  hoverHint = 'Arrastra para comparar',
  lang = 'es',
  procedureLabel = 'Procedimiento',
  testimonials: testimonialsProp,
  title,
  subtitle,
  weightLossLabel = 'Pérdida de peso',
}: TestimonialsSectionProps) {
  const testimonials = testimonialsProp || realTestimonials
  const [sliderPositions, setSliderPositions] = useState<number[]>(testimonials.map(() => 50))

  const moveSlider = (index: number, clientX: number, el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const percentage = ((clientX - rect.left) / rect.width) * 100
    setSliderPositions((prev) => {
      const next = [...prev]
      next[index] = Math.max(0, Math.min(100, percentage))
      return next
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const pos = sliderPositions[index] ?? 50
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="relative aspect-[3/4] cursor-ew-resize select-none touch-none"
                  onMouseMove={(e) => moveSlider(index, e.clientX, e.currentTarget)}
                  onTouchMove={(e) => moveSlider(index, e.touches[0].clientX, e.currentTarget)}
                >
                  <img
                    src={testimonial.afterImage}
                    alt={`${testimonial.name} — ${afterLabel}`}
                    className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                  />

                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ width: `${pos}%` }}
                  >
                    <img
                      src={testimonial.beforeImage}
                      alt={`${testimonial.name} — ${beforeLabel}`}
                      className="absolute inset-0 h-full object-cover object-top max-w-none"
                      style={{ width: `${(100 / (pos || 50)) * 100}%` }}
                    />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-0.5 h-4 bg-gray-400"></div>
                        <div className="w-0.5 h-4 bg-gray-400"></div>
                      </div>
                    </div>
                  </div>

                  <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold pointer-events-none">
                    {beforeLabel}
                  </span>
                  <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold pointer-events-none">
                    {afterLabel}
                  </span>

                  {testimonial.weightLoss && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-primary-700 px-5 py-2 rounded-full shadow-xl text-center pointer-events-none">
                      <div className="text-xl font-bold leading-none">{testimonial.weightLoss}</div>
                      <div className="text-[10px] uppercase tracking-wide text-gray-500">{weightLossLabel}</div>
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age} {ageLabel}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary-700">{testimonial.procedure[lang]}</div>
                    <div className="text-xs text-gray-500">{procedureLabel}</div>
                  </div>
                </div>

                <div className="pb-4 text-center text-xs text-gray-400">{hoverHint}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
