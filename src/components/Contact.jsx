import { useState } from 'react'
import { contact } from '../data/site'
import { Reveal } from './primitives'
import { Check, ICONS } from './icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    // No endpoint configured -> demo success (front-end only).
    if (!contact.formEndpoint) {
      setSent(true)
      return
    }
    // Real submission via Formspree (or any endpoint accepting JSON).
    try {
      setSubmitting(true)
      const data = Object.fromEntries(new FormData(e.target).entries())
      await fetch(contact.formEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      })
      // Apps Script doesn't send CORS headers, so the response isn't readable.
      // The row is written; we optimistically show success once the request is sent.
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-info">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p className="lead">{contact.lead}</p>
          <div className="info-list">
            {contact.details.map((d, i) => {
              const Icon = ICONS[d.icon]
              return (
                <div className="item" key={i}>
                  <span className="ic">{Icon && <Icon width="20" height="20" />}</span>
                  <div><div className="k">{d.key}</div><div className="v">{d.value}</div></div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal as="form" className="glass contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-success">
              <div className="check"><Check width="28" height="28" strokeWidth="3" /></div>
              <h3>Message sent</h3>
              <p>Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" placeholder="Your full name" required /></div>
                <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="+91 …" required /></div>
              </div>
              <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@email.com" required /></div>
              <div className="field">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" name="interest" defaultValue={contact.interests[0]}>
                  {contact.interests.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell us a bit more…" /></div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message →'}
              </button>
              {error && <p className="form-note" style={{ color: '#c0392b' }}>{error}</p>}
              <p className="form-note">We'll get back to you within one business day.</p>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}