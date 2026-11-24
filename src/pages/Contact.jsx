import { useState } from 'react'
import { MapPin, Mail, Phone, HeartHandshake } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { contactPage, siteConfig } from '../data/websiteContent'

const initial = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const { seo, hero, formNote } = contactPage
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    if (form.phone && !/^[+\d\s()-]{7,20}$/.test(form.phone)) {
      next.phone = 'Enter a valid phone number.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(initial)
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1>
              <span className="accent">{hero.highlight}</span> {hero.rest}
            </h1>
            <p>{hero.description}</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-layout">
          <Reveal className="contact-card">
            <h2>Contact Information</h2>

            <div className="contact-item">
              <span className="contact-item__icon" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <div>
                <strong>Registered Office</strong>
                <p>
                  {siteConfig.contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {siteConfig.contact.email ? (
              <div className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <Mail size={20} />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </p>
                </div>
              </div>
            ) : null}

            {siteConfig.contact.phone ? (
              <div className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <Phone size={20} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                  </p>
                </div>
              </div>
            ) : null}

            <div className="note-banner" style={{ marginTop: '1rem' }}>
              <HeartHandshake size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} />
              {siteConfig.donateNote}
            </div>
          </Reveal>

          <Reveal className="contact-card">
            <h2>Send a Message</h2>
            {submitted ? (
              <div className="form-success" role="status">
                Thank you. Your message passed frontend validation. Backend integration is still
                required to deliver this submission to the foundation.
              </div>
            ) : null}

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="name"
                />
                {errors.name ? <p className="form-error">{errors.name}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                />
                {errors.email ? <p className="form-error">{errors.email}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  autoComplete="tel"
                />
                {errors.phone ? <p className="form-error">{errors.phone}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message ? <p className="form-error">{errors.message}</p> : null}
              </div>

              <button type="submit" className="btn btn--primary">
                Submit
              </button>
              <p className="form-note">{formNote}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
