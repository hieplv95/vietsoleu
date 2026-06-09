import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Features.css'

export default function Features() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [t('featuresSection.tabNails'), t('featuresSection.tabRest')]

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('featuresSection.feat1Title'),
      desc: t('featuresSection.feat1Desc'),
      color: '#6c47ff',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('featuresSection.feat2Title'),
      desc: t('featuresSection.feat2Desc'),
      color: '#00d4b1',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('featuresSection.feat3Title'),
      desc: t('featuresSection.feat3Desc'),
      color: '#f5a623',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('featuresSection.feat4Title'),
      desc: t('featuresSection.feat4Desc'),
      color: '#ff6b35',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('featuresSection.feat5Title'),
      desc: t('featuresSection.feat5Desc'),
      color: '#a78bfa',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: t('featuresSection.feat6Title'),
      desc: t('featuresSection.feat6Desc'),
      color: '#22d3ee',
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="text-center">
          <div className="section-label">{t('featuresSection.label')}</div>
          <h2 className="section-title">
            {t('featuresSection.title1')}<br />{t('featuresSection.title2')}
          </h2>
          <p className="section-desc">
            {t('featuresSection.desc')}
          </p>
        </div>

        {/* Tabs */}
        <div className="features__tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`features__tab ${activeTab === i ? 'features__tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pain points */}
        <div className="features__pain">
          <div className="features__pain-icon">{t('featuresSection.painIcon')}</div>
          <div className="features__pain-content">
            <p>{t('featuresSection.painText1')}<strong>{t('featuresSection.painText1Bold')}</strong>{t('featuresSection.painText1End')}</p>
            <p>{t('featuresSection.painText2')}<strong>{t('featuresSection.painText2Bold')}</strong>{t('featuresSection.painText2End')}</p>
          </div>
          <a href="https://wa.me/+32" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
            <span>{t('featuresSection.btnSolve')}</span>
          </a>
        </div>

        {/* Feature cards */}
        <div className="features__grid">
          {features.map((feat, i) => (
            <div key={i} className="features__card card" style={{ '--feat-color': feat.color }}>
              <div className="features__card-icon" style={{ background: `${feat.color}18`, color: feat.color }}>
                {feat.icon}
              </div>
              <h3 className="features__card-title">{feat.title}</h3>
              <p className="features__card-desc">{feat.desc}</p>
              <div className="features__card-glow" style={{ background: feat.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
