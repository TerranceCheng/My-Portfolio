import { profile } from '../data.js'

function withHighlights(text) {
  return text.split(/(<b>[^<]*<\/b>)/g).map((part, i) =>
    part.startsWith('<b>') ? (
      <strong key={i}>
        {part.slice(3, -4)}
      </strong>
    ) : (
      part
    ),
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="kicker">01 · About</span>
          <h2>Backend development and systems integration.</h2>
        </header>

        <div className="about-grid">
          <article className="card about-card about-card--lead" data-reveal>
            <p className="lead">{withHighlights(profile.about)}</p>
          </article>

          <aside
            className="card about-card"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <h3>Side projects</h3>
            <p>{profile.aboutSide}</p>

            <h3>Languages spoken</h3>
            <ul className="tag-list">
              {profile.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
