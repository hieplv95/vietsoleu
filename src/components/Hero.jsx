import { useEffect, useRef } from 'react'
import tabletImg from '../assets/yocheckin-tablet.png'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      heroRef.current.style.setProperty('--mouse-x', `${x}%`)
      heroRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>
      <div className="hero__grid-overlay"></div>
      <div className="hero__mouse-glow"></div>

      <div className="container hero__inner">

        {/* ===== LEFT: Text content ===== */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            {t('hero.badge')}
          </div>

          <h1 className="hero__title">
            {t('hero.title1')}
            <span className="hero__title-gradient">{t('hero.titleGradient')}</span>
            <br />{t('hero.title2')}
          </h1>

          <p className="hero__desc">
            {t('hero.desc')}
          </p>

          <div className="hero__actions">
            <a href="https://yocheckin.com/auth/register" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
              <span>{t('hero.btnTrial')}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="https://www.youtube.com/watch?v=SvPP3nIMm-0&list=PL0To8dJW-7-aWWZyc0QfFmx_aIEm-Xpdh" className="btn btn-secondary btn-lg" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
              {t('hero.btnView')}
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#00d4b1" strokeWidth="2" />
              </svg>
              {t('hero.trustNoCard')}
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#6c47ff" strokeWidth="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#6c47ff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {t('hero.trustGdpr')}
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M3 10h18M7 15h1m4 0h1M7 19h1m4 0h1m4-4h1m0 4h1M3 6a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {t('hero.trustLang')}
            </div>
          </div>
        </div>

        {/* ===== RIGHT: Real photo ===== */}
        <div className="hero__right">
          <div className="hero__photo-container">
            <img
              src={tabletImg}
              alt="YoCheckin tại tiệm Nails"
              className="hero__photo"
            />
          </div>

          {/* Floating badge */}
          <div className="hero__floating-badge">
            <div className="hero__floating-badge-icon">⭐</div>
            <div>
              <div className="hero__floating-badge-val">{t('hero.floatingBadgeVal')}</div>
              <div className="hero__floating-badge-sub">{t('hero.floatingBadgeSub')}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>{t('hero.scrollDown')}</span>
      </div>
    </section>
  )
}
