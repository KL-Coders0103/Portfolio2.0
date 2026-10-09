import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './Navbar.css'
import { navigationItems } from '../../config/navigation'
import { siteConfig } from '../../config/site'
import { AvailabilityBadge } from '../common/AvailabilityBadge'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__container">

          {/* LOGO */}

          <a
            href="#top"
            className="site-logo"
            aria-label={`${siteConfig.brand.name} home`}
          >
            <span className="site-logo__name">
              {siteConfig.brand.firstName}
            </span>

            <span className="site-logo__suffix">
              {siteConfig.brand.suffix}
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="desktop-navigation"
            aria-label="Primary navigation"
          >
            <div className="desktop-navigation__links">
              {navigationItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="navigation-link"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="desktop-navigation__actions">

              <AvailabilityBadge />

              <a
                href="#contact"
                className="navigation-contact"
              >
                <span>CONTACT</span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </a>

            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(current => !current)
            }
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </header>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-navigation"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <nav aria-label="Mobile navigation">

              {navigationItems.map(
                (item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </motion.a>
                ),
              )}

              <div className="mobile-navigation__availability">
                <AvailabilityBadge />
              </div>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mobile-navigation__contact"
              >
                <span>CONTACT</span>

                <ArrowUpRight
                  size={17}
                />
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}