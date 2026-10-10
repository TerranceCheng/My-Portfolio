import { coreStack, skillGroups } from '../data.js'
import {
  IconCloud,
  IconCode,
  IconDatabase,
  IconLayers,
  IconSpark,
  IconTerminal,
} from './Icons.jsx'

const icons = {
  languages: IconCode,
  backend: IconTerminal,
  frontend: IconLayers,
  database: IconDatabase,
  devops: IconCloud,
  ml: IconSpark,
}

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="kicker">04 · Skills</span>
          <h2>Technologies and tools used regularly.</h2>
        </header>

        <div className="core-stack" data-reveal>
          <span className="core-stack__label">Core stack</span>
          <ul className="tag-list tag-list--chips">
            {coreStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.id] ?? IconCode
            return (
              <article
                className="card skill-card"
                key={group.id}
                data-reveal
                style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}
              >
                <span className="skill-icon">
                  <Icon width="20" height="20" />
                </span>
                <h3>{group.title}</h3>
                <ul className="tag-list tag-list--chips">
                  {group.items.map((item) => (
                    <li className={coreStack.includes(item) ? 'is-core' : undefined} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
