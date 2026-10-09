export interface AboutFact {
  id: string
  label: string
  value: string
}

export interface AboutDriver {
  id: string
  title: string
  description: string
  icon: 'target' | 'learning' | 'impact' | 'growth'
}

export const aboutData = {
  eyebrow: 'ABOUT',

  title: {
    line1: 'ABOUT',
    line2: 'ME.',
  },

  description:
    'A curious developer who loves building digital products, learning new technologies and solving real-world problems.',

  primaryAction: {
    label: 'DOWNLOAD RESUME',
    href: '#resume',
  },

  secondaryAction: {
    label: 'CONTACT ME',
    href: '#contact',
  },

  identityNotes: [
    'DEVELOPER',
    'LEARNER',
    'PROBLEM SOLVER',
    'TECH ENTHUSIAST',
  ],

  handwriting: [
    'Build',
    'Learn',
    'Explore',
    'Repeat',
  ],

  profileCards: [
    {
      id: 'experience',
      value: '2+',
      label: 'YEARS',
      description: 'DEVELOPMENT EXPERIENCE',
      icon: 'code',
    },
    {
      id: 'education',
      value: '2026',
      label: 'GRADUATION',
      description: 'COMPUTER ENGINEERING',
      icon: 'education',
    },
    {
      id: 'location',
      value: 'GLOBAL',
      label: 'BASED / REMOTE',
      description: 'OPEN TO OPPORTUNITIES',
      icon: 'location',
    },
    {
      id: 'learning',
      value: 'ALWAYS',
      label: 'LEARNING',
      description: 'NEW TECH, BETTER SOLUTIONS',
      icon: 'learning',
    },
  ],

  interests: [
    'Gaming',
    'Photography',
    'Traveling',
    'Reading',
    'Fitness',
    'Tech & AI',
    'Music',
  ],

  story: {
    title: 'MY STORY',

    paragraphs: [
      'I’m a Computer Engineering graduate with a strong interest in full-stack development, mobile applications and AI-powered products.',

      'I enjoy turning ideas into real products, whether it’s a scalable web platform, a mobile app or an AI-driven tool. I believe in continuous learning, building in public and contributing to meaningful projects.',
    ],

    quote:
      'I’m driven by curiosity and the idea of creating technology that makes a positive impact.',
  },

  drivers: [
    {
      id: 'solve',
      title: 'SOLVE REAL PROBLEMS',
      description:
        'Build products that actually help people.',
      icon: 'target',
    },
    {
      id: 'learning',
      title: 'CONTINUOUS LEARNING',
      description:
        'Always explore new technologies and improve.',
      icon: 'learning',
    },
    {
      id: 'impact',
      title: 'CREATE MEANINGFUL IMPACT',
      description:
        'Work on projects that add real value.',
      icon: 'impact',
    },
    {
      id: 'team',
      title: 'GROW WITH A STRONG TEAM',
      description:
        'Collaborate, learn and build together.',
      icon: 'growth',
    },
  ] satisfies AboutDriver[],

  quickFacts: [
    {
      id: 'name',
      label: 'Name',
      value: 'YOUR NAME',
    },
    {
      id: 'education',
      label: 'Education',
      value: 'B.E. COMPUTER ENGINEERING',
    },
    {
      id: 'graduation',
      label: 'Graduation',
      value: 'MAY 2026',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'YOUR LOCATION',
    },
    {
      id: 'availability',
      label: 'Availability',
      value: 'OPEN TO OPPORTUNITIES',
    },
    {
      id: 'preference',
      label: 'Work Preference',
      value: 'REMOTE / ONSITE / HYBRID',
    },
    {
      id: 'languages',
      label: 'Languages',
      value: 'YOUR LANGUAGES',
    },
    {
      id: 'hobbies',
      label: 'Hobbies',
      value: 'YOUR HOBBIES',
    },
  ] satisfies AboutFact[],

  previous: {
    label: 'EXPERIENCE TIMELINE',
    href: '#experience',
  },

  next: {
    label: 'TECH STACK',
    href: '#stack',
  },
} as const