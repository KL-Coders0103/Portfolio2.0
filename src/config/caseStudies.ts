export interface CaseStudyModule {
  id: string
  label: string
  value: string
}

export interface CaseStudyApproach {
  items: string[]
  description: string
}

export interface CaseStudyResult {
  id: string
  title: string
  description: string
  icon:
    | 'lightning'
    | 'users'
    | 'shield'
    | 'chart'
}

export interface SystemNode {
  id: string
  title: string
  subtitle: string
  technology: string
  icon:
    | 'client'
    | 'api'
    | 'auth'
    | 'business'
    | 'database'
    | 'realtime'
}

export interface CaseStudy {
  id: string

  number: string

  projectName: string

  category: string

  description: string

  heroImage: string

  overviewTags: string[]

  liveDemoUrl: string

  githubUrl: string

  technologies: string[]

  modules: CaseStudyModule[]

  problem: {
    image: string
    description: string
    points: string[]
  }

  approach: CaseStudyApproach

  result: {
    description: string
    items: CaseStudyResult[]
  }

  system: {
    nodes: SystemNode[]
  }

  previous: {
    label: string
    href: string
  }

  next: {
    label: string
    href: string
  }
}

export const caseStudies = {
  'project-nova': {
    id: 'project-nova',

    number: '01',

    projectName: 'PROJECT NOVA',

    category: 'ON-DEMAND DIGITAL PLATFORM',

    description:
      'A scalable digital platform designed to connect users with service providers through real-time matching and intelligent workflows.',

    heroImage:
      '/images/case-studies/nova/hero.webp',

    liveDemoUrl: '#',

    githubUrl: '#',

    overviewTags: [
        'ON-DEMAND',
        'REAL-TIME',
        'SCALABLE',
        'USER-CENTRIC',
    ],

    technologies: [
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Socket.IO',
    ],

    modules: [
      {
        id: 'modules',
        label: 'KEY MODULES',
        value: '6+',
      },
      {
        id: 'features',
        label: 'FEATURES',
        value: '20+',
      },
    ],

    problem: {
      image:
        '/images/case-studies/nova/problem.webp',

      description:
        'People struggle to find reliable service providers quickly. Existing solutions often lack real-time matching, transparency and seamless user experience.',

      points: [
        'Limited Access',
        'Unreliable Providers',
        'No Real-time Tracking',
        'Lack of Transparency',
      ],
    },

    approach: {
      items: [
        'Real-time provider matching',
        'Clear and transparent workflows',
        'Mobile-first user experience',
        'Scalable backend architecture',
        'Modular and maintainable codebase',
      ],

      description:
        'We designed a real-time, mobile-first platform with intelligent matching, secure workflows and a scalable architecture to deliver a seamless on-demand experience.',
    },

    result: {
      description:
        'A complete on-demand platform with real-time matching, improved transparency and a scalable architecture ready for large-scale usage.',

      items: [
        {
          id: 'matching',
          title: 'FASTER MATCHING',
          description: '',
          icon: 'lightning',
        },
        {
          id: 'experience',
          title: 'IMPROVED USER EXPERIENCE',
          description: '',
          icon: 'users',
        },
        {
          id: 'transparency',
          title: 'MORE TRANSPARENCY',
          description: '',
          icon: 'shield',
        },
        {
          id: 'architecture',
          title: 'SCALABLE ARCHITECTURE',
          description: '',
          icon: 'chart',
        },
      ],
    },

    system: {
      nodes: [
        {
          id: 'client',
          title: 'CLIENT',
          subtitle: 'Mobile App',
          technology: 'React Native',
          icon: 'client',
        },
        {
          id: 'api',
          title: 'API',
          subtitle: 'NestJS',
          technology: 'NestJS',
          icon: 'api',
        },
        {
          id: 'auth',
          title: 'AUTH',
          subtitle: 'JWT + OTP',
          technology: 'JWT',
          icon: 'auth',
        },
        {
          id: 'business',
          title: 'BUSINESS LOGIC',
          subtitle: 'Matching, Booking',
          technology: 'NestJS',
          icon: 'business',
        },
        {
          id: 'database',
          title: 'DATABASE',
          subtitle: 'PostgreSQL',
          technology: 'Prisma',
          icon: 'database',
        },
        {
          id: 'realtime',
          title: 'REAL-TIME SERVICES',
          subtitle: 'Redis + Socket.IO',
          technology: 'Socket.IO',
          icon: 'realtime',
        },
      ],
    },

    previous: {
      label: 'FEATURED WORK',
      href: '#work',
    },

    next: {
      label: 'PROJECT ORBIT CASE STUDY',
      href: '#case-study/project-orbit',
    },
  },

  /*
   * DESIGN PLACEHOLDER
   * Replace this data with your real Project Orbit information.
   */
  'project-orbit': {
    id: 'project-orbit',

    number: '02',

    projectName: 'PROJECT ORBIT',

    category: 'AI LEARNING PLATFORM',

    description:
      'An intelligent learning platform combining personalized education, AI assistance and interactive progress tracking.',

    heroImage:
      '/images/case-studies/orbit/hero.webp',

    liveDemoUrl: '#',

    githubUrl: '#',

    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Local AI',
    ],

    overviewTags: [
    'AI-POWERED',
    'PERSONALIZED',
    'MOBILE-FIRST',
    'INTERACTIVE',
    ],

    modules: [
      {
        id: 'modules',
        label: 'KEY MODULES',
        value: '6+',
      },
      {
        id: 'features',
        label: 'FEATURES',
        value: '20+',
      },
    ],

    problem: {
      image:
        '/images/case-studies/orbit/problem.webp',

      description:
        'Learning experiences can become fragmented when education, assistance and progress tracking are disconnected.',

      points: [
        'Fragmented Learning',
        'Limited Personalization',
        'Slow Feedback',
        'Poor Progress Visibility',
      ],
    },

    approach: {
      items: [
        'Personalized learning flows',
        'AI-assisted learning',
        'Interactive progress tracking',
        'Mobile-first experience',
        'Modular architecture',
      ],

      description:
        'The platform combines structured learning experiences with intelligent assistance and progress tracking in a single mobile-first system.',
    },

    result: {
      description:
        'An integrated learning experience designed around personalization, intelligent assistance and measurable progress.',

      items: [
        {
          id: 'learning',
          title: 'PERSONALIZED LEARNING',
          description: '',
          icon: 'lightning',
        },
        {
          id: 'assistant',
          title: 'AI ASSISTANCE',
          description: '',
          icon: 'users',
        },
        {
          id: 'progress',
          title: 'CLEAR PROGRESS',
          description: '',
          icon: 'shield',
        },
        {
          id: 'architecture',
          title: 'SCALABLE ARCHITECTURE',
          description: '',
          icon: 'chart',
        },
      ],
    },

    system: {
      nodes: [
        {
          id: 'client',
          title: 'CLIENT',
          subtitle: 'Mobile App',
          technology: 'React Native',
          icon: 'client',
        },
        {
          id: 'api',
          title: 'API',
          subtitle: 'Node.js',
          technology: 'Node.js',
          icon: 'api',
        },
        {
          id: 'auth',
          title: 'AUTH',
          subtitle: 'JWT + OTP',
          technology: 'JWT',
          icon: 'auth',
        },
        {
          id: 'business',
          title: 'LEARNING LOGIC',
          subtitle: 'Courses, Progress',
          technology: 'Node.js',
          icon: 'business',
        },
        {
          id: 'database',
          title: 'DATABASE',
          subtitle: 'PostgreSQL',
          technology: 'Prisma',
          icon: 'database',
        },
        {
          id: 'realtime',
          title: 'AI SERVICES',
          subtitle: 'Local AI',
          technology: 'Ollama',
          icon: 'realtime',
        },
      ],
    },

    previous: {
      label: 'PROJECT NOVA CASE STUDY',
      href: '#case-study/project-nova',
    },

    next: {
      label: 'PROJECT PULSE CASE STUDY',
      href: '#case-study/project-pulse',
    },
  },

  /*
   * DESIGN PLACEHOLDER
   * Replace this data with your real Project Pulse information.
   */
  'project-pulse': {
    id: 'project-pulse',

    number: '03',

    projectName: 'PROJECT PULSE',

    category: 'AI BUSINESS INTELLIGENCE',

    description:
      'A business analytics platform that transforms operational data into actionable insights and visual intelligence.',

    heroImage:
      '/images/case-studies/pulse/hero.webp',

    liveDemoUrl: '#',

    githubUrl: '#',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Machine Learning',
      'Data Visualization',
    ],

    overviewTags: [
  'DATA-DRIVEN',
  'ANALYTICS',
  'INTELLIGENT',
  'SCALABLE',
],

    modules: [
      {
        id: 'modules',
        label: 'KEY MODULES',
        value: '6+',
      },
      {
        id: 'features',
        label: 'FEATURES',
        value: '20+',
      },
    ],

    problem: {
      image:
        '/images/case-studies/pulse/problem.webp',

      description:
        'Operational data can become difficult to understand when important signals are spread across disconnected sources and interfaces.',

      points: [
        'Scattered Data',
        'Limited Visibility',
        'Manual Analysis',
        'Slow Decisions',
      ],
    },

    approach: {
      items: [
        'Centralized analytics',
        'Interactive visualization',
        'Automated insights',
        'Scalable backend services',
        'Modular dashboard architecture',
      ],

      description:
        'The platform brings operational information together and turns it into interactive dashboards and actionable business insights.',
    },

    result: {
      description:
        'A business intelligence experience focused on clearer data visibility, faster analysis and scalable analytics workflows.',

      items: [
        {
          id: 'insights',
          title: 'ACTIONABLE INSIGHTS',
          description: '',
          icon: 'lightning',
        },
        {
          id: 'visibility',
          title: 'IMPROVED VISIBILITY',
          description: '',
          icon: 'users',
        },
        {
          id: 'analysis',
          title: 'FASTER ANALYSIS',
          description: '',
          icon: 'shield',
        },
        {
          id: 'architecture',
          title: 'SCALABLE ARCHITECTURE',
          description: '',
          icon: 'chart',
        },
      ],
    },

    system: {
      nodes: [
        {
          id: 'client',
          title: 'CLIENT',
          subtitle: 'Web App',
          technology: 'React',
          icon: 'client',
        },
        {
          id: 'api',
          title: 'API',
          subtitle: 'Node.js',
          technology: 'Node.js',
          icon: 'api',
        },
        {
          id: 'auth',
          title: 'AUTH',
          subtitle: 'JWT',
          technology: 'JWT',
          icon: 'auth',
        },
        {
          id: 'business',
          title: 'ANALYTICS',
          subtitle: 'Insights, Reports',
          technology: 'Node.js',
          icon: 'business',
        },
        {
          id: 'database',
          title: 'DATABASE',
          subtitle: 'MongoDB',
          technology: 'Mongoose',
          icon: 'database',
        },
        {
          id: 'realtime',
          title: 'ML SERVICES',
          subtitle: 'Predictions',
          technology: 'Machine Learning',
          icon: 'realtime',
        },
      ],
    },

    previous: {
      label: 'PROJECT ORBIT CASE STUDY',
      href: '#case-study/project-orbit',
    },

    next: {
      label: 'FEATURED WORK',
      href: '#work',
    },
  },
} satisfies Record<string, CaseStudy>