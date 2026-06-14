import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

const integrations = [
  { name: 'Google Maps', color: '#4285f4', icon: '🗺️' },
  { name: 'Facebook', color: '#1877f2', icon: '📘' },
  { name: 'WhatsApp', color: '#25d366', icon: '💬' },
  { name: 'SMS', color: '#f5a623', icon: '📱' },
  { name: 'Email', color: '#ea4335', icon: '📧' },
  { name: 'Instagram', color: '#e1306c', icon: '📷' },
]

export default function About() {
  const { t } = useLanguage()

  const highlights = [
    { icon: '🎯', text: t('aboutSection.h1') },
    { icon: '🚀', text: t('aboutSection.h2') },
    { icon: '🔒', text: t('aboutSection.h3') },
    { icon: '📊', text: t('aboutSection.h4') },
  ]

  return (
    <section className="about section" id="about">
      <div className="about__bg-orb about__bg-orb--1"></div>
      <div className="about__bg-orb about__bg-orb--2"></div>
      <div className="container about__inner">
        {/* Left: Content */}
        <div className="about__content">
          <div className="section-label">{t('aboutSection.label')}</div>
          <h2 className="about__title">
            {t('aboutSection.title')}
          </h2>
          <p className="about__desc">
            {t('aboutSection.desc1')}<strong>{t('aboutSection.desc1Bold')}</strong>{t('aboutSection.desc1End')}
          </p>
          <p className="about__desc">
            {t('aboutSection.desc2')}<strong>{t('aboutSection.desc2Bold')}</strong>{t('aboutSection.desc2End')}
          </p>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div key={i} className="about__highlight-item">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <Link to="/lien-he" className="btn btn-primary">
            <span>{t('aboutSection.btnAllIntegrations')}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

        {/* Right: Integration visual */}
        <div className="about__visual">
          {/* Center hub */}
          <div className="about__hub">
            <div className="about__hub-ring about__hub-ring--1"></div>
            <div className="about__hub-ring about__hub-ring--2"></div>
            <div className="about__hub-ring about__hub-ring--3"></div>
            <div className="about__hub-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="12" fill="url(#hub-grad)"/>
                <path d="M10 20L20 30L30 20M20 10v20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="hub-grad" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#6c47ff"/>
                    <stop offset="1" stopColor="#4e2ed4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>YoCheckIn</span>
            </div>
            {/* Orbit items */}
            {integrations.map((item, i) => {
              const angle = (i * 360) / integrations.length
              return (
                <div
                  key={i}
                  className="about__orbit-item"
                  style={{
                    '--angle': `${angle}deg`,
                    '--color': item.color,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <span>{item.icon}</span>
                  <div className="about__orbit-label">{item.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
