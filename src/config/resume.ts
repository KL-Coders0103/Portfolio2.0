export interface ResumeTimelineItem {
  id: string
  period: string
  title: string
  organization: string
  description?: string
  details?: string[]
}

export interface ResumeSkill {
  id: string
  name: string
  level: number
  icon?: string
}

export interface ResumeCertification {
  id: string
  name: string
  issuer: string
  year: string
}

export const resumeData = {
  eyebrow: 'RESUME / PROFILE',

  title: {
    line1: 'MY',
    line2: 'PROFILE.',
  },

  description:
    'A quick overview of my skills, experience, education and professional journey.',

  actions: {
    download: {
      label: 'DOWNLOAD RESUME',
      href: '#',
    },
    online: {
      label: 'VIEW ONLINE',
      href: '#',
    },
  },

  resumeFormats: [
    'PDF',
    '1-PAGE',
    'ATS-FRIENDLY',
  ],

  profile: {
    name: 'YOUR NAME',
    role: 'FULL-STACK DEVELOPER',
    secondaryRole: 'AI ENTHUSIAST',
    tertiaryRole: 'PROBLEM SOLVER',
  },

  profileCards: [
    {
      id: 'location',
      icon: 'location',
      label: 'Based In',
      value: 'YOUR LOCATION',
      description: 'Open to Remote / Onsite',
    },
    {
      id: 'status',
      icon: 'education',
      label: 'Current Status',
      value: 'YOUR CURRENT STATUS',
      description: 'YOUR EDUCATION / ROLE',
    },
    {
      id: 'looking',
      icon: 'work',
      label: 'Looking For',
      value: 'OPPORTUNITIES',
      description: 'FULL-STACK / MOBILE / AI',
    },
    {
      id: 'email',
      icon: 'email',
      label: 'Email',
      value: 'your-email@example.com',
      description: "Let's connect",
    },
  ],

  quickLinks: [
    {
      id: 'email',
      label: 'Email Me',
      href: 'mailto:your-email@example.com',
      icon: 'email',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: '#',
      icon: 'github',
    },
    {
      id: 'resume',
      label: 'Download Resume',
      href: '#',
      icon: 'resume',
    },
    {
      id: 'schedule',
      label: 'Schedule a Call',
      href: '#contact',
      icon: 'calendar',
    },
  ],

  collaborationMessage: [
    "Let's",
    'Build Together!',
  ],

  education: [
    {
      id: 'education-1',
      period: 'YEAR — YEAR',
      title: 'DEGREE / PROGRAM',
      organization: 'INSTITUTION NAME',
      description: 'Additional education details.',
    },
    {
      id: 'education-2',
      period: 'YEAR — YEAR',
      title: 'HIGHER SECONDARY',
      organization: 'INSTITUTION NAME',
      description: 'Additional education details.',
    },
    {
      id: 'education-3',
      period: 'YEAR — YEAR',
      title: 'SECONDARY',
      organization: 'INSTITUTION NAME',
      description: 'Additional education details.',
    },
  ] satisfies ResumeTimelineItem[],

  experience: [
    {
      id: 'experience-1',
      period: 'YEAR',
      title: 'ROLE / POSITION',
      organization: 'COMPANY / ORGANIZATION',
      details: [
        'Responsibility or achievement',
        'Technology or system worked on',
      ],
    },
    {
      id: 'experience-2',
      period: 'YEAR',
      title: 'PROJECT / ROLE',
      organization: 'PROJECT',
      details: [
        'Built a production-oriented application',
        'Implemented relevant features',
      ],
    },
    {
      id: 'experience-3',
      period: 'YEAR',
      title: 'FREELANCE / PROJECT',
      organization: 'CLIENT / PROJECT',
      details: [
        'Developed digital products',
        'Worked across frontend and backend',
      ],
    },
  ] satisfies ResumeTimelineItem[],

  skills: [
    {
      id: 'react',
      name: 'React / React Native',
      level: 90,
    },
    {
      id: 'node',
      name: 'Node.js / Express',
      level: 85,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      level: 80,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 90,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      level: 80,
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      level: 75,
    },
    {
      id: 'firebase',
      name: 'Firebase',
      level: 70,
    },
    {
      id: 'ai',
      name: 'AI / Local AI',
      level: 70,
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: 85,
    },
    {
      id: 'docker',
      name: 'Docker / DevOps',
      level: 60,
    },
  ] satisfies ResumeSkill[],

  certifications: [
    {
      id: 'cert-1',
      name: 'CERTIFICATION NAME',
      issuer: 'ISSUER',
      year: 'YEAR',
    },
    {
      id: 'cert-2',
      name: 'CERTIFICATION NAME',
      issuer: 'ISSUER',
      year: 'YEAR',
    },
    {
      id: 'cert-3',
      name: 'CERTIFICATION NAME',
      issuer: 'ISSUER',
      year: 'YEAR',
    },
    {
      id: 'cert-4',
      name: 'CERTIFICATION NAME',
      issuer: 'ISSUER',
      year: 'YEAR',
    },
    {
      id: 'cert-5',
      name: 'CERTIFICATION NAME',
      issuer: 'ISSUER',
      year: 'YEAR',
    },
  ] satisfies ResumeCertification[],

  certificationsMoreLabel: '+ VIEW MORE CERTIFICATIONS',

  previous: {
    label: 'ABOUT',
    href: '#about',
  },

  next: {
    label: 'CONTACT',
    href: '#contact',
  },
} as const