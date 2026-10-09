import {
  CircleCheck,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { experienceData } from '../../config/experience'

import './experience.css'

const stageIcons = {
  foundation: Code2,
  'full-stack': Layers3,
  'product-engineering': Rocket,
} as const

export function Experience() {
  return (
    <section
      id="experience"
      className="experience"
      aria-labelledby="experience-title"
    >
      <div
        className="experience__grid"
        aria-hidden="true"
      />

      {/* HEADER */}

      <div className="experience__header">

        <div className="experience__intro">

          <motion.div
            className="experience__eyebrow"
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
            {experienceData.eyebrow}
          </motion.div>

          <motion.h2
            id="experience-title"
            className="experience__title"
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
              {experienceData.title.line1}
            </span>

            <span className="experience__title-accent">
              {experienceData.title.line2}
            </span>
          </motion.h2>

          <p className="experience__description">
            {experienceData.description}
          </p>

          <div className="experience__side-notes">
            {experienceData.sideNotes.map(
              note => (
                <span key={note}>
                  /// {note}
                </span>
              ),
            )}
          </div>

        </div>

        {/* EXPERIENCE STAGES */}

        <div className="experience__stages">

          {experienceData.stages.map(
            (stage, index) => {
              const Icon = stageIcons[stage.id]

              return (
                <motion.article
                  key={stage.id}
                  className="experience-stage"
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >

                  <div className="experience-stage__heading">

                    <span className="experience-stage__number">
                      {stage.number}
                    </span>

                    <span className="experience-stage__line" />

                  </div>

                  <div className="experience-stage__year">
                    {stage.year}
                  </div>

                  <div className="experience-stage__title-row">
                    <h3>
                      {stage.title}
                    </h3>

                    <Icon
                      size={19}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="experience-stage__description">
                    {stage.description}
                  </p>

                  <div className="experience-stage__highlights">

                    {stage.highlights.map(
                      highlight => (
                        <div
                          key={highlight.id}
                          className="experience-stage__highlight"
                        >
                          <CircleCheck
                            size={13}
                          />

                          <span>
                            {highlight.text}
                          </span>
                        </div>
                      ),
                    )}

                  </div>

                </motion.article>
              )
            },
          )}

        </div>

      </div>

      {/* JOURNEY PATH */}

      <div
        className="experience__journey"
        aria-hidden="true"
      >
        <div className="experience__terrain">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <svg
          className="experience__path"
          viewBox="0 0 1400 330"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 285
              C100 285 135 290 190 265
              C245 240 220 180 300 155
              C380 130 395 240 470 210
              C545 180 580 125 665 155
              C750 185 760 225 850 195
              C940 165 930 110 1015 125
              C1100 140 1105 170 1175 125
              C1245 80 1270 45 1400 25
            "
          />

          <path
            className="experience__path-glow"
            d="
              M0 285
              C100 285 135 290 190 265
              C245 240 220 180 300 155
              C380 130 395 240 470 210
              C545 180 580 125 665 155
              C750 185 760 225 850 195
              C940 165 930 110 1015 125
              C1100 140 1105 170 1175 125
              C1245 80 1270 45 1400 25
            "
          />
        </svg>

        {experienceData.stages.map(
          (stage, index) => (
            <div
              key={stage.id}
              className={`experience__journey-point experience__journey-point--${index + 1}`}
            >
              <span className="experience__journey-dot" />

              <div>
                <strong>
                  {stage.title}
                </strong>

                <small>
                  {stage.number}
                </small>
              </div>
            </div>
          ),
        )}

      </div>

      {/* LOWER INFORMATION */}

      <div className="experience__details">

        {/* SKILLS */}

        <div className="experience__skills">

          <div className="experience__section-heading">
            <span />
            <h3>SKILLS EVOLUTION</h3>
          </div>

          <div className="experience__skill-groups">

            {experienceData.skillEvolution.map(
              group => (
                <div
                  key={group.id}
                  className="experience__skill-group"
                >

                  <strong>
                    {group.year}
                  </strong>

                  <span className="experience__skill-label">
                    {group.label}
                  </span>

                  {group.skills.map(
                    skill => (
                      <div
                        key={skill.id}
                        className="experience__skill"
                      >
                        <span>
                          {skill.name}
                        </span>

                        <div className="experience__skill-bar">
                          <i
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>
                      </div>
                    ),
                  )}

                </div>
              ),
            )}

          </div>

        </div>

        {/* MILESTONES */}

        <div className="experience__milestones">

          <div className="experience__section-heading">
            <span />
            <h3>KEY MILESTONES</h3>
          </div>

          <div className="experience__milestone-list">

            {experienceData.milestones.map(
              (milestone, index) => (
                <div
                  key={milestone.id}
                  className="experience__milestone"
                >

                  <span className="experience__milestone-dot">
                    {index + 1}
                  </span>

                  <span className="experience__milestone-period">
                    {milestone.period}
                  </span>

                  <span className="experience__milestone-text">
                    {milestone.text}
                  </span>

                </div>
              ),
            )}

          </div>

        </div>

        {/* NEXT */}

        <div className="experience__next">

          <div className="experience__section-heading">
            <span />
            <h3>WHAT'S NEXT</h3>
          </div>

          <div className="experience__next-list">

            {experienceData.next.map(
              item => (
                <div
                  key={item.id}
                  className="experience__next-item"
                >
                  <Sparkles size={14} />

                  <span>
                    {item.text}
                  </span>
                </div>
              ),
            )}

          </div>

        </div>

      </div>
    </section>
  )
}