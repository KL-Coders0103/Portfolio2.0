export interface NavigationItem {
  id: string
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'work',
    label: 'WORK',
    href: '#work',
  },
  {
    id: 'about',
    label: 'ABOUT',
    href: '#about',
  },
  {
    id: 'stack',
    label: 'STACK',
    href: '#stack',
  },
  {
    id: 'experience',
    label: 'EXPERIENCE',
    href: '#experience',
  },
  {
    id: 'lab',
    label: 'LAB',
    href: '#lab',
  },
]