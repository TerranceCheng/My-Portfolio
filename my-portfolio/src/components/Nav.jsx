import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { IconArrow, IconClose, IconMenu } from './Icons.jsx'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-monogram">TC</span>
          <span className="nav-name">
            Terrance Cheng
            <small>Software Developer</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <IconArrow width="16" height="16" />
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose width="22" height="22" /> : <IconMenu width="22" height="22" />}
        </button>
      </div>
    </header>
  )
}
