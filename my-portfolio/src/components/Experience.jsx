import { experience } from '../data.js'
import { IconBriefcase } from './Icons.jsx'

export default function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="kicker">02 · Experience</span>
          <h2>Professional experience to date.</h2>
        </header>

        <div className="timeline">
          {experience.map((job, index) => (
            <article
              className="job card"
              key={job.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="job-head">
                <span className="job-icon">
                  <IconBriefcase width="18" height="18" />
                </span>
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <span className="job-period">
                  {job.period}
                  <small>{job.type}</small>
                </span>
              </div>

              <p className="job-summary">{job.summary}</p>

              <div className="job-items">
                {job.items.map((item) => (
                  <div className="job-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <ul>
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <ul className="tag-list tag-list--chips">
                      {item.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
