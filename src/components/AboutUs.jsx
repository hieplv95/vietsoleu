import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './AboutUs.css'

const titles = {
  vi: 'Về chúng tôi - VietSol Digital Marketing',
  en: 'About Us - VietSol Digital Marketing',
  es: 'Sobre Nosotros - VietSol Digital Marketing',
  fr: 'À Propos de Nous - VietSol Digital Marketing',
  de: 'Über uns - VietSol Digital Marketing',
  cs: 'O nás - VietSol Digital Marketing',
  pt: 'Sobre Nós - VietSol Digital Marketing',
}

const missionBadges = {
  vi: 'Sứ mệnh',
  en: 'Mission',
  es: 'Misión',
  fr: 'Mission',
  de: 'Mission',
  cs: 'Mise',
  pt: 'Missão',
}

const visionBadges = {
  vi: 'Tầm nhìn',
  en: 'Vision',
  es: 'Visión',
  fr: 'Vision',
  de: 'Vision',
  cs: 'Vize',
  pt: 'Visão',
}

export default function AboutUs() {
  const { t, language } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = titles[language] || titles.en
  }, [language])

  return (
    <div className="about-page">
      {/* Background Decorative Glows */}
      <div className="about-bg-glow" />
      <div className="about-bg-glow-left" />
      <div className="about-bg-glow-bottom" />

      <div className="container about-container">
        {/* Hero Section */}
        <header className="about-hero">
          <span className="section-label">{t('aboutUsPage.hero.badge')}</span>
          <h1 className="about-title-large">
            {t('aboutUsPage.hero.title1')} <br />
            <span>{t('aboutUsPage.hero.title2')}</span>
          </h1>
          <p className="about-hero__desc">
            {t('aboutUsPage.hero.desc')}
          </p>
        </header>

        {/* Stats Row */}
        <section className="about-stats" aria-label="VietSol Statistics">
          <div className="about-stat-card">
            <div className="about-stat-number">{t('aboutUsPage.hero.statClients')}</div>
            <div className="about-stat-label">{t('aboutUsPage.hero.statClientsLabel')}</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">{t('aboutUsPage.hero.statExp')}</div>
            <div className="about-stat-label">{t('aboutUsPage.hero.statExpLabel')}</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">{t('aboutUsPage.hero.statRate')}</div>
            <div className="about-stat-label">{t('aboutUsPage.hero.statRateLabel')}</div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story-section" aria-label="Our Story">
          <div className="about-story-content">
            <h2 className="about-story-title">{t('aboutUsPage.story.title')}</h2>
            <p className="about-story-desc">
              {t('aboutUsPage.story.desc1')}
            </p>
            <p className="about-story-desc">
              {t('aboutUsPage.story.desc2')}
            </p>
          </div>
          <div className="about-story-visual" aria-hidden="true">
            <div className="about-story-orb" />
            <div className="about-story-pattern">
              <span className="about-story-logo">☀️</span>
              <span className="about-story-since">EST. 2023</span>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-mv-section" aria-label="Mission and Vision">
          <div className="about-mv-card about-mv-card--mission">
            <div className="about-mv-icon-bg">🎯</div>
            <span className="about-mv-badge">
              {missionBadges[language] || missionBadges.en}
            </span>
            <h3>{t('aboutUsPage.missionVision.missionTitle')}</h3>
            <p>{t('aboutUsPage.missionVision.missionDesc')}</p>
          </div>

          <div className="about-mv-card about-mv-card--vision">
            <div className="about-mv-icon-bg">🔭</div>
            <span className="about-mv-badge">
              {visionBadges[language] || visionBadges.en}
            </span>
            <h3>{t('aboutUsPage.missionVision.visionTitle')}</h3>
            <p>{t('aboutUsPage.missionVision.visionDesc')}</p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-values-section" aria-label="Core Values">
          <div className="about-values-header">
            <h2 className="about-values-title">{t('aboutUsPage.values.title')}</h2>
            <p className="about-values-subtitle">{t('aboutUsPage.values.subtitle')}</p>
          </div>

          <div className="about-values-grid">
            {/* Value 1 */}
            <div className="about-value-card">
              <div className="about-value-icon">🤝</div>
              <div className="about-value-content">
                <h4>{t('aboutUsPage.values.val1Title')}</h4>
                <p>{t('aboutUsPage.values.val1Desc')}</p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="about-value-card">
              <div className="about-value-icon">💡</div>
              <div className="about-value-content">
                <h4>{t('aboutUsPage.values.val2Title')}</h4>
                <p>{t('aboutUsPage.values.val2Desc')}</p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="about-value-card">
              <div className="about-value-icon">💎</div>
              <div className="about-value-content">
                <h4>{t('aboutUsPage.values.val3Title')}</h4>
                <p>{t('aboutUsPage.values.val3Desc')}</p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="about-value-card">
              <div className="about-value-icon">🌍</div>
              <div className="about-value-content">
                <h4>{t('aboutUsPage.values.val4Title')}</h4>
                <p>{t('aboutUsPage.values.val4Desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
