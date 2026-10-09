import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  Database,
  Layers3,
  Lightbulb,
  Lock,
  Radio,
  ShieldCheck,
  UserRound,
  Users,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'

import type {
  CaseStudy as CaseStudyData,
} from '../../config/caseStudies'

import './case-study.css'

interface CaseStudyProps {
  data: CaseStudyData
}

const resultIcons = {
  lightning: Zap,
  users: Users,
  shield: ShieldCheck,
  chart: BarChart3,
}

const systemIcons = {
  client: UserRound,
  api: Layers3,
  auth: Lock,
  business: Lightbulb,
  database: Database,
  realtime: Radio,
}

export function CaseStudy({
  data,
}: CaseStudyProps) {
  return (
    <section
      className="case-study"
      aria-labelledby="case-study-title"
    >
      <div
        className="case-study__grid"
        aria-hidden="true"
      />

      {/* BACK TO WORK */}

      <div className="case-study__back">
        <a href="#work">
          <ArrowLeft size={17} />
          BACK TO WORK
        </a>
      </div>

      {/* HERO */}

      <div className="case-study__hero">

        <div className="case-study__hero-content">

          <div className="case-study__eyebrow">
            <span />
            CASE STUDY
          </div>

          <motion.h1
            id="case-study-title"
            className="case-study__title"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <span>
              {data.projectName.split(' ')[0]}
            </span>{' '}
            <em>
              {data.projectName
                .split(' ')
                .slice(1)
                .join(' ')}
            </em>
          </motion.h1>

          <div className="case-study__category">
            {data.category}
          </div>

          <p className="case-study__description">
            {data.description}
          </p>

          <div className="case-study__actions">

            <a
              href={data.liveDemoUrl}
              className="case-study__primary-button"
            >
              VIEW LIVE DEMO
              <ArrowRight size={17} />
            </a>

            <a
              href={data.githubUrl}
              className="case-study__secondary-button"
            >
              GITHUB
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="case-study__technologies">
            {data.technologies.map(
              technology => (
                <span key={technology}>
                  {technology}
                </span>
              ),
            )}
          </div>

        </div>

        <div className="case-study__hero-image">

          <img
            src={data.heroImage}
            alt={`${data.projectName} case study`}
          />

          <div className="case-study__hero-overlay" />

        </div>

        <aside className="case-study__meta">

          <div className="case-study__meta-heading">
            <span />
            PLATFORM OVERVIEW
          </div>

          {data.overviewTags.map(tag => (
            <span
                key={tag}
                className="case-study__meta-line"
            >
                // {tag}
            </span>
            ))}

          {data.modules.map(module => (
            <div
              key={module.id}
              className="case-study__module"
            >
              <strong>
                {module.value}
              </strong>

              <span>
                {module.label}
              </span>
            </div>
          ))}

          <span className="case-study__meta-line">
            REAL-TIME MATCHING
          </span>

          <span className="case-study__meta-line">
            MOBILE FIRST
          </span>

          <span className="case-study__meta-line">
            BUILT FOR SCALE
          </span>

        </aside>

      </div>

      {/* PROBLEM / APPROACH / RESULT */}

      <div className="case-study__sections">

        {/* PROBLEM */}

        <article className="case-study-panel">

          <div className="case-study-panel__heading">
            <strong>01</strong>
            <span />
            <h2>THE PROBLEM</h2>
          </div>

          <div className="problem-layout">

            <div className="case-study-image">
              <img
                src={data.problem.image}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="problem-points">

              {data.problem.points.map(
                point => (
                  <div key={point}>
                    <Check size={12} />
                    {point}
                  </div>
                ),
              )}

            </div>

          </div>

          <p>
            {data.problem.description}
          </p>

        </article>

        {/* APPROACH */}

        <article className="case-study-panel">

          <div className="case-study-panel__heading">
            <strong>02</strong>
            <span />
            <h2>THE APPROACH</h2>
          </div>

          <ul className="approach-list">
            {data.approach.items.map(
              item => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ),
            )}
          </ul>

          <p>
            {data.approach.description}
          </p>

        </article>

        {/* RESULT */}

        <article className="case-study-panel">

          <div className="case-study-panel__heading">
            <strong>03</strong>
            <span />
            <h2>THE RESULT</h2>
          </div>

          <div className="result-grid">

            {data.result.items.map(
              result => {
                const Icon =
                  resultIcons[result.icon]

                return (
                  <div
                    key={result.id}
                    className="result-card"
                  >
                    <Icon size={23} />

                    <span>
                      {result.title}
                    </span>
                  </div>
                )
              },
            )}

          </div>

          <p>
            {data.result.description}
          </p>

        </article>

      </div>

      {/* SYSTEM */}

      <div className="case-study__system">

        <div className="case-study-panel__heading">
          <strong>04</strong>
          <span />
          <h2>THE SYSTEM</h2>
        </div>

        <div className="system-flow">

          {data.system.nodes.map(
            (node, index) => {
              const Icon =
                systemIcons[node.icon]

              return (
                <div
                  key={node.id}
                  className="system-flow__group"
                >
                  <div className="system-node">

                    <Icon size={21} />

                    <div>
                      <strong>
                        {node.title}
                      </strong>

                      <span>
                        {node.subtitle}
                      </span>
                    </div>

                  </div>

                  {index <
                    data.system.nodes.length -
                      1 && (
                    <ArrowRight
                      className="system-flow__arrow"
                      size={18}
                    />
                  )}

                </div>
              )
            },
          )}

        </div>

        <span className="system-caption">
          SYSTEM ARCHITECTURE
        </span>

      </div>

      {/* TECHNOLOGY STACK */}

      <div className="case-study__stack">

        <div className="case-study-panel__heading">
          <strong>05</strong>
          <span />
          <h2>TECHNOLOGY STACK</h2>
        </div>

        <div className="case-study-stack-list">

          {data.technologies.map(
            technology => (
              <div
                key={technology}
                className="case-study-stack-item"
              >
                <div>
                  <Layers3 size={20} />
                </div>

                <span>
                  {technology}
                </span>
              </div>
            ),
          )}

        </div>

      </div>

      {/* FOOTER NAVIGATION */}

      <footer className="case-study__footer">

        <a
          href={data.previous.href}
          className="case-study__project-nav"
        >
          <span>
            <ArrowLeft size={19} />
          </span>

          <div>
            <small>
              PREVIOUS PROJECT
            </small>

            <strong>
              {data.previous.label}
            </strong>
          </div>
        </a>

        <a
          href="#work"
          className="case-study__back-center"
        >
          <Layers3 size={19} />
          BACK TO WORK
        </a>

        <a
          href={data.next.href}
          className="case-study__project-nav case-study__project-nav--next"
        >
          <div>
            <small>
              NEXT PROJECT
            </small>

            <strong>
              {data.next.label}
            </strong>
          </div>

          <span>
            <ArrowRight size={19} />
          </span>
        </a>

      </footer>

    </section>
  )
}