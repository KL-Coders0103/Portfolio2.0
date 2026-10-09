import {
  Brain,
  Cloud,
  Database,
  Layers3,
  Server,
  Smartphone,
} from 'lucide-react'

import { heroData } from '../../config/hero'

const icons = {
  web: Layers3,
  mobile: Smartphone,
  backend: Server,
  ai: Brain,
  database: Database,
  cloud: Cloud,
} as const

type SystemGroupId = keyof typeof icons

export function HeroSystem() {
  return (
    <div className="hero-system">

      {/* Background technical grid */}

      <div
        className="system-grid"
        aria-hidden="true"
      />

      {/* Orbit rings */}

      <div
        className="system-orbit system-orbit--one"
        aria-hidden="true"
      />

      <div
        className="system-orbit system-orbit--two"
        aria-hidden="true"
      />

      <div
        className="system-orbit system-orbit--three"
        aria-hidden="true"
      />

      {/* Central globe */}

      <div className="system-globe">

        <div className="system-globe__glow" />

        <div className="system-globe__core" />

        <span className="globe-line globe-line--1" />
        <span className="globe-line globe-line--2" />
        <span className="globe-line globe-line--3" />
        <span className="globe-line globe-line--4" />

        <span className="globe-node globe-node--1" />
        <span className="globe-node globe-node--2" />
        <span className="globe-node globe-node--3" />
        <span className="globe-node globe-node--4" />

      </div>

      {/* Technology cards */}

      {heroData.systemGroups.map(group => {

        const Icon =
          icons[group.id as SystemGroupId]

        return (
          <article
            key={group.id}
            className={`system-card system-card--${group.id}`}
          >

            <div className="system-card__header">

              <span className="system-card__icon">
                <Icon size={18} />
              </span>

              <span className="system-card__title">
                {group.title}
              </span>

            </div>

            <div className="system-card__technologies">

              {group.technologies.map(
                technology => (
                  <span key={technology}>
                    {technology}
                  </span>
                ),
              )}

            </div>

          </article>
        )
      })}

      {/* Connection points */}

      <span
        className="system-connection system-connection--1"
        aria-hidden="true"
      />

      <span
        className="system-connection system-connection--2"
        aria-hidden="true"
      />

      <span
        className="system-connection system-connection--3"
        aria-hidden="true"
      />

      <span
        className="system-connection system-connection--4"
        aria-hidden="true"
      />

      <span
        className="system-connection system-connection--5"
        aria-hidden="true"
      />

      <span
        className="system-connection system-connection--6"
        aria-hidden="true"
      />

    </div>
  )
}