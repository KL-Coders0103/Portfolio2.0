export type CommandAction =
  | 'navigate'
  | 'theme'
  | 'focus-search'

export interface CommandItem {
  id: string
  label: string
  description: string
  href?: string
  shortcut?: string[]
  action: CommandAction
  keywords: string[]
  icon:
    | 'home'
    | 'about'
    | 'stack'
    | 'experience'
    | 'lab'
    | 'resume'
    | 'github'
    | 'contact'
    | 'theme'
    | 'search'
}

export const commandPaletteData = {
  title: 'Command Palette',
  placeholder: 'Type a command or search...',
  closeLabel: 'to close',

  commands: [
    {
      id: 'home',
      label: 'Go to Home',
      description: 'Navigate to the main page',
      href: '#top',
      shortcut: ['⌘', '1'],
      action: 'navigate',
      keywords: ['home', 'hero', 'main', 'start'],
      icon: 'home',
    },

    {
      id: 'about',
      label: 'Go to About',
      description: 'Learn more about me',
      href: '#about',
      shortcut: ['⌘', '2'],
      action: 'navigate',
      keywords: ['about', 'profile', 'me'],
      icon: 'about',
    },

    {
      id: 'stack',
      label: 'Go to Tech Stack',
      description: 'View my skills and tools',
      href: '#stack',
      shortcut: ['⌘', '3'],
      action: 'navigate',
      keywords: ['stack', 'skills', 'technology', 'tools'],
      icon: 'stack',
    },

    {
      id: 'experience',
      label: 'Go to Experience',
      description: 'Check my work experience',
      href: '#experience',
      shortcut: ['⌘', '4'],
      action: 'navigate',
      keywords: ['experience', 'career', 'work', 'journey'],
      icon: 'experience',
    },

    {
      id: 'lab',
      label: 'Go to Engineering Lab',
      description: 'Explore experiments and projects',
      href: '#lab',
      shortcut: ['⌘', '5'],
      action: 'navigate',
      keywords: ['lab', 'experiments', 'projects'],
      icon: 'lab',
    },

    {
      id: 'resume',
      label: 'View Resume',
      description: 'Download or view my resume',
      href: '#resume',
      shortcut: ['⌘', '6'],
      action: 'navigate',
      keywords: ['resume', 'cv', 'profile'],
      icon: 'resume',
    },

    {
      id: 'github',
      label: 'Visit GitHub',
      description: 'Check my open source projects',
      href: '#github',
      shortcut: ['⌘', '7'],
      action: 'navigate',
      keywords: ['github', 'code', 'open source', 'repositories'],
      icon: 'github',
    },

    {
      id: 'contact',
      label: 'Contact Me',
      description: 'Send a message',
      href: '#contact',
      shortcut: ['⌘', '8'],
      action: 'navigate',
      keywords: ['contact', 'email', 'message', 'hire'],
      icon: 'contact',
    },

    {
      id: 'theme',
      label: 'Toggle Theme',
      description: 'Switch between light and dark theme',
      shortcut: ['⌘', 'D'],
      action: 'theme',
      keywords: ['theme', 'dark', 'light', 'appearance'],
      icon: 'theme',
    },

    {
      id: 'search',
      label: 'Search Projects',
      description: 'Find projects, skills or content',
      shortcut: ['⌘', 'K'],
      action: 'focus-search',
      keywords: ['search', 'projects', 'find', 'work'],
      icon: 'search',
    },
  ] satisfies CommandItem[],
} as const