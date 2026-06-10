import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Services.css'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M7 8h4M7 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="16" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: '#6c47ff',
      title: t('services.cardWebTitle'),
      desc: t('services.cardWebDesc'),
      path: '/thiet-ke-website-nails',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="12" cy="17" r="1.2" fill="currentColor"/>
        </svg>
      ),
      color: '#00d4b1',
      title: t('services.cardSocialTitle'),
      desc: t('services.cardSocialDesc'),
      path: '/social-media-marketing',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      color: '#f5a623',
      title: t('services.cardSeoTitle'),
      desc: t('services.cardSeoDesc'),
      path: '/thiet-ke-website-nails',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M12 12v3M10 13.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      color: '#ff6b35',
      title: t('services.cardPosTitle'),
      desc: t('services.cardPosDesc'),
      isUnderConstruction: true,
    },
  ]

  return (
    <section className="services section" id="services">
      {/* Background orbs */}
      <div className="services__orb services__orb--1" />
      <div className="services__orb services__orb--2" />

      <div className="container">
        {/* Header */}
        <div className="services__header text-center">
          <div className="section-label">{t('services.label')}</div>
          <h2 className="section-title">
            {t('services.title')}{' '}
            <span className="services__title-accent">{t('services.titleAccent')}</span>
          </h2>
          <p className="section-desc">
            {t('services.desc')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="services__grid">
          {services.map((svc, i) => (
            <div key={i} className="services__card card" style={{ '--svc-color': svc.color }}>
              <div className="services__card-glow" />
              <div className="services__icon" style={{ color: svc.color, background: `${svc.color}18` }}>
                {svc.icon}
              </div>
              <h3 className="services__card-title">{svc.title}</h3>
              <p className="services__card-desc">{svc.desc}</p>
              <div className="services__card-footer">
                {svc.isUnderConstruction ? (
                  <span className="services__link services__link--construction">
                    {t('services.underConstruction')}
                  </span>
                ) : (
                  <Link to={svc.path} className="services__link">
                    {t('services.linkLearnMore')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="services__strip">
          <div className="services__strip-text">
            <span className="services__strip-tag">{t('services.stripTag')}</span>
            <p>{t('services.stripText')}</p>
          </div>
          <a href="https://wa.me/34642805848" className="btn btn-primary" target="_blank" rel="noreferrer">
            <span>{t('services.stripBtn')}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
