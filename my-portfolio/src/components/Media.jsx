import { useState } from 'react'
import { IconArrow, IconImage, IconPlay } from './Icons.jsx'

function placeholder(label, hint, modifier = '') {
  return (
    <div className={`media-placeholder${modifier}`} role="img" aria-label={label}>
      <span className="media-icon">
        <IconImage width="26" height="26" />
      </span>
      <span className="media-label">{label}</span>
      <span className="media-hint">{hint}</span>
    </div>
  )
}

export function ImageSlot({ src, alt, label = 'Add image here', hint = 'src/assets → data.js' }) {
  if (src) {
    return <img className="media-img" src={src} alt={alt} loading="lazy" />
  }
  return placeholder(label, hint)
}

export function ImageCarousel({ images = [], alt, label = 'Add image here', hint = 'src/assets → data.js' }) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) return placeholder(label, hint)
  if (images.length === 1) {
    return <img className="media-img" src={images[0]} alt={alt} loading="lazy" />
  }

  const count = images.length
  const go = (next) => setIndex((next + count) % count)

  return (
    <div className="carousel">
      <img
        className="media-img carousel-img"
        src={images[index]}
        alt={`${alt} — image ${index + 1} of ${count}`}
        loading="lazy"
      />

      <button
        type="button"
        className="carousel-btn carousel-btn--prev"
        onClick={() => go(index - 1)}
        aria-label="Previous image"
      >
        <IconArrow width="16" height="16" />
      </button>
      <button
        type="button"
        className="carousel-btn carousel-btn--next"
        onClick={() => go(index + 1)}
        aria-label="Next image"
      >
        <IconArrow width="16" height="16" />
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            type="button"
            key={images[i]}
            className={i === index ? 'carousel-dot is-active' : 'carousel-dot'}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}

function youTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/,
  )
  return match ? match[1] : null
}

export function VideoSlot({ src, label = 'Add demo video here', hint = 'mp4 / webm / YouTube → data.js' }) {
  if (src) {
    const id = youTubeId(src)
    if (id) {
      return (
        <iframe
          className="media-embed"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="Project demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )
    }
    return (
      <video className="media-video" src={src} controls playsInline preload="metadata">
        Your browser does not support the video tag.
      </video>
    )
  }
  return (
    <div className="media-placeholder media-placeholder--video" role="img" aria-label={label}>
      <span className="media-icon">
        <IconPlay width="26" height="26" />
      </span>
      <span className="media-label">{label}</span>
      <span className="media-hint">{hint}</span>
    </div>
  )
}
