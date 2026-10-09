export interface HeroSystemGroup {
  id: string
  title: string
  technologies: string[]
}

export interface HeroStat {
  id: string
  label: string
  value: string
}

export const heroData = {
  eyebrow: 'SOFTWARE ENGINEER / 2026',

  title: {
    line1: 'I BUILD',
    line2: 'DIGITAL',
    line3: 'SYSTEMS.',
  },

  description:
    'Full-stack engineer focused on building scalable products, intelligent applications and real-world digital experiences.',

  primaryAction: {
    label: 'EXPLORE WORK',
    href: '#work',
  },

  secondaryAction: {
    label: "LET'S CONNECT",
    href: '#contact',
  },

  systemGroups: [
    {
      id: 'web',
      title: 'WEB',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
      ],
    },

    {
      id: 'mobile',
      title: 'MOBILE',
      technologies: [
        'React Native',
        'Cross Platform',
        'Native Performance',
      ],
    },

    {
      id: 'backend',
      title: 'BACKEND',
      technologies: [
        'Node.js',
        'NestJS',
        'Express',
      ],
    },

    {
      id: 'ai',
      title: 'AI',
      technologies: [
        'AI APIs',
        'Machine Learning',
        'Local AI',
      ],
    },

    {
      id: 'database',
      title: 'DATABASE',
      technologies: [
        'PostgreSQL',
        'MongoDB',
        'Prisma',
      ],
    },

    {
      id: 'cloud',
      title: 'CLOUD',
      technologies: [
        'Docker',
        'Redis',
        'Firebase',
      ],
    },
  ] satisfies HeroSystemGroup[],

  stats: [
    {
      id: 'focus',
      label: 'CURRENT FOCUS',
      value: 'PRODUCT ENGINEERING',
    },

    {
      id: 'stack',
      label: 'STACK',
      value: 'REACT / NODE / POSTGRESQL',
    },

    {
      id: 'location',
      label: 'LOCATION',
      value: 'GLOBAL / REMOTE',
    },
  ],
} as const