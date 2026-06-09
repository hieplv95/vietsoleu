import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import avatarWoman1 from '../assets/avatar-woman-1.jpg'
import avatarMan from '../assets/avatar-man.png'
import avatarWoman2 from '../assets/avatar-woman-2.png'
import avatarWoman3 from '../assets/avatar-woman-3.jpg'
import './Testimonials.css'

export default function Testimonials() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  const testimonials = [
    {
      quote: t('testimonialsSection.t1.quote'),
      name: t('testimonialsSection.t1.name'),
      role: t('testimonialsSection.t1.role'),
      location: t('testimonialsSection.t1.location'),
      stat: t('testimonialsSection.t1.stat'),
      statLabel: t('testimonialsSection.t1.statLabel'),
      avatar: avatarWoman1,
    },
    {
      quote: t('testimonialsSection.t2.quote'),
      name: t('testimonialsSection.t2.name'),
      role: t('testimonialsSection.t2.role'),
      location: t('testimonialsSection.t2.location'),
      stat: t('testimonialsSection.t2.stat'),
      statLabel: t('testimonialsSection.t2.statLabel'),
      avatar: avatarMan,
    },
    {
      quote: t('testimonialsSection.t3.quote'),
      name: t('testimonialsSection.t3.name'),
      role: t('testimonialsSection.t3.role'),
      location: t('testimonialsSection.t3.location'),
      stat: t('testimonialsSection.t3.stat'),
      statLabel: t('testimonialsSection.t3.statLabel'),
      avatar: avatarWoman2,
    },
    {
      quote: t('testimonialsSection.t4.quote'),
      name: t('testimonialsSection.t4.name'),
      role: t('testimonialsSection.t4.role'),
      location: t('testimonialsSection.t4.location'),
      stat: t('testimonialsSection.t4.stat'),
      statLabel: t('testimonialsSection.t4.statLabel'),
      avatar: avatarWoman3,
    },
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials__bg"></div>
      <div className="container">
        <div className="text-center">
          <div className="section-label">{t('testimonialsSection.label')}</div>
          <h2 className="section-title">{t('testimonialsSection.title')}</h2>
          <p className="section-desc">
            {t('testimonialsSection.desc')}
          </p>
        </div>

        <div className="testimonials__main">
          {/* Featured testimonial */}
          <div className="testimonials__featured card">
            <div className="testimonials__quote-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M13 6H7a1 1 0 00-1 1v6a1 1 0 001 1h3l-3 6h4l4-7V7a1 1 0 00-1-1zM25 6h-6a1 1 0 00-1 1v6a1 1 0 001 1h3l-3 6h4l4-7V7a1 1 0 00-1-1z" fill="url(#quote-grad)" />
                <defs>
                  <linearGradient id="quote-grad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#6c47ff" />
                    <stop offset="1" stopColor="#00d4b1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="testimonials__text">{testimonials[active].quote}</p>
            <div className="testimonials__stat">
              <div className="testimonials__stat-value">{testimonials[active].stat}</div>
              <div className="testimonials__stat-label">{testimonials[active].statLabel}</div>
            </div>
            <div className="testimonials__author">
              <div className="testimonials__avatar">
                <img src={testimonials[active].avatar} alt={testimonials[active].name} />
              </div>
              <div>
                <div className="testimonials__name">{testimonials[active].name}</div>
                <div className="testimonials__role">{testimonials[active].role}</div>
                <div className="testimonials__location">📍 {testimonials[active].location}</div>
              </div>
              <div className="testimonials__stars">
                {'⭐'.repeat(5)}
              </div>
            </div>
          </div>

          {/* Nav cards */}
          <div className="testimonials__nav">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonials__nav-card ${active === i ? 'testimonials__nav-card--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="testimonials__nav-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <div className="testimonials__nav-name">{t.name}</div>
                  <div className="testimonials__nav-location">{t.location}</div>
                </div>
                <div className="testimonials__nav-stat">{t.stat}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
