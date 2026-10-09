import {
  ArrowRight,
  Box,
  Brain,
  Cloud,
  Database,
  Layers3,
  Server,
  Settings,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { techStackData, type TechCategory } from '../../config/techStack'

import './tech-stack.css'

const categoryIcons = {
  frontend: Layers3,
  backend: Server,
  database: Database,
  infrastructure: Cloud,
  ai: Brain,
} satisfies Record<
  TechCategory['id'],
  typeof Layers3
>

const technologyMarks: Record<string, string> = {
  react: 'R',
  'react-native': 'RN',
  typescript: 'TS',

  node: 'N',
  nestjs: 'N',
  express: 'EX',

  postgresql: 'PG',
  mongodb: 'M',
  prisma: 'P',

  docker: 'D',
  redis: 'R',
  firebase: 'F',

  'ai-apis': 'AI',
  'machine-learning': 'ML',
  'local-ai': 'AI',
}

export function TechStack() {
  return (
    <section
      id="stack"
      className="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div
        className="tech-stack__grid"
        aria-hidden="true"
      />

      {/* HERO */}

      <div className="tech-stack__hero">

        <div className="tech-stack__hero-content">

          <motion.div
            className="tech-stack__eyebrow"
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
            {techStackData.eyebrow}
          </motion.div>

          <motion.h2
            id="tech-stack-title"
            className="tech-stack__title"
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
              {techStackData.title.line1}
            </span>

            <span className="tech-stack__title-accent">
              {techStackData.title.line2}
            </span>
          </motion.h2>

          <motion.p
            className="tech-stack__description"
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
              delay: 0.12,
            }}
          >
            {techStackData.description}
          </motion.p>

        </div>

        {/* CENTRAL SYSTEM VISUAL */}

        <div
          className="tech-stack__visual"
          aria-hidden="true"
        >
          <div className="tech-stack__visual-grid" />

          <div className="tech-stack__core">
            <div className="tech-stack__core-inner">
              <Box size={48} />
            </div>
          </div>

          <div className="tech-stack__connection tech-stack__connection--1" />
          <div className="tech-stack__connection tech-stack__connection--2" />
          <div className="tech-stack__connection tech-stack__connection--3" />
          <div className="tech-stack__connection tech-stack__connection--4" />

          <div className="tech-stack__visual-node tech-stack__visual-node--frontend">
            <Layers3 size={30} />
            <strong>FRONTEND</strong>
            <span>WEB & MOBILE<br />INTERFACES</span>
          </div>

          <div className="tech-stack__visual-node tech-stack__visual-node--backend">
            <Server size={30} />
            <strong>BACKEND</strong>
            <span>APIS &<br />BUSINESS LOGIC</span>
          </div>

          <div className="tech-stack__visual-node tech-stack__visual-node--database">
            <Database size={30} />
            <strong>DATABASE</strong>
            <span>DATA STORAGE<br />& MANAGEMENT</span>
          </div>

          <div className="tech-stack__visual-node tech-stack__visual-node--infra">
            <Cloud size={30} />
            <strong>INFRASTRUCTURE</strong>
            <span>DEPLOYMENT<br />& SCALING</span>
          </div>

          <div className="tech-stack__visual-node tech-stack__visual-node--ai">
            <Brain size={30} />
            <strong>AI</strong>
            <span>INTELLIGENCE<br />& AUTOMATION</span>
          </div>
        </div>

        <aside className="tech-stack__aside">

          <span>TECHNOLOGY</span>
          <span>ECOSYSTEM</span>

          <i />

          <strong>INTEGRATED</strong>
          <strong>MODERN</strong>
          <strong>SCALABLE</strong>
          <strong>PRODUCTION-READY</strong>

        </aside>

      </div>

      {/* CATEGORY CARDS */}

      <div className="tech-stack__categories">

        {techStackData.categories.map(
          (category, index) => {
            const Icon =
              categoryIcons[category.id]

            return (
              <motion.article
                key={category.id}
                className="tech-category"
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

                <div className="tech-category__header">

                  <span className="tech-category__number">
                    {category.number}
                  </span>

                  <span className="tech-category__line" />

                  <button
                    type="button"
                    className="tech-category__arrow"
                    aria-label={`Explore ${category.title}`}
                  >
                    <ArrowRight size={14} />
                  </button>

                </div>

                <div className="tech-category__title">
                  <h3>
                    {category.title}
                  </h3>
                </div>

                <p className="tech-category__description">
                  {category.description}
                </p>

                <div className="tech-category__technologies">

                  {category.technologies.map(
                    technology => (
                      <div
                        key={technology.id}
                        className="technology-card"
                      >
                        <div className="technology-card__icon">
                          {technologyMarks[
                            technology.id
                          ] ?? (
                            <Icon size={28} />
                          )}
                        </div>

                        <span>
                          {technology.name}
                        </span>
                      </div>
                    ),
                  )}

                </div>

                <div className="tech-category__footer">
                  // {category.footerLabel}
                </div>

              </motion.article>
            )
          },
        )}

      </div>

      {/* BOTTOM PHILOSOPHY */}

      <div className="tech-stack__bottom">

        <div className="tech-stack__philosophy">

          <div className="tech-stack__bottom-icon">
            <Box size={34} />
          </div>

          <div>
            <strong>
              {techStackData.philosophy.title}
            </strong>

            <p>
              {techStackData.philosophy.description}
            </p>
          </div>

        </div>

        <div className="tech-stack__summary">

          {techStackData.summary.map(
            item => (
              <div
                key={item.id}
                className="tech-stack__summary-item"
              >
                <strong>
                  {item.value}
                </strong>

                <span>
                  {item.label}
                </span>
              </div>
            ),
          )}

        </div>

        <div className="tech-stack__exploring">

          <div className="tech-stack__bottom-icon">
            <Settings size={34} />
          </div>

          <div>
            <strong>
              {techStackData.exploration.title}
            </strong>

            <p>
              {techStackData.exploration.description}
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}