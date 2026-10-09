import {
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { projectsData } from '../../config/projects'

import './featured-work.css'

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="featured-work"
      aria-labelledby="featured-work-title"
    >
      <div
        className="featured-work__grid"
        aria-hidden="true"
      />

      {/* HEADER */}

      <div className="featured-work__header">

        <div className="featured-work__eyebrow">
          <span />
          {projectsData.eyebrow}
        </div>

        <div className="featured-work__heading-row">

          <motion.h2
            id="featured-work-title"
            className="featured-work__title"
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
              {projectsData.title.line1}
            </span>

            <span>
              {projectsData.title.line2}
            </span>
          </motion.h2>

          <p className="featured-work__description">
            {projectsData.description}
          </p>

        </div>

      </div>

      {/* PROJECT GRID */}

      <div className="featured-work__projects">

        {projectsData.projects.map(
          (project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.55,
                delay: index * 0.08,
              }}
            >

              {/* PROJECT TOP */}

              <div className="project-card__top">

                <div className="project-card__number">
                  {project.number}
                </div>

                <span className="project-card__accent" />

                <span className="project-card__category">
                  {project.category}
                </span>

                <a
                  href={project.caseStudyUrl}
                  className="project-card__external"
                  aria-label={`Open ${project.name}`}
                >
                  <ExternalLink size={17} />
                </a>

              </div>

              {/* IMAGE */}

              <a
                href={project.caseStudyUrl}
                className="project-card__image-link"
                aria-label={`View ${project.name}`}
              >
                <div className="project-card__image">

                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                  />

                  <div className="project-card__image-overlay" />

                  <span className="project-card__image-corner project-card__image-corner--tl" />
                  <span className="project-card__image-corner project-card__image-corner--br" />

                </div>
              </a>

              {/* CONTENT */}

              <div className="project-card__content">

                <div className="project-card__name-row">

                  <span />

                  <h3>
                    {project.name}
                  </h3>

                </div>

                <p className="project-card__description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="project-card__technologies">

                  {project.technologies.map(
                    technology => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ),
                  )}

                </div>

                {/* ACTIONS */}

                <div className="project-card__actions">

                  <a
                    href={project.caseStudyUrl}
                    className="project-card__case-study"
                  >
                    VIEW CASE STUDY
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="project-card__github"
                  >
                    GITHUB
                    <ArrowRight size={16} />
                  </a>

                </div>

              </div>

            </motion.article>
          ),
        )}

      </div>
    </section>
  )
}