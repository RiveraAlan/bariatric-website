import { useEffect, useMemo, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import beforeImage from '../assets/Facebook Image (6).jpg'
import afterImage from '../assets/Facebook Image (7).jpg'

type Testimonial = {
  name: string,
  age: number,
  weightLoss: string,
  procedure: string,
  image: string,
  text: string,
  rating: number,
  beforeImage: string,
  afterImage: string,
}

type TestimonialsSectionProps = {
  afterLabel?: string,
  ageLabel?: string,
  beforeLabel?: string,
  hoverHint?: string,
  procedureLabel?: string,
  testimonials?: Testimonial[],
  title: string,
  subtitle: string,
  videoTestimonialsTitle: string,
  weightLossLabel?: string,
}

export default function TestimonialsSection({
  afterLabel = 'After',
  ageLabel = 'años',
  beforeLabel = 'Before',
  hoverHint = 'Hover to see before/after',
  procedureLabel = 'Procedimiento',
  testimonials: testimonialsProp,
  title,
  subtitle,
  videoTestimonialsTitle,
  weightLossLabel = 'Pérdida de peso',
}: TestimonialsSectionProps) {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  const testimonialVideos = useMemo(() => {
    const videos = Object.values(
      import.meta.glob('../assets/testimonios/*.MP4', {
        eager: true,
        as: 'url',
      }),
    ) as string[]

    return videos
  }, [])

  const defaultTestimonials = useMemo<Testimonial[]>(() => [
    {
      name: 'María López',
      age: 35,
      weightLoss: '45 kg',
      procedure: 'Manga Gástrica',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'Después de años luchando con mi peso, decidí someterme a la manga gástrica con el Dr. Aceves. Ha sido la mejor decisión de mi vida. He perdido 45 kg y mi salud ha mejorado increíblemente.',
      rating: 5,
      beforeImage,
      afterImage,
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
  ], [])

  const testimonials = testimonialsProp || defaultTestimonials

  const [sliderPositions, setSliderPositions] = useState<number[]>(testimonials.map(() => 50))

  useEffect(() => {
    if (!activeVideoUrl) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoUrl(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeVideoUrl])

  const handleSliderMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPositions(prev => {
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flip-card h-[500px] group perspective">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                    <div className="absolute top-6 right-6 text-primary-200">
                      <Quote className="w-12 h-12" />
                    </div>

                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.age} {ageLabel}</p>
                      </div>
                    </div>

                    <div className="flex space-x-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{testimonial.weightLoss}</div>
                        <div className="text-xs text-gray-500">{weightLossLabel}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">{testimonial.procedure}</div>
                        <div className="text-xs text-gray-500">{procedureLabel}</div>
                      </div>
                    </div>

                    <div className="text-center mt-4 text-xs text-gray-400">
                      {hoverHint}
                    </div>
                  </div>
                </div>

                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-white rounded-2xl shadow-lg h-full overflow-hidden">
                    <div
                      className="relative w-full h-full cursor-ew-resize select-none"
                      onMouseMove={(e) => handleSliderMove(index, e)}
                    >
                      <img
                        src={testimonial.afterImage}
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPositions[index]}%` }}
                      >
                        <img
                          src={testimonial.beforeImage}
                          alt="Before"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ width: `${(100 / (sliderPositions[index] || 50)) * 100}%` }}
                        />
                      </div>

                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                        style={{ left: `${sliderPositions[index]}%` }}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-0.5 h-4 bg-gray-400"></div>
                            <div className="w-0.5 h-4 bg-gray-400"></div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {beforeLabel}
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {afterLabel}
                      </div>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-6 py-3 rounded-full shadow-xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{testimonial.weightLoss}</div>
                          <div className="text-xs">{weightLossLabel}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {videoTestimonialsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialVideos.slice(0, 2).map((videoUrl) => (
              <button
                key={videoUrl}
                type="button"
                onClick={() => setActiveVideoUrl(videoUrl)}
                className="relative rounded-xl overflow-hidden shadow-md aspect-video bg-gray-200"
              >
                <video
                  className="w-full h-full object-cover object-top"
                  muted
                  playsInline
                  preload="metadata"
                  src={videoUrl}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[16px] border-l-primary-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeVideoUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setActiveVideoUrl(null)}
          >
            <div
              className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-end p-3">
                <button
                  type="button"
                  onClick={() => setActiveVideoUrl(null)}
                  className="text-white/80 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full"
                  autoPlay
                  controls
                  playsInline
                  src={activeVideoUrl}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
