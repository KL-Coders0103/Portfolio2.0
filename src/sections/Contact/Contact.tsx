import {
  ArrowRight,
  BriefcaseBusiness,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
  Wifi,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

import { contactData } from '../../config/contact'

import './contact.css'

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.04 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 5.04 0ZM.27 8.1h4.75V24H.27V8.1ZM7.86 8.1h4.55v2.17h.07c.63-1.2 2.18-2.47 4.49-2.47 4.8 0 5.69 3.16 5.69 7.27V24h-4.75v-7.91c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.05-3.03 4.18V24H7.86V8.1Z" />
    </svg>
  )
}

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.99c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const contactIcons = {
  email: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  location: MapPin,
} as const

const interestIcons = [
  MessageCircle,
  Users,
  Lightbulb,
  BriefcaseBusiness,
]

const opportunityIcons = {
  fullTime: BriefcaseBusiness,
  remote: Wifi,
  freelance: Users,
  talks: Lightbulb,
} as const

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__grid" aria-hidden="true" />

      {/* MAIN */}

      <div className="contact-section__main">

        {/* LEFT */}

        <div className="contact-section__intro">

          <div className="contact-section__eyebrow">
            <span />
            {contactData.eyebrow}
          </div>

          <h2 id="contact-title" className="contact-section__title">
            <span>{contactData.title.line1}</span>
            <span>{contactData.title.line2}</span>
          </h2>

          <p className="contact-section__description">
            {contactData.description}
          </p>

          <div className="contact-section__interests">
            {contactData.interests.map((interest, index) => {
              const Icon = interestIcons[index]

              return (
                <div
                  key={interest}
                  className="contact-section__interest"
                >
                  <Icon size={25} />
                  <span>{interest}</span>
                </div>
              )
            })}
          </div>

        </div>

        {/* FORM */}

        <div className="contact-section__form-wrapper">

          <div className="contact-section__form-heading">

            <div>
              <Mail size={25} />

              <strong>
                {contactData.form.title}
              </strong>
            </div>

            <span>
              <i />
              {contactData.availabilityMessage}
            </span>

          </div>

          <form
            className="contact-section__form"
            onSubmit={handleSubmit}
          >

            <div className="contact-section__field-row">

              <label className="contact-section__field">
                <span>
                  {contactData.form.fields.name.label}
                  <b>*</b>
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder={
                    contactData.form.fields.name.placeholder
                  }
                  required
                />
              </label>

              <label className="contact-section__field">
                <span>
                  {contactData.form.fields.email.label}
                  <b>*</b>
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder={
                    contactData.form.fields.email.placeholder
                  }
                  required
                />
              </label>

            </div>

            <label className="contact-section__field">
              <span>
                {contactData.form.fields.subject.label}
                <b>*</b>
              </span>

              <select
                name="subject"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {contactData.form.fields.subject.placeholder}
                </option>

                {contactData.form.subjects.map(subject => (
                  <option
                    key={subject}
                    value={subject}
                  >
                    {subject}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact-section__field">
              <span>
                {contactData.form.fields.message.label}
                <b>*</b>
              </span>

              <textarea
                name="message"
                rows={5}
                placeholder={
                  contactData.form.fields.message.placeholder
                }
                required
              />
            </label>

            <button
              type="submit"
              className="contact-section__submit"
            >
              <Send size={18} />

              {submitted
                ? 'MESSAGE READY'
                : contactData.form.submitLabel}

              <ArrowRight size={17} />
            </button>

          </form>

        </div>

        {/* VISUAL */}

        <div
          className="contact-section__visual"
          aria-hidden="true"
        >
          <div className="contact-section__visual-grid" />

          <div className="contact-section__world">
            <div />
            <div />
            <div />
          </div>

          <div className="contact-section__person">
            <div className="contact-section__person-head" />
            <div className="contact-section__person-body" />
          </div>

          <div className="contact-section__laptop">
            <span>BUILD</span>
            <span>LEARN</span>
            <span>EXPLORE</span>
            <span>REPEAT_</span>
          </div>

          <div className="contact-section__visual-note">
            Ideas
            <br />
            To
            <br />
            Impact
          </div>
        </div>

      </div>

      {/* CONTACT CARDS */}

      <div className="contact-section__info">

        {contactData.contactInfo.map(item => {
          const Icon = contactIcons[item.icon]

          return (
            <a
              key={item.id}
              href={item.href}
              className="contact-section__info-card"
            >
              <div className="contact-section__info-icon">
                <Icon size={25} />
              </div>

              <div>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
                <small>{item.description}</small>
              </div>
            </a>
          )
        })}

      </div>

      {/* OPPORTUNITIES */}

      <div className="contact-section__opportunities">

        <div className="contact-section__opportunity-intro">
          <strong>
            AVAILABLE FOR
            <br />
            <span>NEW OPPORTUNITIES</span>
          </strong>

          <p>
            Open to full-time roles, internships,
            freelance projects and exciting collaborations.
          </p>
        </div>

        <div className="contact-section__opportunity-list">

          {contactData.opportunities.map(opportunity => {
            const Icon =
              opportunityIcons[opportunity.icon]

            return (
              <div
                key={opportunity.id}
                className="contact-section__opportunity"
              >
                <Icon size={28} />

                <div>
                  <strong>
                    {opportunity.title}
                  </strong>

                  <span>
                    {opportunity.description}
                  </span>
                </div>
              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}