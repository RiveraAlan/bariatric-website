export type Localized = {
  es: string,
  en: string,
}

export type TeamMember = {
  name: string,
  years: number,
  specialty: Localized,
  credentials: {
    es: string[],
    en: string[],
  },
}

// Real medical team (Website Requirements Document). Professional photos are
// pending from the client; until they arrive the UI renders initials monograms.
export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Fernando Aceves Miramontes',
    years: 36,
    specialty: {
      es: 'Cirugía General, Laparoscopia y Bariátrica',
      en: 'General, Laparoscopic & Bariatric Surgery',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Cirugía General',
        'Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas',
      ],
      en: [
        'Mexican Council of General Surgery',
        'Mexican College of Obesity and Metabolic Diseases Surgery',
      ],
    },
  },
  {
    name: 'Dra. María Del Carmen Aceves Aceves',
    years: 6,
    specialty: {
      es: 'Cirugía General, Laparoscopia y Bariátrica',
      en: 'General, Laparoscopic & Bariatric Surgery',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Cirugía General',
        'Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas',
      ],
      en: [
        'Mexican Council of General Surgery',
        'Mexican College of Obesity and Metabolic Diseases Surgery',
      ],
    },
  },
  {
    name: 'Dr. José De Jesús Aceves Aceves',
    years: 3,
    specialty: {
      es: 'Cirugía General y Laparoscopia',
      en: 'General & Laparoscopic Surgery',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Cirugía General',
        'Doctorando en Ciencias Médicas',
      ],
      en: [
        'Mexican Council of General Surgery',
        'PhD candidate in Medical Sciences',
      ],
    },
  },
  {
    name: 'Dra. María Del Carmen Aceves Miramontes',
    years: 40,
    specialty: {
      es: 'Cardiología',
      en: 'Cardiology',
    },
    credentials: {
      es: ['Consejo Mexicano de Cardiología'],
      en: ['Mexican Council of Cardiology'],
    },
  },
  {
    name: 'Dr. Armando Díaz Rodríguez',
    years: 36,
    specialty: {
      es: 'Anestesiología y Medicina del Enfermo en Estado Crítico',
      en: 'Anesthesiology & Critical Care Medicine',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Anestesiología',
        'Consejo Mexicano de Medicina del Enfermo en Estado Crítico',
      ],
      en: [
        'Mexican Council of Anesthesiology',
        'Mexican Council of Critical Care Medicine',
      ],
    },
  },
  {
    name: 'Dr. Luis Enrique Higuera Medina',
    years: 19,
    specialty: {
      es: 'Anestesiología y Anestesiología Cardiovascular',
      en: 'Anesthesiology & Cardiovascular Anesthesiology',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Anestesiología',
        'Especialista en ECMO desde 2016 — Hôpital de la Pitié-Salpêtrière, París',
      ],
      en: [
        'Mexican Council of Anesthesiology',
        'ECMO specialist since 2016 — Pitié-Salpêtrière Hospital, Paris',
      ],
    },
  },
  {
    name: 'Dra. Karla Margarita Madrigal Rentería',
    years: 20,
    specialty: {
      es: 'Anestesiología y Algología (Medicina del Dolor)',
      en: 'Anesthesiology & Algology (Pain Medicine)',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Anestesiología',
        'Certificada por el World Institute of Pain',
      ],
      en: [
        'Mexican Council of Anesthesiology',
        'Certified by the World Institute of Pain',
      ],
    },
  },
  {
    name: 'Dra. Silvia Alejandra Meza Cueto',
    years: 16,
    specialty: {
      es: 'Psiquiatría',
      en: 'Psychiatry',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Psiquiatría',
        'Miembro activo de la Asociación Psiquiátrica Mexicana',
      ],
      en: [
        'Mexican Council of Psychiatry',
        'Active member of the Mexican Psychiatric Association',
      ],
    },
  },
  {
    name: 'Dra. Montserrat González Gómez',
    years: 17,
    specialty: {
      es: 'Nutrición Clínica',
      en: 'Clinical Nutrition',
    },
    credentials: {
      es: [
        'Doctorado en Ciencias de la Salud Pública',
        'Diplomado Especializado en Nutrición en Cirugía Bariátrica',
        'Educadora en Diabetes y Coaching Nutricional',
      ],
      en: [
        'PhD in Public Health Sciences',
        'Specialized Diploma in Bariatric Surgery Nutrition',
        'Diabetes Educator & Nutrition Coach',
      ],
    },
  },
  {
    name: 'Lic. Victoria Citlali Beltrán Preciado',
    years: 6,
    specialty: {
      es: 'Nutrición Clínica',
      en: 'Clinical Nutrition',
    },
    credentials: {
      es: [
        'Licenciatura en Nutrición',
        'Diplomado Especializado en Nutrición en Cirugía Bariátrica',
        'Diplomado en Educación en Diabetes',
      ],
      en: [
        "Bachelor's in Nutrition",
        'Specialized Diploma in Bariatric Surgery Nutrition',
        'Diploma in Diabetes Education',
      ],
    },
  },
  {
    name: 'Lic. Erica Torres García',
    years: 23,
    specialty: {
      es: 'Enfermería Quirúrgica — Laparoscopia de Alta Complejidad',
      en: 'Surgical Nursing — High-Complexity Laparoscopy',
    },
    credentials: {
      es: [
        'Diplomado en Cirugía Laparoscópica Avanzada',
        'Inmersión Clínica Laparoscópica, Bariátrica y Metabólica',
      ],
      en: [
        'Diploma in Advanced Laparoscopic Surgery',
        'Clinical Immersion in Laparoscopic, Bariatric & Metabolic Surgery',
      ],
    },
  },
  {
    name: 'Dr. Héctor Martín Fonseca López',
    years: 33,
    specialty: {
      es: 'Gastroenterología',
      en: 'Gastroenterology',
    },
    credentials: {
      es: [
        'Consejo Mexicano de Gastroenterología',
        'Formación en Endoscopia GI — Showa University, Tokio',
      ],
      en: [
        'Mexican Council of Gastroenterology',
        'GI Endoscopy training — Showa University, Tokyo',
      ],
    },
  },
]
