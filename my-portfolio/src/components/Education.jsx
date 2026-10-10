import { awards, education } from '../data.js'
import { IconAward, IconCap } from './Icons.jsx'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="kicker">05 · Education &amp; awards</span>
          <h2>Education and academic recognition.</h2>
        </header>

        <div className="edu-grid">
          {education.map((e, i) => (
            <article
              className="card edu-card"
              key={e.id}
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="card-icon">
                <IconCap width="20" height="20" />
              </span>
              <p className="edu-period">{e.period}</p>
              <h3>{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
              <ul className="edu-highlights">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}

          <article
            className="card edu-card edu-card--awards"
            data-reveal
            style={{ '--reveal-delay': '180ms' }}
          >
            <span className="card-icon card-icon--amber">
              <IconAward width="20" height="20" />
            </span>
            <h3>Recognition</h3>
            <ul className="award-list">
              {awards.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong>
                  <span>{a.detail}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
