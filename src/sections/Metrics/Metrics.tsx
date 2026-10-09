import {
  BarChart3,
  Box,
  Folder,
  Layers3,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { metricsData } from '../../config/metrics'

import './metrics.css'

const metricIcons = {
  layers: Layers3,
  cube: Box,
  folder: Folder,
  chart: BarChart3,
} as const

export function Metrics() {
  return (
    <section
      id="metrics"
      className="metrics"
      aria-labelledby="metrics-title"
    >
      <div
        className="metrics-grid"
        aria-hidden="true"
      />

      {/* HERO */}

      <div className="metrics-hero">

        <div className="metrics-hero__content">

          <motion.div
            className="metrics-eyebrow"
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

            {metricsData.eyebrow}
          </motion.div>

          <motion.h2
            id="metrics-title"
            className="metrics-title"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span>
              {metricsData.title.line1}
            </span>

            <span>
              BY{' '}
              <em>
                NUMBERS.
              </em>
            </span>
          </motion.h2>

          <motion.p
            className="metrics-description"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
          >
            {metricsData.description}
          </motion.p>

        </div>

        <div
          className="metrics-globe"
          aria-hidden="true"
        >
          <div className="metrics-globe__sphere">
            <div className="metrics-globe__land" />

            <div className="metrics-globe__grid metrics-globe__grid--vertical" />
            <div className="metrics-globe__grid metrics-globe__grid--horizontal" />

            <span className="metrics-globe__point point-1" />
            <span className="metrics-globe__point point-2" />
            <span className="metrics-globe__point point-3" />
            <span className="metrics-globe__point point-4" />
            <span className="metrics-globe__point point-5" />
          </div>

          <div className="metrics-orbit metrics-orbit--1" />
          <div className="metrics-orbit metrics-orbit--2" />
          <div className="metrics-orbit metrics-orbit--3" />

          <div className="metrics-node metrics-node--learn">
            <strong>LEARN</strong>
            <span>NEW TECHNOLOGIES</span>
          </div>

          <div className="metrics-node metrics-node--build">
            <strong>BUILD</strong>
            <span>IDEAS INTO PRODUCTS</span>
          </div>

          <div className="metrics-node metrics-node--scale">
            <strong>SCALE</strong>
            <span>FOR IMPACT</span>
          </div>

          <div className="metrics-node metrics-node--improve">
            <strong>IMPROVE</strong>
            <span>EVERY DAY</span>
          </div>
        </div>

      </div>

      {/* METRIC CARDS */}

      <div className="metrics-cards">

        {metricsData.metrics.map(
          (metric, index) => {
            const Icon =
              metricIcons[metric.icon]

            return (
              <motion.article
                key={metric.id}
                className="metric-card"
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
                <div className="metric-card__top">

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                  />

                  <span>
                    {String(index + 1).padStart(
                      2,
                      '0',
                    )}
                  </span>

                </div>

                <div className="metric-card__value">
                  {metric.value}
                </div>

                <div className="metric-card__label">
                  {metric.label}
                </div>

                <div className="metric-card__divider" />

                <p>
                  {metric.description}
                </p>

                <div
                  className="metric-card__bars"
                  aria-hidden="true"
                >
                  {Array.from({
                    length: 7,
                  }).map((_, barIndex) => (
                    <span
                      key={barIndex}
                      style={{
                        height: `${25 + barIndex * 9 + ((index + barIndex) % 3) * 8}%`,
                      }}
                    />
                  ))}
                </div>

              </motion.article>
            )
          },
        )}

      </div>

      {/* LOWER ANALYTICS */}

      <div className="metrics-analytics">

        {/* GLOBAL REACH */}

        <article className="metrics-panel metrics-panel--reach">

          <div className="metrics-panel__header">
            <span />
            <h3>
              {metricsData.globalReach.title}
            </h3>
          </div>

          <div className="reach-content">

            <div className="reach-map">
              <div className="world-map">
                <span className="map-dot map-dot--1" />
                <span className="map-dot map-dot--2" />
                <span className="map-dot map-dot--3" />
                <span className="map-dot map-dot--4" />
                <span className="map-dot map-dot--5" />
              </div>
            </div>

            <div className="reach-stats">

              <div>
                <strong>
                  {metricsData.globalReach.continents}
                </strong>

                <span>
                  {metricsData.globalReach.continentsLabel}
                </span>
              </div>

              <div>
                <strong>
                  {metricsData.globalReach.timeZones}
                </strong>

                <span>
                  {metricsData.globalReach.timeZonesLabel}
                </span>
              </div>

              <div>
                <strong>
                  {metricsData.globalReach.location}
                </strong>

                <span>
                  {metricsData.globalReach.locationLabel}
                </span>
              </div>

            </div>

          </div>

        </article>

        {/* GROWTH */}

        <article className="metrics-panel">

          <div className="metrics-panel__header">
            <span />
            <h3>
              {metricsData.growth.title}
            </h3>
          </div>

          <div className="growth-chart">

            <div className="growth-y-axis">
              <span>20</span>
              <span>15</span>
              <span>10</span>
              <span>5</span>
              <span>0</span>
            </div>

            <div className="growth-bars">

              {metricsData.growth.points.map(
                point => (
                  <div
                    key={point.year}
                    className="growth-column"
                  >
                    <div className="growth-bar-group">

                      <span
                        className="growth-bar"
                        style={{
                          height: `${point.value * 3}px`,
                        }}
                      />

                      <span
                        className="growth-bar growth-bar--secondary"
                        style={{
                          height: `${Math.max(
                            point.value * 2.1,
                            20,
                          )}px`,
                        }}
                      />

                    </div>

                    <small>
                      {point.year}
                    </small>
                  </div>
                ),
              )}

            </div>

          </div>

        </article>

        {/* FOCUS */}

        <article className="metrics-panel">

          <div className="metrics-panel__header">
            <span />
            <h3>FOCUS AREAS</h3>
          </div>

          <div className="focus-list">

            {metricsData.focusAreas.map(
              area => (
                <div
                  key={area.id}
                  className="focus-row"
                >
                  <span className="focus-row__label">
                    {area.label}
                  </span>

                  <div className="focus-row__track">
                    <span
                      style={{
                        width: `${area.percentage}%`,
                      }}
                    />
                  </div>

                  <span className="focus-row__value">
                    {area.percentage}%
                  </span>
                </div>
              ),
            )}

          </div>

        </article>

      </div>

    </section>
  )
}