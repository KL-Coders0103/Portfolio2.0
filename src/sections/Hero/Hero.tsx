import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { heroData } from '../../config/hero'
import { MagneticButton } from '../../components/common/MagneticButton'
import { HeroSystem } from './HeroSystem'

import './hero.css'

export function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* Background grid */}
      <div
        className="hero-grid"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="hero-glow"
        aria-hidden="true"
      />

      <div className="hero-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span
              className="hero-eyebrow__line"
              aria-hidden="true"
            />

            <span>
              {heroData.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero-title"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
            }}
          >
            <span>
              {heroData.title.line1}
            </span>

            <span>
              {heroData.title.line2}
            </span>

            <span className="hero-title__accent">
              {heroData.title.line3}
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
          >
            {heroData.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.28,
            }}
          >
            <MagneticButton
              href={heroData.primaryAction.href}
            >
              <span>
                {heroData.primaryAction.label}
              </span>

              <ArrowRight size={17} />
            </MagneticButton>

            <MagneticButton
              href={heroData.secondaryAction.href}
              variant="secondary"
            >
              {heroData.secondaryAction.label}
            </MagneticButton>
          </motion.div>

        </div>

        {/* =================================================
            RIGHT SYSTEM VISUALIZATION
        ================================================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          <HeroSystem />
        </motion.div>

      </div>

      {/* =================================================
          BOTTOM INFORMATION STRIP
      ================================================= */}

      <div className="hero-stats">

        {heroData.stats.map(stat => (
          <div
            key={stat.id}
            className="hero-stat"
          >
            <span className="hero-stat__label">
              {stat.label}
            </span>

            <strong className="hero-stat__value">
              {stat.value}
            </strong>
          </div>
        ))}

      </div>

    </section>
  )
}