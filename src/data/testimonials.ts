import carlosBefore from '../assets/testimonios/carlos-before.jpeg'
import carlosAfter from '../assets/testimonios/carlos-after.jpeg'
import mariaLuisaBefore from '../assets/testimonios/maria-luisa-before.jpeg'
import mariaLuisaAfter from '../assets/testimonios/maria-luisa-after.jpeg'
import tizianoBefore from '../assets/testimonios/tiziano-before.jpeg'
import tizianoAfter from '../assets/testimonios/tiziano-after.jpeg'

export type Testimonial = {
  // First name + last initial (privacy-respecting even with signed consent).
  name: string,
  age: number,
  procedure: {
    es: string,
    en: string,
  },
  // Optional — only shown when a verified figure is available.
  weightLoss?: string,
  beforeImage: string,
  afterImage: string,
}

// Real patients with signed "Consentimiento para Uso de Imágenes y Testimonios"
// authorizing web use. See /Users/.../Testimoniales y fotos/1 Testimoniales con consentimiento.
export const testimonials: Testimonial[] = [
  {
    name: 'Carlos S.',
    age: 50,
    procedure: { es: 'Bypass Gástrico', en: 'Gastric Bypass' },
    weightLoss: '-58 kg',
    beforeImage: carlosBefore,
    afterImage: carlosAfter,
  },
  {
    name: 'José Luis T.',
    age: 55,
    procedure: { es: 'Bypass Gástrico', en: 'Gastric Bypass' },
    weightLoss: '-33 kg',
    beforeImage: tizianoBefore,
    afterImage: tizianoAfter,
  },
  {
    name: 'María Luisa S.',
    age: 45,
    procedure: { es: 'Manga Gástrica', en: 'Gastric Sleeve' },
    beforeImage: mariaLuisaBefore,
    afterImage: mariaLuisaAfter,
  },
]
