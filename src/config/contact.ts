export interface ContactInfoItem {
  id: string
  label: string
  value: string
  description: string
  href: string
  icon: 'email' | 'linkedin' | 'github' | 'location'
}

export interface ContactOpportunity {
  id: string
  title: string
  description: string
  icon: 'fullTime' | 'remote' | 'freelance' | 'talks'
}

export const contactData = {
  eyebrow: 'CONTACT',

  title: {
    line1: "LET'S",
    line2: 'CONNECT.',
  },

  description:
    "I'm always open to discussing new opportunities, interesting projects or just tech conversations.",

  availabilityMessage: 'I usually respond within 24 hours.',

  interests: [
    'Open to opportunities',
    'Freelance & collaboration',
    'Tech discussions',
    "Let's build something amazing",
  ],

  form: {
    title: 'SEND A MESSAGE',

    fields: {
      name: {
        label: 'Your Name',
        placeholder: 'Your name',
        required: true,
      },

      email: {
        label: 'Your Email',
        placeholder: 'you@example.com',
        required: true,
      },

      subject: {
        label: 'Subject',
        placeholder: 'Select a subject',
        required: true,
      },

      message: {
        label: 'Message',
        placeholder:
          'Tell me about your project, opportunity or just say hello...',
        required: true,
      },
    },

    subjects: [
      'Job Opportunity',
      'Freelance Project',
      'Collaboration',
      'Technical Discussion',
      'Just Saying Hello',
    ],

    submitLabel: 'SEND MESSAGE',
  },

  contactInfo: [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'YOUR_EMAIL@example.com',
      description: 'Best for opportunities & projects',
      href: 'mailto:YOUR_EMAIL@example.com',
      icon: 'email',
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/YOUR_USERNAME',
      description: "Let's connect professionally",
      href: '#',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/YOUR_USERNAME',
      description: 'Check out my projects',
      href: '#',
      icon: 'github',
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'YOUR LOCATION',
      description: 'Open to Remote / Onsite',
      href: '#',
      icon: 'location',
    },
  ] satisfies ContactInfoItem[],

  opportunities: [
    {
      id: 'full-time',
      title: 'Full-Time',
      description: 'Open to new opportunities',
      icon: 'fullTime',
    },
    {
      id: 'remote',
      title: 'Remote',
      description: 'Flexible work arrangements',
      icon: 'remote',
    },
    {
      id: 'freelance',
      title: 'Freelance',
      description: 'Project-based collaborations',
      icon: 'freelance',
    },
    {
      id: 'talks',
      title: 'Tech Talks',
      description: 'Always up for interesting discussions',
      icon: 'talks',
    },
  ] satisfies ContactOpportunity[],

  previous: {
    label: 'GITHUB / OPEN SOURCE',
    href: '#github',
  },

  next: {
    label: 'THANK YOU',
    href: '#thank-you',
  },
} as const