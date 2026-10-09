export interface FooterLink {
  id: string
  label: string
  href: string
  screen?: string
}

export interface FooterContact {
  id: string
  label: string
  value: string
  description: string
  href: string
  icon: 'email' | 'linkedin' | 'github' | 'location'
}

export interface FooterAvailability {
  id: string
  title: string
  description: string
  icon: 'fullTime' | 'freelance' | 'talks'
}

export const footerData = {
  eyebrow: 'FOOTER',

  title: {
    line1: 'THANK YOU',
    line2: 'FOR EXPLORING.',
  },

  description:
    "I'm always excited to connect, collaborate and work on meaningful projects. Let's build something amazing together.",

  cta: {
    label: 'GET IN TOUCH',
    href: '#contact',
  },

  availabilityMessage:
    'Open to full-time opportunities, freelance projects and collaborations.',

  quickLinks: [
    {
      id: 'home',
      label: 'Home',
      href: '#top',
      screen: '01',
    },
    {
      id: 'work',
      label: 'Work',
      href: '#work',
      screen: '02',
    },
    {
      id: 'about',
      label: 'About',
      href: '#about',
      screen: '03',
    },
    {
      id: 'stack',
      label: 'Tech Stack',
      href: '#stack',
      screen: '08',
    },
    {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
      screen: '10',
    },
    {
      id: 'lab',
      label: 'Engineering Lab',
      href: '#lab',
      screen: '09',
    },
    {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
      screen: '12',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: '#github',
      screen: '13',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      screen: '14',
    },
  ] satisfies FooterLink[],

  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: '#',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: '#',
      icon: 'instagram',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      href: '#',
      icon: 'twitter',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: '#',
      icon: 'youtube',
    },
  ],

  contact: [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'YOUR_EMAIL@example.com',
      description: 'Best for opportunities',
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
  ] satisfies FooterContact[],

  availability: [
    {
      id: 'full-time',
      title: 'Full-Time Roles',
      description: 'Open to new opportunities',
      icon: 'fullTime',
    },
    {
      id: 'freelance',
      title: 'Freelance Projects',
      description: 'Open for collaborations',
      icon: 'freelance',
    },
    {
      id: 'talks',
      title: 'Tech Discussions',
      description: 'Always up for interesting conversations',
      icon: 'talks',
    },
  ] satisfies FooterAvailability[],

  signature: {
    words: ['BUILD', 'LEARN', 'EXPLORE', 'REPEAT'],
    madeWith: 'Made with',
    ending: 'and lots of',
  },

  copyright: {
    year: '2026',
    text: 'All rights reserved.',
  },

  navigation: {
    previous: {
      label: 'CONTACT',
      href: '#contact',
    },

    next: {
      label: 'BACK TO TOP',
      href: '#top',
    },
  },
} as const