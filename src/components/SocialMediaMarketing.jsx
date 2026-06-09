import { useState, useEffect } from 'react'
import socialHeroImg from '../assets/social.jpg'
import f1Img from '../assets/social_benefit_1.png'
import f2Img from '../assets/social_benefit_2.png'
import f3Img from '../assets/social_benefit_3.png'
import f4Img from '../assets/social_benefit_4.png'
import { useLanguage } from '../context/LanguageContext'
import './SocialMediaMarketing.css'

export default function SocialMediaMarketing() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    salonName: '',
    location: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    setFormSubmitted(true)
    // Clear form
    setFormData({
      name: '',
      phone: '',
      salonName: '',
      location: '',
      message: ''
    })
  }

  return (
    <div className="social-marketing-page">
      {/* 1. Hero Section */}
      <section className="social-hero">
        <div className="container social-hero__grid">
          <div className="social-hero__content">
            <span className="badge badge-primary">{t('socialPage.hero.badge')}</span>
            <h1 className="social-hero__title">
              {t('socialPage.hero.title1')} <br />
              <span>{t('socialPage.hero.title2')}</span>
            </h1>
            <p className="social-hero__lead">
              {t('socialPage.hero.desc')}
            </p>
            <div className="social-hero__actions">
              <a href="#social-contact-form" className="btn btn-primary btn-lg">
                <span>{t('socialPage.hero.btnRegister')}</span>
              </a>
              <a href="#social-pricing" className="btn btn-secondary btn-lg">
                <span>{t('socialPage.hero.btnPricing')}</span>
              </a>
            </div>
          </div>
          <div className="social-hero__image-container">
            <img src={socialHeroImg} alt="Social Media Marketing for Nail Salon" className="social-hero__preview-img" />
          </div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="social-benefits container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('socialPage.benefits.title')}</h2>
          <p className="section-subtitle">
            {t('socialPage.benefits.subtitle')}
          </p>
        </div>

        <div className="social-benefits__grid">
          {/* Card 1 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <span className="benefit-number num-1">1</span>
              <img src={f1Img} className="benefit-icon" alt="Tăng review rating" />
            </div>
            <div className="benefit-card__content">
              <h3>{t('socialPage.benefits.card1Title')}</h3>
              <p>{t('socialPage.benefits.card1Desc')}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <span className="benefit-number num-2">2</span>
              <img src={f2Img} className="benefit-icon" alt="Kết nối khách hàng" />
            </div>
            <div className="benefit-card__content">
              <h3>{t('socialPage.benefits.card2Title')}</h3>
              <p>{t('socialPage.benefits.card2Desc')}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <span className="benefit-number num-3">3</span>
              <img src={f3Img} className="benefit-icon" alt="Xây dựng thương hiệu" />
            </div>
            <div className="benefit-card__content">
              <h3>{t('socialPage.benefits.card3Title')}</h3>
              <p>{t('socialPage.benefits.card3Desc')}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <span className="benefit-number num-4">4</span>
              <img src={f4Img} className="benefit-icon" alt="Chi phí thấp" />
            </div>
            <div className="benefit-card__content">
              <h3>{t('socialPage.benefits.card4Title')}</h3>
              <p>{t('socialPage.benefits.card4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video Section */}
      <section className="social-video-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('socialPage.video.title')}</h2>
            <p className="section-subtitle">
              {t('socialPage.video.subtitle')}
            </p>
          </div>

          <div className="video-player-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/BoXXhso2MJc?feature=oembed" 
              title="Video giới thiệu Dịch vụ Social Media"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section id="social-pricing" className="social-pricing-section container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('socialPage.pricing.title')}</h2>
          <p className="section-subtitle">{t('socialPage.pricing.subtitle')}</p>
        </div>

        <div className="social-pricing-card">
          <div className="pricing-card__header">
            <span className="price-package-label">{t('socialPage.pricing.pkgLabel')}</span>
            <h3 className="price-package-name">{t('socialPage.pricing.pkgName')}</h3>
            <div className="price-value">
              <span className="price-setup-label">{t('socialPage.pricing.setupLabel')}</span>
              <span className="price-setup-amount">{t('socialPage.pricing.setupVal')}</span>
            </div>
            <div className="price-gold-divider"></div>
          </div>

          <div className="pricing-card__body">
            <ul className="pricing-features-list">
              <li>
                <span className="check-icon">✔</span>
                {t('socialPage.pricing.feat1')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('socialPage.pricing.feat2')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('socialPage.pricing.feat3')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('socialPage.pricing.feat4')}
              </li>
            </ul>

            <div className="pricing-special-notes">
              <div className="note-item note-highlight">
                <span className="note-icon">★</span>
                {t('socialPage.pricing.noteHighlight')}
              </div>
              <div className="note-item">
                <span className="note-icon">ℹ</span>
                {t('socialPage.pricing.noteStandard')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Registration Form Section */}
      <section id="social-contact-form" className="social-contact-section container">
        <div className="social-contact__grid">
          <div className="social-contact__info">
            <span className="badge badge-primary">{t('socialPage.form.badge')}</span>
            <h2>{t('socialPage.form.title')}</h2>
            <p>{t('socialPage.form.desc')}</p>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>{t('webSeoPage.form.hotline')}</strong>
                <p>{t('webSeoPage.form.hotlineVal')}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <strong>Email:</strong>
                <p>contact@vietsoleu.com</p>
              </div>
            </div>
          </div>

          <div className="social-contact__form-wrapper">
            <h3>{t('socialPage.form.formTitle')}</h3>
            {formSubmitted ? (
              <div className="form-success-alert">
                <h4>{t('socialPage.form.successTitle')}</h4>
                <p>{t('socialPage.form.successDesc')}</p>
                <button className="btn btn-primary btn-sm" onClick={() => setFormSubmitted(false)}>
                  <span>{t('webSeoPage.form.btnNewRequest')}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('webSeoPage.form.labelName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('webSeoPage.form.placeholderName')}
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('webSeoPage.form.labelPhone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={t('webSeoPage.form.placeholderPhone')}
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salonName">{t('webSeoPage.form.labelSalonName')}</label>
                  <input
                    type="text"
                    id="salonName"
                    name="salonName"
                    required
                    placeholder={t('webSeoPage.form.placeholderSalon')}
                    value={formData.salonName}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">{t('webSeoPage.form.labelLocation')}</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder={t('webSeoPage.form.placeholderLocation')}
                    value={formData.location}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('webSeoPage.form.labelMessage')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder={t('webSeoPage.form.placeholderMessage')}
                    value={formData.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  <span>{t('webSeoPage.form.btnSubmit')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
