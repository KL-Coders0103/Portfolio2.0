import { ArrowRight, Box, Users } from 'lucide-react'
import { motion } from 'framer-motion'

import { philosophyData } from '../../config/philosophy'

import './philosophy.css'

const principleIcons = {
  purpose: 'target',
  scale: Box,
  humans: Users,
} as const

export function Philosophy() {
  return (
    <section
      id="about"
      className="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div
        className="philosophy-grid"
        aria-hidden="true"
      />

      <div className="philosophy-container">

        {/* HEADER / MAIN STATEMENT */}

        <div className="philosophy-intro">

          <motion.div
            className="philosophy-eyebrow"
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

            {philosophyData.eyebrow}
          </motion.div>

          <motion.h2
            id="philosophy-title"
            className="philosophy-title"
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
              duration: 0.7,
            }}
          >
            <span>
              {philosophyData.title.line1}
            </span>

            <span>
              {philosophyData.title.line2}
            </span>

            <span className="philosophy-title__accent">
              {philosophyData.title.line3}
            </span>

            <span className="philosophy-title__accent">
              {philosophyData.title.line4}
            </span>
          </motion.h2>

          <motion.p
            className="philosophy-description"
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.6,
              delay: 0.15,
            }}
          >
            {philosophyData.description}
          </motion.p>

        </div>

        {/* PORTRAIT / VISUAL */}

        <motion.div
          className="philosophy-visual"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="philosophy-portrait">

            <div className="philosophy-portrait__ring" />

            <img
              src="/images/philosophy-portrait.webp"
              alt="Portrait"
              loading="lazy"
            />

            <div className="philosophy-portrait__overlay" />

          </div>
        </motion.div>

      </div>

      {/* PRINCIPLES */}

      <div className="philosophy-principles">

        {philosophyData.principles.map(
          (principle, index) => {
            const Icon =
              principle.id === 'purpose'
                ? null
                : principleIcons[
                    principle.id as
                      | 'scale'
                      | 'humans'
                  ]

            return (
              <motion.article
                key={principle.id}
                className="philosophy-card"
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="philosophy-card__heading">

                  <span className="philosophy-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="philosophy-card__line" />

                  <h3>
                    {principle.title}
                  </h3>

                  <div className="philosophy-card__icon">
                    {Icon ? (
                      <Icon size={28} />
                    ) : (
                      <span>◎</span>
                    )}
                  </div>

                </div>

                <div className="philosophy-card__image">
                  <img
                    src={principle.image}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <p className="philosophy-card__description">
                  {principle.description}
                </p>

                <div className="philosophy-card__flow">
                  <span />

                  {principle.flow.map(
                    (item, flowIndex) => (
                      <span
                        key={item}
                        className="philosophy-card__flow-item"
                      >
                        {item}

                        {flowIndex <
                          principle.flow.length -
                            1 && (
                          <ArrowRight
                            size={12}
                          />
                        )}
                      </span>
                    ),
                  )}
                </div>

              </motion.article>
            )
          },
        )}

      </div>

    </section>
  )
}