import {
  BriefcaseBusiness,
  Code2,
  FileText,
  FlaskConical,
  Home,
  Layers3,
  Mail,
  Moon,
  Search,
  UserRound,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import {
  commandPaletteData,
  type CommandItem,
} from '../../config/commandPalette'

import './command-palette.css'

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.99c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const commandIcons = {
  home: Home,
  about: UserRound,
  stack: Layers3,
  experience: BriefcaseBusiness,
  lab: FlaskConical,
  resume: FileText,
  github: GitHubIcon,
  contact: Mail,
  theme: Moon,
  search: Search,
} as const

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export function CommandPalette({
  open,
  onClose,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return commandPaletteData.commands
    }

    return commandPaletteData.commands.filter(command => {
      const searchableText = [
        command.label,
        command.description,
        ...command.keywords,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [query])

  useEffect(() => {
    if (!open) return

    setQuery('')
    setSelectedIndex(0)

    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()

        setSelectedIndex(current =>
          Math.min(
            current + 1,
            Math.max(filteredCommands.length - 1, 0),
          ),
        )

        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()

        setSelectedIndex(current =>
          Math.max(current - 1, 0),
        )

        return
      }

      if (event.key === 'Enter') {
        event.preventDefault()

        const command =
          filteredCommands[selectedIndex]

        if (command) {
          executeCommand(command)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    open,
    filteredCommands,
    selectedIndex,
    onClose,
  ])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const executeCommand = (command: CommandItem) => {
    if (command.action === 'navigate') {
      onClose()

      if (command.href) {
        window.location.hash = command.href.replace('#', '')
      }

      return
    }

    if (command.action === 'theme') {
      document.documentElement.classList.toggle('light-theme')
      return
    }

    if (command.action === 'focus-search') {
      inputRef.current?.focus()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="command-palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={event => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        >
          <motion.div
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            {/* HEADER */}

            <div className="command-palette__header">
              <div className="command-palette__title">
                <span className="command-palette__title-icon">
                  <Code2 size={22} />
                </span>

                <strong>
                  {commandPaletteData.title}
                </strong>
              </div>

              <button
                type="button"
                className="command-palette__close"
                onClick={onClose}
                aria-label="Close command palette"
              >
                <kbd>ESC</kbd>

                <span>
                  {commandPaletteData.closeLabel}
                </span>
              </button>
            </div>

            {/* SEARCH */}

            <div className="command-palette__search">
              <Search size={24} />

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={event =>
                  setQuery(event.target.value)
                }
                placeholder={
                  commandPaletteData.placeholder
                }
                aria-label="Search commands"
              />

              {query && (
                <button
                  type="button"
                  className="command-palette__clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* COMMAND LIST */}

            <div className="command-palette__commands">
              {filteredCommands.length === 0 ? (
                <div className="command-palette__empty">
                  <Search size={30} />

                  <strong>
                    No commands found
                  </strong>

                  <span>
                    Try another search term.
                  </span>
                </div>
              ) : (
                filteredCommands.map(
                  (command, index) => {
                    const Icon =
                      commandIcons[command.icon]

                    const isSelected =
                      index === selectedIndex

                    return (
                      <button
                        key={command.id}
                        type="button"
                        className={[
                          'command-palette__item',
                          isSelected
                            ? 'command-palette__item--selected'
                            : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onMouseEnter={() =>
                          setSelectedIndex(index)
                        }
                        onClick={() =>
                          executeCommand(command)
                        }
                      >
                        <span className="command-palette__item-icon">
                          <Icon size={22} />
                        </span>

                        <span className="command-palette__item-content">
                          <strong>
                            {command.label}
                          </strong>

                          <small>
                            {command.description}
                          </small>
                        </span>

                        {command.shortcut && (
                          <span className="command-palette__shortcut">
                            {command.shortcut.map(
                              key => (
                                <kbd key={key}>
                                  {key}
                                </kbd>
                              ),
                            )}
                          </span>
                        )}
                      </button>
                    )
                  },
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}