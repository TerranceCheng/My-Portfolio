import { profile, stats } from '../data.js'
import { ImageSlot } from './Media.jsx'
import {
  IconArrow,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
} from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow" data-reveal>
            Software Developer · {profile.location}
          </span>

          <h1 data-reveal style={{ '--reveal-delay': '70ms' }}>
            Hi, I&apos;m {profile.firstName}.
          </h1>

          <p className="hero-role" data-reveal style={{ '--reveal-delay': '140ms' }}>
            {profile.role}
          </p>

          <p className="hero-summary" data-reveal style={{ '--reveal-delay': '200ms' }}>
            {profile.intro}
          </p>

          <div className="hero-actions" data-reveal style={{ '--reveal-delay': '280ms' }}>
            <a className="btn btn-primary" href="#projects">
              Selected work <IconArrow width="17" height="17" />
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <IconDownload width="17" height="17" /> Résumé
            </a>
          </div>

          <ul className="hero-meta" data-reveal style={{ '--reveal-delay': '350ms' }}>
            <li>
              <a href={`mailto:${profile.email}`}>
                <IconMail width="16" height="16" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <IconGithub width="16" height="16" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedin width="16" height="16" /> LinkedIn
              </a>
            </li>
            <li>
              <span>
                <IconPin width="16" height="16" /> {profile.location}
              </span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" data-reveal style={{ '--reveal-delay': '180ms' }}>
          <div className="portrait-card">
            <div className="portrait-ring">
              <ImageSlot
                src={profile.image}
                alt={`${profile.name} portrait`}
                label="Add your photo"
                hint="src/assets/profile.png"
              />
            </div>
            <div className="portrait-caption">
              <strong>{profile.name}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats" data-reveal>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
