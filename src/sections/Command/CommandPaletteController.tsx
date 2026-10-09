import { useEffect, useState } from 'react'
import { CommandPalette } from './CommandPalette'

export function CommandPaletteController() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleGlobalShortcut = (
      event: KeyboardEvent,
    ) => {
      const modifier =
        event.metaKey || event.ctrlKey

      if (
        modifier &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault()
        setOpen(current => !current)
        return
      }

      if (
        modifier &&
        event.key >= '1' &&
        event.key <= '8'
      ) {
        event.preventDefault()

        const destinations: Record<string, string> = {
          '1': '#top',
          '2': '#about',
          '3': '#stack',
          '4': '#experience',
          '5': '#lab',
          '6': '#resume',
          '7': '#github',
          '8': '#contact',
        }

        const destination =
          destinations[event.key]

        if (destination) {
          window.location.hash =
            destination.replace('#', '')
        }
      }
    }

    window.addEventListener(
      'keydown',
      handleGlobalShortcut,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleGlobalShortcut,
      )
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <CommandPalette
      open={open}
      onClose={() => setOpen(false)}
    />
  )
}