import {
  ArrowRight,
  BriefcaseBusiness,
  Coffee,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Users,
} from 'lucide-react'

import { footerData } from '../../config/footer'

import './footer.css'

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

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.04 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 5.04 0ZM.27 8.1h4.75V24H.27V8.1ZM7.86 8.1h4.55v2.17h.07c.63-1.2 2.18-2.47 4.49-2.47 4.8 0 5.69 3.16 5.69 7.27V24h-4.75v-7.91c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.05-3.03 4.18V24H7.86V8.1Z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.33l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.75h1.73L8.29 4.14H6.43L17.8 19.75Z" />
    </svg>
  )
}

function YouTubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.49 3.5 12 3.5 12 3.5s-7.49 0-9.37.56A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.88.56 9.37.56 9.37.56s7.49 0 9.37-.56a3.02 3.02 0 0 0 2.13-2.14c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.6 15.57V8.43L15.75 12 9.6 15.57Z" />
    </svg>
  )
}

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
} as const

const contactIcons = {
  email: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  location: MapPin,
} as const

const availabilityIcons = {
  fullTime: BriefcaseBusiness,
  freelance: Users,
  talks: Lightbulb,
} as const

export function Footer() {
  return (
    <footer
      id="footer"
      className="portfolio-footer"
    >
      {/* BACKGROUND */}

      <div
        className="portfolio-footer__grid"
        aria-hidden="true"
      />

      {/* CTA / HERO */}

      <section className="portfolio-footer__hero">

        <div className="portfolio-footer__hero-content">

          <div className="portfolio-footer__eyebrow">
            <span />
            {footerData.eyebrow}
          </div>

          <h2 className="portfolio-footer__title">
            <span>{footerData.title.line1}</span>
            <span>{footerData.title.line2}</span>
          </h2>

          <p className="portfolio-footer__description">
            {footerData.description}
          </p>

        </div>

        <div className="portfolio-footer__hero-action">

          <div className="portfolio-footer__signature">
            Ideas
            <br />
            to
            <br />
            Impact
          </div>

          <a
            href={footerData.cta.href}
            className="portfolio-footer__cta"
          >
            <Mail size={21} />

            <span>{footerData.cta.label}</span>

            <ArrowRight size={18} />
          </a>

          <p>
            {footerData.availabilityMessage}
          </p>

        </div>

        {/* Decorative visual reconstructed with CSS */}

        <div
          className="portfolio-footer__visual"
          aria-hidden="true"
        >
          <div className="portfolio-footer__sun" />

          <div className="portfolio-footer__mountains">
            <span />
            <span />
            <span />
          </div>

          <div className="portfolio-footer__person">
            <div className="portfolio-footer__person-head" />
            <div className="portfolio-footer__person-body" />
          </div>

          <div className="portfolio-footer__visual-words">
            BUILD
            <br />
            LEARN
            <br />
            EXPLORE
            <br />
            REPEAT
          </div>
        </div>

      </section>

      {/* INFORMATION GRID */}

      <section className="portfolio-footer__information">

        {/* BRAND */}

        <div className="portfolio-footer__brand-column">

          <a
            href="#top"
            className="portfolio-footer__logo"
          >
            ALEX<span>.M</span>
          </a>

          <p>
            A curious developer who loves building digital
            products, learning new technologies and solving
            real-world problems.
          </p>

          <div className="portfolio-footer__socials">

            {footerData.socialLinks.map(social => {
              const Icon = socialIcons[social.icon]

              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="portfolio-footer__social"
                >
                  <Icon size={19} />
                </a>
              )
            })}

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="portfolio-footer__column">

          <div className="portfolio-footer__column-heading">
            <span />
            <strong>QUICK LINKS</strong>
          </div>

          <nav
            className="portfolio-footer__links"
            aria-label="Footer navigation"
          >
            {footerData.quickLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
              >
                <span>{link.label}</span>

                {link.screen && (
                  <small>{link.screen}</small>
                )}
              </a>
            ))}
          </nav>

        </div>

        {/* CONTACT */}

        <div className="portfolio-footer__column">

          <div className="portfolio-footer__column-heading">
            <span />
            <strong>LET'S CONNECT</strong>
          </div>

          <div className="portfolio-footer__contact-list">

            {footerData.contact.map(item => {
              const Icon = contactIcons[item.icon]

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="portfolio-footer__contact"
                >
                  <Icon size={24} />

                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.description}</span>
                  </div>
                </a>
              )
            })}

          </div>

        </div>

        {/* AVAILABILITY */}

        <div className="portfolio-footer__column">

          <div className="portfolio-footer__column-heading">
            <span />
            <strong>CURRENTLY</strong>
          </div>

          <div className="portfolio-footer__currently">

            <div className="portfolio-footer__available">
              <i />
              <span>Available for Opportunities</span>
            </div>

            {footerData.availability.map(item => {
              const Icon = availabilityIcons[item.icon]

              return (
                <div
                  key={item.id}
                  className="portfolio-footer__availability-item"
                >
                  <Icon size={25} />

                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              )
            })}

          </div>

        </div>

      </section>

      {/* COPYRIGHT */}

      <section className="portfolio-footer__copyright">

        <span>
          © {footerData.copyright.year} ALEX.M.
          &nbsp; {footerData.copyright.text}
        </span>

        <div className="portfolio-footer__words">
          {footerData.signature.words.map(
            (word, index) => (
              <span key={word}>
                {word}

                {index <
                  footerData.signature.words.length - 1 && (
                  <b>|</b>
                )}
              </span>
            ),
          )}
        </div>

        <span className="portfolio-footer__made-with">
          {footerData.signature.madeWith}{' '}
          <Heart size={13} /> {footerData.signature.ending}{' '}
          <Coffee size={14} />
        </span>

      </section>

    </footer>
  )
}