import { projects } from '../data.js'
import { ImageCarousel, VideoSlot } from './Media.jsx'
import { IconGithub } from './Icons.jsx'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="kicker">03 · Selected projects</span>
          <h2>Projects developed during my studies.</h2>
          <p className="section-sub">
            Developed during my diploma and bachelor&apos;s studies, covering
            computer vision, mobile applications and web development. Further
            projects are available on GitHub.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`card project ${p.featured ? 'project--featured' : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            >
              <div className="project-media">
                <ImageCarousel
                  images={p.images}
                  alt={`${p.title} screenshot`}
                  label="Add project screenshot"
                  hint="images → data.js"
                />
                <span className="project-badge">{p.category}</span>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.description}</p>

                <ul className="tag-list tag-list--chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-demo">
                  <VideoSlot
                    src={p.video}
                    label="Add demo video"
                    hint="mp4 → data.js"
                  />
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="projects-more" data-reveal>
          <a
            className="btn btn-ghost"
            href="https://github.com/TerranceCheng"
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub width="17" height="17" /> More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
