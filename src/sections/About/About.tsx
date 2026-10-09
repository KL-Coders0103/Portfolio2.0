import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { aboutData } from '../../config/about'

import './about.css'

const profileIcons = {
  code: Code2,
  education: GraduationCap,
  location: MapPin,
  learning: Lightbulb,
} as const

const driverIcons = {
  target: Target,
  learning: Lightbulb,
  impact: Users,
  growth: Rocket,
} as const

const interestIcons = [
  '🎮',
  '▣',
  '✈',
  '▤',
  '⌁',
  '◉',
  '◌',
]

export function About() {
  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
    >
      <div
        className="about__grid"
        aria-hidden="true"
      />

      {/* HERO */}

      <div className="about__hero">

        {/* LEFT */}

        <div className="about__intro">

          <motion.div
            className="about__eyebrow"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span />
            {aboutData.eyebrow}
          </motion.div>

          <motion.h2
            id="about-title"
            className="about__title"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <span>
              {aboutData.title.line1}
            </span>

            <span className="about__title-accent">
              {aboutData.title.line2}
            </span>
          </motion.h2>

          <p className="about__description">
            {aboutData.description}
          </p>

          <div className="about__actions">

            <a
              href={aboutData.primaryAction.href}
              className="about__button about__button--primary"
            >
              {aboutData.primaryAction.label}
              <ArrowRight size={16} />
            </a>

            <a
              href={aboutData.secondaryAction.href}
              className="about__button about__button--secondary"
            >
              {aboutData.secondaryAction.label}
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

        {/* IDENTITY */}

        <div className="about__identity">

          <div className="about__identity-line" />

          {aboutData.identityNotes.map(
            note => (
              <span key={note}>
                {note}
              </span>
            ),
          )}

          <div className="about__identity-line" />

        </div>

        {/* VISUAL */}

        <div
          className="about__visual"
          aria-hidden="true"
        >
          <div className="about__visual-grid" />

          <div className="about__visual-ring about__visual-ring--one" />
          <div className="about__visual-ring about__visual-ring--two" />

          <div className="about__visual-core">
            <Code2 size={48} />
          </div>

          <div className="about__visual-person">
            <div className="about__person-head" />
            <div className="about__person-body" />
          </div>

          <div className="about__visual-orbit about__visual-orbit--one" />
          <div className="about__visual-orbit about__visual-orbit--two" />

          {aboutData.handwriting.map(
            (word, index) => (
              <span
                key={word}
                className={`about__handwriting about__handwriting--${index + 1}`}
              >
                {word}
              </span>
            ),
          )}

        </div>

        {/* PROFILE */}

        <div className="about__profile">

          {aboutData.profileCards.map(
            card => {
              const Icon =
                profileIcons[
                  card.icon as keyof typeof profileIcons
                ]

              return (
                <article
                  key={card.id}
                  className="about__profile-card"
                >

                  <div className="about__profile-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <strong>
                      {card.value}
                    </strong>

                    <span>
                      {card.label}
                    </span>

                    <small>
                      {card.description}
                    </small>
                  </div>

                </article>
              )
            },
          )}

        </div>

        {/* INTERESTS */}

        <aside className="about__interests">

          <h3>
            INTERESTS
            <br />
            BEYOND CODE
          </h3>

          <div className="about__interest-list">

            {aboutData.interests.map(
              (interest, index) => (
                <div
                  key={interest}
                  className="about__interest"
                >
                  <span>
                    {interestIcons[index] ?? '◌'}
                  </span>

                  <strong>
                    {interest}
                  </strong>
                </div>
              ),
            )}

          </div>

        </aside>

      </div>

      {/* LOWER CONTENT */}

      <div className="about__details">

        {/* STORY */}

        <article className="about__story">

          <div className="about__section-heading">
            <span />
            <h3>
              01
              <b>MY STORY</b>
            </h3>

            <BookOpen size={20} />
          </div>

          <div className="about__story-content">

            {aboutData.story.paragraphs.map(
              paragraph => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}

          </div>

          <blockquote>
            <span>“</span>

            <p>
              {aboutData.story.quote}
            </p>
          </blockquote>

        </article>

        {/* DRIVERS */}

        <article className="about__drivers">

          <div className="about__section-heading">
            <span />
            <h3>
              02
              <b>WHAT DRIVES ME</b>
            </h3>

            <Lightbulb size={20} />
          </div>

          <div className="about__driver-grid">

            {aboutData.drivers.map(
              driver => {
                const Icon =
                  driverIcons[driver.icon]

                return (
                  <div
                    key={driver.id}
                    className="about__driver"
                  >

                    <Icon size={30} />

                    <strong>
                      {driver.title}
                    </strong>

                    <p>
                      {driver.description}
                    </p>

                  </div>
                )
              },
            )}

          </div>

        </article>

        {/* QUICK FACTS */}

        <article className="about__facts">

          <div className="about__section-heading">
            <span />
            <h3>
              03
              <b>QUICK FACTS</b>
            </h3>

            <BriefcaseBusiness size={20} />
          </div>

          <div className="about__fact-list">

            {aboutData.quickFacts.map(
              fact => (
                <div
                  key={fact.id}
                  className="about__fact"
                >
                  <span>
                    {fact.label}
                  </span>

                  <strong>
                    {fact.value}
                  </strong>
                </div>
              ),
            )}

          </div>

        </article>

      </div>
    </section>
  )
}