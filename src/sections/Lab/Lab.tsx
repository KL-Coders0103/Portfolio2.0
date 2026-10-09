import {
  ArrowUpRight,
  Box,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { labData } from '../../config/lab'

import './lab.css'

export function Lab() {
  return (
    <section
      id="lab"
      className="lab"
      aria-labelledby="lab-title"
    >
      <div
        className="lab__grid"
        aria-hidden="true"
      />

      {/* HERO */}

      <div className="lab__hero">

        <div className="lab__hero-main">

          <motion.div
            className="lab__eyebrow"
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
            {labData.eyebrow}
          </motion.div>

          <motion.h2
            id="lab-title"
            className="lab__title"
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
              {labData.title.line1.replace(
                '.',
                '',
              )}
            </span>

            <em>.</em>
          </motion.h2>

          <p className="lab__subtitle">
            {labData.subtitle}
          </p>

        </div>

        <div className="lab__hero-description">

          <p>
            {labData.description}
          </p>

          <div className="lab__hero-flow">
            <span>EXPERIMENT</span>
            <ArrowUpRight size={13} />
            <span>LEARN</span>
            <ArrowUpRight size={13} />
            <span>BUILD</span>
            <ArrowUpRight size={13} />
            <span>REPEAT</span>
          </div>

        </div>

        <div
          className="lab__hero-visual"
          aria-hidden="true"
        >
          <div className="lab__hero-core">
            <Box size={54} />
          </div>

          <div className="lab__hero-ring lab__hero-ring--one" />
          <div className="lab__hero-ring lab__hero-ring--two" />
          <div className="lab__hero-ring lab__hero-ring--three" />

          <span className="lab__hero-node lab__hero-node--one" />
          <span className="lab__hero-node lab__hero-node--two" />
          <span className="lab__hero-node lab__hero-node--three" />
          <span className="lab__hero-node lab__hero-node--four" />
        </div>

        <aside className="lab__hero-meta">
          <span>IDEAS</span>
          <span>PROTOTYPES</span>
          <span>EXPERIMENTS</span>
          <span>OPEN SOURCE</span>
        </aside>

      </div>

      {/* EXPERIMENT GRID */}

      <div className="lab__experiments">

        {labData.experiments.map(
          (experiment, index) => (
            <motion.article
              key={experiment.id}
              className="lab-card"
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >

              <div className="lab-card__header">

                <div className="lab-card__number">
                  <strong>
                    {experiment.number}
                  </strong>

                  <span />
                </div>

                <a
                  href={`#lab-${experiment.id}`}
                  aria-label={`Open ${experiment.title}`}
                  className="lab-card__open"
                >
                  <ArrowUpRight size={17} />
                </a>

              </div>

              <h3>
                {experiment.title}
              </h3>

              <p className="lab-card__description">
                {experiment.description}
              </p>

              <div className="lab-card__technologies">
                {experiment.technologies.map(
                  technology => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ),
                )}
              </div>

              <div className="lab-card__image">

                <img
                  src={experiment.image}
                  alt=""
                  loading="lazy"
                />

                <div className="lab-card__image-overlay" />

              </div>

            </motion.article>
          ),
        )}

      </div>

      {/* EXPLORATION / COLLABORATION */}

      <div className="lab__bottom">

        <div className="lab__exploring">

          <div className="lab__bottom-icon">
            <Box size={34} />
          </div>

          <div className="lab__exploring-content">

            <h3>
              {labData.exploration.title}
            </h3>

            <div className="lab__timeline">

              {labData.exploration.items.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className={`lab__timeline-item ${
                      index === 0
                        ? 'is-active'
                        : ''
                    }`}
                  >

                    <span className="lab__timeline-dot" />

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      {item.description}
                    </small>

                  </div>
                ),
              )}

            </div>

          </div>

        </div>

        <div className="lab__collaboration">

          <div className="lab__bottom-icon">
            <Users size={34} />
          </div>

          <div>
            <h3>
              {labData.collaboration.title}
            </h3>

            <p>
              {labData.collaboration.description}
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}