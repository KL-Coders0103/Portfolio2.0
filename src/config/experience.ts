export type ExperienceStageId =
  | 'foundation'
  | 'full-stack'
  | 'product-engineering'

export interface ExperienceHighlight {
  id: string
  text: string
}

export interface ExperienceStage {
  id: ExperienceStageId
  number: string
  year: string
  title: string
  description: string
  highlights: ExperienceHighlight[]
}

export interface SkillEvolutionGroup {
  id: string
  year: string
  label: string
  skills: {
    id: string
    name: string
    level: number
  }[]
}

export interface Milestone {
  id: string
  period: string
  text: string
}

export interface NextStep {
  id: string
  text: string
}

export const experienceData = {
  eyebrow: 'EXPERIENCE TIMELINE',

  title: {
    line1: 'THE',
    line2: 'JOURNEY.',
  },

  description:
    'A timeline of my growth, learning and evolution as a developer.',

  sideNotes: [
    'CONTINUOUS LEARNING',
    'BUILDING REAL PRODUCTS',
    'EXPLORING NEW TECHNOLOGIES',
  ],

  stages: [
    {
      id: 'foundation',
      number: '01',

      // PLACEHOLDER — replace with verified information
      year: 'YEAR',

      title: 'FOUNDATION',

      description:
        'Building a strong foundation in software development and exploring modern technologies.',

      highlights: [
        {
          id: 'foundation-1',
          text: 'Learned core development technologies',
        },
        {
          id: 'foundation-2',
          text: 'Built personal projects',
        },
        {
          id: 'foundation-3',
          text: 'Explored backend development',
        },
        {
          id: 'foundation-4',
          text: 'Gained practical experience',
        },
      ],
    },

    {
      id: 'full-stack',
      number: '02',

      // PLACEHOLDER — replace with verified information
      year: 'YEAR',

      title: 'FULL-STACK',

      description:
        'Focused on building scalable web and backend systems with real-world features and integrations.',

      highlights: [
        {
          id: 'full-stack-1',
          text: 'Built full-stack applications',
        },
        {
          id: 'full-stack-2',
          text: 'Worked with databases',
        },
        {
          id: 'full-stack-3',
          text: 'Implemented real-time features',
        },
        {
          id: 'full-stack-4',
          text: 'Explored scalable system design',
        },
      ],
    },

    {
      id: 'product-engineering',
      number: '03',

      // PLACEHOLDER — replace with verified information
      year: 'CURRENT',

      title: 'PRODUCT ENGINEERING',

      description:
        'Building complex digital products across web, mobile and AI with a focus on scalability and real-world impact.',

      highlights: [
        {
          id: 'product-1',
          text: 'Building production-ready systems',
        },
        {
          id: 'product-2',
          text: 'Working with AI and automation',
        },
        {
          id: 'product-3',
          text: 'Exploring mobile and multi-platform development',
        },
        {
          id: 'product-4',
          text: 'Focusing on scalable architecture',
        },
      ],
    },
  ] satisfies ExperienceStage[],

  skillEvolution: [
    {
      id: 'skill-foundation',
      year: 'PHASE 01',
      label: 'CORE DEVELOPMENT',
      skills: [
        {
          id: 'html-css',
          name: 'HTML / CSS',
          level: 85,
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          level: 80,
        },
        {
          id: 'react',
          name: 'React',
          level: 78,
        },
        {
          id: 'node',
          name: 'Node.js',
          level: 75,
        },
      ],
    },

    {
      id: 'skill-fullstack',
      year: 'PHASE 02',
      label: 'FULL-STACK SYSTEMS',
      skills: [
        {
          id: 'typescript',
          name: 'TypeScript',
          level: 85,
        },
        {
          id: 'backend',
          name: 'Express / NestJS',
          level: 82,
        },
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          level: 82,
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          level: 70,
        },
      ],
    },

    {
      id: 'skill-product',
      year: 'PHASE 03',
      label: 'ADVANCED & PRODUCT',
      skills: [
        {
          id: 'react-native',
          name: 'React Native',
          level: 80,
        },
        {
          id: 'system-design',
          name: 'System Design',
          level: 72,
        },
        {
          id: 'ai-ml',
          name: 'AI / ML',
          level: 68,
        },
        {
          id: 'scalability',
          name: 'Scalability',
          level: 70,
        },
      ],
    },
  ] satisfies SkillEvolutionGroup[],

  milestones: [
    {
      id: 'milestone-1',
      period: 'MILESTONE 01',
      text: 'Started building real-world software projects',
    },
    {
      id: 'milestone-2',
      period: 'MILESTONE 02',
      text: 'Explored real-time technologies',
    },
    {
      id: 'milestone-3',
      period: 'MILESTONE 03',
      text: 'Focused on scalable architectures',
    },
    {
      id: 'milestone-4',
      period: 'MILESTONE 04',
      text: 'Started working with AI integrations',
    },
    {
      id: 'milestone-5',
      period: 'MILESTONE 05',
      text: 'Building complex digital products',
    },
  ] satisfies Milestone[],

  next: [
    {
      id: 'next-1',
      text: 'Build and launch more impactful products',
    },
    {
      id: 'next-2',
      text: 'Explore advanced AI applications',
    },
    {
      id: 'next-3',
      text: 'Contribute to open source',
    },
    {
      id: 'next-4',
      text: 'Keep learning and improving',
    },
    {
      id: 'next-5',
      text: 'Collaborate on meaningful projects',
    },
  ] satisfies NextStep[],

  previousLabel: 'ENGINEERING LAB',
  nextLabel: 'ABOUT ME',
} as const