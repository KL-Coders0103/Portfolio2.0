export interface MetricCard {
  id: string
  value: string
  label: string
  description: string
  icon: 'layers' | 'cube' | 'folder' | 'chart'
}

export interface FocusArea {
  id: string
  label: string
  percentage: number
}

export interface GrowthPoint {
  year: string
  value: number
}

export const metricsData = {
  eyebrow: 'ENGINEERING BY NUMBERS',

  title: {
    line1: 'ENGINEERING',
    line2: 'BY NUMBERS.',
  },

  description:
    'Numbers don’t tell the whole story, but they show the direction — consistent learning, building and improving.',

  metrics: [
    {
      id: 'building',
      value: '2+',
      label: 'YEARS BUILDING',
      description:
        'Consistently building real-world applications and exploring new technologies.',
      icon: 'layers',
    },

    {
      id: 'technologies',
      value: '10+',
      label: 'TECHNOLOGIES',
      description:
        'Working across frontend, backend, mobile, databases, cloud and AI.',
      icon: 'cube',
    },

    {
      id: 'projects',
      value: '15+',
      label: 'PROJECTS',
      description:
        'Complete applications, experiments and open-source contributions.',
      icon: 'folder',
    },

    {
      id: 'scale',
      value: '100K+',
      label: 'TARGET SCALE',
      description:
        'Building systems designed to scale for real-world usage and larger audiences.',
      icon: 'chart',
    },
  ] satisfies MetricCard[],

  globalReach: {
    title: 'GLOBAL REACH',
    continents: '3',
    continentsLabel: 'CONTINENTS',
    timeZones: '10+',
    timeZonesLabel: 'TIME ZONES',
    location: 'GLOBAL',
    locationLabel: 'REMOTE',
  },

  growth: {
    title: 'CONSISTENT GROWTH',

    points: [
      { year: '2024', value: 7 },
      { year: '2025', value: 13 },
      { year: '2026', value: 18 },
    ] satisfies GrowthPoint[],
  },

  focusAreas: [
    {
      id: 'product',
      label: 'PRODUCT ENGINEERING',
      percentage: 90,
    },
    {
      id: 'systems',
      label: 'SYSTEM DESIGN',
      percentage: 80,
    },
    {
      id: 'ai',
      label: 'AI & AUTOMATION',
      percentage: 70,
    },
    {
      id: 'realtime',
      label: 'REAL-TIME SYSTEMS',
      percentage: 75,
    },
    {
      id: 'mobile',
      label: 'MOBILE DEVELOPMENT',
      percentage: 85,
    },
  ] satisfies FocusArea[],
} as const