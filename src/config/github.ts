export interface GitHubRepository {
  id: string
  name: string
  visibility: 'Public' | 'Private'
  description: string
  technologies: string[]
  stars: number
  forks: number
  updated: string
  url: string
  icon:
    | 'cube'
    | 'layers'
    | 'brain'
    | 'mobile'
    | 'database'
    | 'globe'
}

export interface GitHubActivity {
  id: string
  action: string
  repository: string
  time: string
}

export interface GitHubLanguage {
  id: string
  name: string
  percentage: number
}

export const githubData = {
  eyebrow: 'GITHUB / OPEN SOURCE',

  title: {
    line1: 'OPEN',
    line2: 'SOURCE.',
  },

  subtitle: 'Code. Learn. Build. Share.',

  description:
    'A collection of projects, experiments and contributions to the developer community.',

  profileUrl: '#',

  actions: {
    github: {
      label: 'VIEW ON GITHUB',
      href: '#',
    },
    follow: {
      label: 'FOLLOW',
      href: '#',
    },
  },

  stats: [
    {
      id: 'repositories',
      value: 'YOUR DATA',
      label: 'PUBLIC REPOSITORIES',
      icon: 'repository',
    },
    {
      id: 'stars',
      value: 'YOUR DATA',
      label: 'TOTAL STARS',
      icon: 'star',
    },
    {
      id: 'forks',
      value: 'YOUR DATA',
      label: 'FORKS',
      icon: 'fork',
    },
    {
      id: 'contributions',
      value: 'YOUR DATA',
      label: 'CONTRIBUTIONS',
      icon: 'users',
    },
  ],

  contributionActivity: {
    label: 'CONTRIBUTION ACTIVITY',
    period: 'YOUR PERIOD',

    // Replace with actual contribution intensity values.
    // 0 = no contribution
    // 1 = low
    // 2 = medium
    // 3 = high
    // 4 = very high
    levels: [
      0, 1, 0, 2, 1, 0, 3, 1, 0, 2, 4, 1,
      0, 0, 2, 3, 1, 0, 4, 2, 1, 0, 3, 2,
      0, 1, 2, 0, 3, 4, 2, 1, 0, 2, 3, 1,
      0, 2, 4, 3, 1, 0, 2, 3, 4, 1, 0, 2,
      1, 3, 0, 2, 4, 3, 1, 0, 2, 3, 1, 4,
      0, 1, 2, 3, 0, 2, 4, 1, 3, 0, 2, 1,
      2, 3, 1, 0, 4, 2, 1, 3, 0, 2, 4, 1,
    ],
  },

  repositories: [
    {
      id: 'project-1',
      name: 'PROJECT NAME',
      visibility: 'Public',
      description:
        'Project description goes here.',
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'AI',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'cube',
    },
    {
      id: 'project-2',
      name: 'PROJECT NAME',
      visibility: 'Public',
      description:
        'A reusable developer project or toolkit.',
      technologies: [
        'TypeScript',
        'CLI',
        'Open Source',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'layers',
    },
    {
      id: 'project-3',
      name: 'ML EXPERIMENTS',
      visibility: 'Public',
      description:
        'Machine learning experiments and implementations.',
      technologies: [
        'Python',
        'Jupyter',
        'ML',
        'Data',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'brain',
    },
    {
      id: 'project-4',
      name: 'MOBILE STARTER',
      visibility: 'Public',
      description:
        'A scalable boilerplate for mobile applications.',
      technologies: [
        'React Native',
        'TypeScript',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'mobile',
    },
    {
      id: 'project-5',
      name: 'DATABASE PLAYGROUND',
      visibility: 'Public',
      description:
        'Database design examples and experiments.',
      technologies: [
        'PostgreSQL',
        'MongoDB',
        'SQL',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'database',
    },
    {
      id: 'project-6',
      name: 'PORTFOLIO WEBSITE',
      visibility: 'Public',
      description:
        'Personal portfolio built with modern web technologies.',
      technologies: [
        'React',
        'Tailwind CSS',
        'Framer Motion',
      ],
      stars: 0,
      forks: 0,
      updated: 'RECENTLY',
      url: '#',
      icon: 'globe',
    },
  ] satisfies GitHubRepository[],

  activity: [
    {
      id: 'activity-1',
      action: 'Pushed commits to',
      repository: 'PROJECT NAME',
      time: 'RECENTLY',
    },
    {
      id: 'activity-2',
      action: 'Opened an issue in',
      repository: 'PROJECT NAME',
      time: 'RECENTLY',
    },
    {
      id: 'activity-3',
      action: 'Merged a pull request in',
      repository: 'PROJECT NAME',
      time: 'RECENTLY',
    },
    {
      id: 'activity-4',
      action: 'Forked a repository',
      repository: 'PROJECT NAME',
      time: 'RECENTLY',
    },
    {
      id: 'activity-5',
      action: 'Starred',
      repository: 'PROJECT NAME',
      time: 'RECENTLY',
    },
  ] satisfies GitHubActivity[],

  languages: [
    {
      id: 'typescript',
      name: 'TypeScript',
      percentage: 0,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      percentage: 0,
    },
    {
      id: 'python',
      name: 'Python',
      percentage: 0,
    },
    {
      id: 'html',
      name: 'HTML / CSS',
      percentage: 0,
    },
    {
      id: 'other',
      name: 'Other',
      percentage: 0,
    },
  ] satisfies GitHubLanguage[],

  repositoryTabs: [
    'FEATURED REPOSITORIES',
    'ALL REPOS',
    'CONTRIBUTIONS',
    'STARRED',
    'FORKED',
  ],

  previous: {
    label: 'RESUME / PROFILE',
    href: '#resume',
  },

  next: {
    label: 'CONTACT',
    href: '#contact',
  },
} as const