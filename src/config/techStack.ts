export interface Technology {
  id: string
  name: string
  shortName?: string
}

export type TechCategoryId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'infrastructure'
  | 'ai'

export interface TechCategory {
  id: TechCategoryId
  number: string
  title: string
  description: string
  technologies: Technology[]
  footerLabel: string
}

export const techStackData = {
  eyebrow: 'THE TOOLBOX',

  title: {
    line1: 'THE',
    line2: 'TOOLBOX.',
  },

  description:
    'Technologies, tools and platforms I use to turn ideas into real products.',

  categories: [
    {
      id: 'frontend',
      number: '01',
      title: 'FRONTEND',
      description:
        'Modern and responsive user interfaces.',
      footerLabel: 'USER INTERFACE',

      technologies: [
        {
          id: 'react',
          name: 'React',
        },
        {
          id: 'react-native',
          name: 'React Native',
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          shortName: 'TS',
        },
      ],
    },

    {
      id: 'backend',
      number: '02',
      title: 'BACKEND',
      description:
        'Scalable and robust server applications.',
      footerLabel: 'SERVER & APIS',

      technologies: [
        {
          id: 'node',
          name: 'Node.js',
        },
        {
          id: 'nestjs',
          name: 'NestJS',
        },
        {
          id: 'express',
          name: 'Express',
        },
      ],
    },

    {
      id: 'database',
      number: '03',
      title: 'DATABASE',
      description:
        'Reliable and flexible data management.',
      footerLabel: 'DATA LAYER',

      technologies: [
        {
          id: 'postgresql',
          name: 'PostgreSQL',
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
        },
        {
          id: 'prisma',
          name: 'Prisma',
        },
      ],
    },

    {
      id: 'infrastructure',
      number: '04',
      title: 'INFRASTRUCTURE',
      description:
        'Deployment, caching and cloud services.',
      footerLabel: 'CLOUD & DEVOPS',

      technologies: [
        {
          id: 'docker',
          name: 'Docker',
        },
        {
          id: 'redis',
          name: 'Redis',
        },
        {
          id: 'firebase',
          name: 'Firebase',
        },
      ],
    },

    {
      id: 'ai',
      number: '05',
      title: 'AI',
      description:
        'Intelligence and machine learning.',
      footerLabel: 'INTELLIGENCE',

      technologies: [
        {
          id: 'ai-apis',
          name: 'AI APIs',
        },
        {
          id: 'machine-learning',
          name: 'Machine Learning',
        },
        {
          id: 'local-ai',
          name: 'Local AI',
        },
      ],
    },
  ] satisfies TechCategory[],

  philosophy: {
    title: 'TECH STACK PHILOSOPHY',

    description:
      'I choose technologies that are modern, maintainable and enable real-world impact.',

    icon: 'cube',
  },

  summary: [
    {
      id: 'technologies',
      value: '10+',
      label: 'CORE TECHNOLOGIES',
    },
    {
      id: 'coverage',
      value: 'FULL-STACK',
      label: 'COVERAGE',
    },
    {
      id: 'production',
      value: 'PRODUCTION',
      label: 'READY',
    },
  ],

  exploration: {
    title: 'ALWAYS EXPLORING',

    description:
      'Continuously learning and experimenting with new tools and technologies.',

    icon: 'settings',
  },
} as const