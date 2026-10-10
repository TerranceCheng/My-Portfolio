import { profile } from '../data.js'
import {
  IconArrow,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
} from './Icons.jsx'

export default function Contact() {
  return (
    <section className="section section--tint" id="contact">
      <div className="container">
        <div className="contact-card" data-reveal>
          <span className="kicker kicker--light">06 · Contact</span>
          <h2>Get in touch.</h2>
          <p>
            If any of the above aligns with your requirements, email is the most
            direct way to reach me. I am open to software developer roles and
            collaborative projects.
          </p>

          <div className="contact-actions">
            <a className="btn btn-white" href={`mailto:${profile.email}`}>
              <IconMail width="17" height="17" /> {profile.email}
            </a>
            <a
              className="btn btn-outline-white"
              href={`tel:${profile.phone.replace(/-/g, '')}`}
            >
              <IconPhone width="17" height="17" /> {profile.phone}
            </a>
          </div>

          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <IconGithub width="18" height="18" /> GitHub
              <IconArrow width="15" height="15" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedin width="18" height="18" /> LinkedIn
              <IconArrow width="15" height="15" />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <IconDownload width="18" height="18" /> Résumé
              <IconArrow width="15" height="15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
