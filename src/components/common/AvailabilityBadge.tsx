import { siteConfig } from '../../config/site'

export function AvailabilityBadge() {
  if (!siteConfig.availability.available) {
    return null
  }

  return (
    <div className="availability-badge">
      <span
        aria-hidden="true"
        className="availability-badge__dot animate-pulse-dot"
      />

      <span className="availability-badge__label">
        {siteConfig.availability.label}
      </span>
    </div>
  )
}