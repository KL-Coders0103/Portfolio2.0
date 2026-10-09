import type { ReactNode } from 'react'

interface MagneticButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function MagneticButton({
  href,
  children,
  variant = 'primary',
}: MagneticButtonProps) {
  return (
    <a
      href={href}
      className={`hero-button ${
        variant === 'primary'
          ? 'hero-button--primary'
          : 'hero-button--secondary'
      }`}
    >
      {children}
    </a>
  )
}