export interface LabExperiment {
  id: string
  number: string
  title: string
  description: string
  technologies: string[]
  image: string
}

export interface ExplorationItem {
  id: string
  title: string
  description: string
}

export const labData = {
  eyebrow: 'ENGINEERING LAB',

  title: {
    line1: 'LAB.',
  },

  subtitle:
    'IDEAS, EXPERIMENTS AND THINGS I’M CURRENTLY BUILDING.',

  description:
    'A space where I explore new technologies, prototype ideas and experiment with engineering concepts that can turn into real products.',

  experiments: [
    {
      id: 'ai-experiments',
      number: '01',
      title: 'AI EXPERIMENTS',
      description:
        'Exploring AI models, local LLMs and intelligent applications.',
      technologies: [
        'Local AI',
        'LLM',
        'RAG',
        'Agents',
      ],
      image: '/images/lab/ai-experiments.webp',
    },

    {
      id: 'ui-experiments',
      number: '02',
      title: 'UI EXPERIMENTS',
      description:
        'Modern interfaces, animations and interaction patterns.',
      technologies: [
        'React',
        'Tailwind',
        'Framer Motion',
        'UI/UX',
      ],
      image: '/images/lab/ui-experiments.webp',
    },

    {
      id: 'motion-experiments',
      number: '03',
      title: 'MOTION EXPERIMENTS',
      description:
        'Exploring smooth, meaningful and performant animations.',
      technologies: [
        'GSAP',
        'Three.js',
        'WebGL',
        'Motion',
      ],
      image: '/images/lab/motion-experiments.webp',
    },

    {
      id: 'backend-experiments',
      number: '04',
      title: 'BACKEND EXPERIMENTS',
      description:
        'Testing scalable architectures, APIs and real-time systems.',
      technologies: [
        'Node.js',
        'NestJS',
        'WebSockets',
        'Redis',
      ],
      image: '/images/lab/backend-experiments.webp',
    },

    {
      id: 'automation',
      number: '05',
      title: 'AUTOMATION',
      description:
        'Building tools to automate repetitive tasks and workflows.',
      technologies: [
        'Python',
        'Scripts',
        'CI/CD',
        'Automation',
      ],
      image: '/images/lab/automation.webp',
    },

    {
      id: 'mobile-prototypes',
      number: '06',
      title: 'MOBILE PROTOTYPES',
      description:
        'Testing mobile ideas and cross-platform experiments.',
      technologies: [
        'React Native',
        'Expo',
        'Native UI',
        'Prototypes',
      ],
      image: '/images/lab/mobile-prototypes.webp',
    },
  ] satisfies LabExperiment[],

  exploration: {
    title: 'CURRENTLY EXPLORING',

    items: [
      {
        id: 'local-ai',
        title: 'LOCAL AI ASSISTANT',
        description: 'RAG + Local LLM',
      },
      {
        id: 'realtime',
        title: 'REAL-TIME COLLABORATION',
        description: 'WebRTC + WebSockets',
      },
      {
        id: 'ai-tools',
        title: 'AI-POWERED DEV TOOLS',
        description: 'Productivity Tools',
      },
      {
        id: 'mobile-kit',
        title: 'MOBILE UI KIT',
        description: 'Cross-Platform Components',
      },
    ] satisfies ExplorationItem[],
  },

  collaboration: {
    title: 'OPEN TO COLLABORATION',

    description:
      'Always open to discuss new ideas, collaborate on interesting projects and turn experiments into real products.',
  },
} as const