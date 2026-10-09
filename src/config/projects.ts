export interface Project {
  id: string
  number: string
  category: string
  name: string
  description: string
  image: string
  technologies: string[]
  caseStudyUrl: string
  githubUrl: string
}

export const projectsData = {
  eyebrow: 'SELECTED WORK',

  title: {
    line1: 'SELECTED',
    line2: 'WORK.',
  },

  description:
    "A selection of systems, products and experiments I've built.",

  projects: [
    {
      id: 'project-nova',
      number: '01',
      category: 'MOBILE PLATFORM',
      name: 'PROJECT NOVA',
      description:
        'A scalable digital platform designed to connect users with service providers through real-time matching and intelligent workflows.',
      image: '/images/projects/project-nova.webp',
      technologies: [
        'React Native',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Socket.IO',
      ],
      caseStudyUrl: '#case-study/project-nova',
      githubUrl: '#',
    },

    {
      id: 'project-orbit',
      number: '02',
      category: 'AI LEARNING PLATFORM',
      name: 'PROJECT ORBIT',
      description:
        'An intelligent learning platform combining personalized education, AI assistance and interactive progress tracking.',
      image: '/images/projects/project-orbit.webp',
      technologies: [
        'React Native',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Local AI',
      ],
      caseStudyUrl: '#case-study/project-orbit',
      githubUrl: '#',
    },

    {
      id: 'project-pulse',
      number: '03',
      category: 'AI BUSINESS INTELLIGENCE',
      name: 'PROJECT PULSE',
      description:
        'A business analytics platform that transforms operational data into actionable insights and visual intelligence.',
      image: '/images/projects/project-pulse.webp',
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Machine Learning',
        'Data Visualization',
      ],
      caseStudyUrl: '#case-study/project-pulse',
      githubUrl: '#',
    },
  ] satisfies Project[],

  navigation: {
    previous: {
      label: 'ENGINEERING METRICS',
      href: '#metrics',
    },

    next: {
      label: 'PROJECT NOVA CASE STUDY',
      href: '#case-studies',
    },
  },
} as const