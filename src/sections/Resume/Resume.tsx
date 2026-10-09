import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  UserRound,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { resumeData } from '../../config/resume'

import './resume.css'

const profileIcons = {
  location: MapPin,
  education: GraduationCap,
  work: BriefcaseBusiness,
  email: Mail,
} as const

const quickLinkIcons = {
  email: Mail,
  linkedin: 'in',
  github: 'GH',
  resume: Download,
  calendar: CalendarDays,
} as const

export function Resume() {
  return (
    <section
      id="resume"
      className="resume"
      aria-labelledby="resume-title"
    >
      <div
        className="resume__grid"
        aria-hidden="true"
      />

      {/* TOP */}

      <div className="resume__hero">

        {/* INTRO */}

        <div className="resume__intro">

          <div className="resume__eyebrow">
            <span />
            {resumeData.eyebrow}
          </div>

          <motion.h2
            id="resume-title"
            className="resume__title"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span>
              {resumeData.title.line1}
            </span>

            <span className="resume__title-accent">
              {resumeData.title.line2}
            </span>
          </motion.h2>

          <p className="resume__description">
            {resumeData.description}
          </p>

          <div className="resume__actions">

            <a
              href={resumeData.actions.download.href}
              className="resume__button resume__button--primary"
            >
              <span>
                {resumeData.actions.download.label}
              </span>

              <ArrowRight size={16} />
            </a>

            <a
              href={resumeData.actions.online.href}
              className="resume__button resume__button--secondary"
            >
              <span>
                {resumeData.actions.online.label}
              </span>

              <ExternalLink size={15} />
            </a>

          </div>

          <div className="resume__formats">
            {resumeData.resumeFormats.map(
              format => (
                <span key={format}>
                  <Code2 size={11} />
                  {format}
                </span>
              ),
            )}
          </div>

        </div>

        {/* PROFILE VISUAL */}

        <div className="resume__portrait">

          <div className="resume__portrait-grid" />

          <div className="resume__portrait-ring resume__portrait-ring--one" />
          <div className="resume__portrait-ring resume__portrait-ring--two" />

          <div className="resume__portrait-person">
            <div className="resume__portrait-head" />
            <div className="resume__portrait-body" />
          </div>

          <div className="resume__portrait-copy">
            <strong>
              {resumeData.profile.name}
            </strong>

            <span>
              {resumeData.profile.role}
            </span>

            <span>
              {resumeData.profile.secondaryRole}
            </span>

            <span>
              {resumeData.profile.tertiaryRole}
            </span>
          </div>

          <div className="resume__portrait-note">
            <span>Build</span>
            <span>Learn</span>
            <span>Explore</span>
            <span>Repeat</span>
          </div>

        </div>

        {/* PROFILE INFO */}

        <div className="resume__profile">

          {resumeData.profileCards.map(
            card => {
              const Icon =
                profileIcons[
                  card.icon as keyof typeof profileIcons
                ]

              return (
                <article
                  key={card.id}
                  className="resume__profile-card"
                >
                  <div className="resume__profile-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <small>
                      {card.label}
                    </small>

                    <strong>
                      {card.value}
                    </strong>

                    <span>
                      {card.description}
                    </span>
                  </div>
                </article>
              )
            },
          )}

        </div>

        {/* QUICK LINKS */}

        <aside className="resume__quick-links">

          <h3>
            QUICK LINKS
          </h3>

          {resumeData.quickLinks.map(link => {
  const Icon =
    quickLinkIcons[
      link.icon as keyof typeof quickLinkIcons
    ]

  const isBrandIcon =
    typeof Icon === 'string'

  return (
    <a
      key={link.id}
      href={link.href}
      className="resume__quick-link"
    >
      {isBrandIcon ? (
        <span className="resume__brand-icon">
          {Icon}
        </span>
      ) : (
        <Icon size={17} />
      )}

      <span>
        {link.label}
      </span>
    </a>
  )
})}

          <div className="resume__collaboration">
            {resumeData.collaborationMessage.map(
              line => (
                <span key={line}>
                  {line}
                </span>
              ),
            )}
          </div>

        </aside>

      </div>

      {/* LOWER DATA */}

      <div className="resume__details">

        {/* EDUCATION */}

        <article className="resume__panel">

          <div className="resume__panel-heading">
            <span />
            <h3>
              01
              <b>EDUCATION</b>
            </h3>
            <GraduationCap size={19} />
          </div>

          <div className="resume__timeline">

            {resumeData.education.map(
              item => (
                <div
                  key={item.id}
                  className="resume__timeline-item"
                >
                  <span className="resume__timeline-dot" />

                  <div>
                    <small>
                      {item.period}
                    </small>

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.organization}
                    </span>

                    {item.description && (
                      <p>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ),
            )}

          </div>

        </article>

        {/* EXPERIENCE */}

        <article className="resume__panel">

          <div className="resume__panel-heading">
            <span />
            <h3>
              02
              <b>EXPERIENCE</b>
            </h3>
            <BriefcaseBusiness size={19} />
          </div>

          <div className="resume__timeline">

            {resumeData.experience.map(
              item => (
                <div
                  key={item.id}
                  className="resume__timeline-item"
                >
                  <span className="resume__timeline-dot" />

                  <div>
                    <small>
                      {item.period}
                    </small>

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.organization}
                    </span>

                    {item.details && (
                      <ul>
                        {item.details.map(
                          detail => (
                            <li key={detail}>
                              {detail}
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              ),
            )}

          </div>

        </article>

        {/* SKILLS */}

        <article className="resume__panel">

          <div className="resume__panel-heading">
            <span />
            <h3>
              03
              <b>SKILLS</b>
            </h3>
            <Code2 size={19} />
          </div>

          <div className="resume__skills">

            {resumeData.skills.map(
              skill => (
                <div
                  key={skill.id}
                  className="resume__skill"
                >
                  <span>
                    {skill.name}
                  </span>

                  <div className="resume__skill-bar">
                    <i
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>

                  <small>
                    {skill.level}%
                  </small>
                </div>
              ),
            )}

          </div>

        </article>

        {/* CERTIFICATIONS */}

        <article className="resume__panel">

          <div className="resume__panel-heading">
            <span />
            <h3>
              04
              <b>CERTIFICATIONS</b>
            </h3>
            <UserRound size={19} />
          </div>

          <div className="resume__certifications">

            {resumeData.certifications.map(
              certification => (
                <div
                  key={certification.id}
                  className="resume__certification"
                >
                  <div>
                    <strong>
                      {certification.name}
                    </strong>

                    <span>
                      {certification.issuer}
                    </span>
                  </div>

                  <small>
                    {certification.year}
                  </small>
                </div>
              ),
            )}

          </div>

          <button
            type="button"
            className="resume__more-certifications"
          >
            {resumeData.certificationsMoreLabel}
            <ArrowRight size={14} />
          </button>

        </article>

      </div>

    </section>
  )
}