import { useState, useEffect } from 'react'
import socialHeroImg from '../assets/social.jpg'
import f1Img from '../assets/social_benefit_1.png'
import f2Img from '../assets/social_benefit_2.png'
import f3Img from '../assets/social_benefit_3.png'
import f4Img from '../assets/social_benefit_4.png'
import { useLanguage } from '../context/LanguageContext'
import './SocialMediaMarketing.css'
import googleMapsAdsDemoImg from '../assets/google_maps_ads_demo.png'
import instagramAdsTypesImg from '../assets/instagram_ads_types.png'

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
    
    const whatsappNumber = '34642805848'
    const message = `Chào Vietsol, tôi muốn nhận tư vấn dịch vụ Social Media Marketing:\n- Họ tên: ${formData.name}\n- Số điện thoại: ${formData.phone}\n- Tên tiệm: ${formData.salonName}\n- Địa chỉ tiệm: ${formData.location || 'Không có'}\n- Lời nhắn: ${formData.message || 'Không có'}`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    setFormSubmitted(true)
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

      {/* 3. Google Maps Ads Section */}
      <section className="social-maps-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('socialPage.mapsAds.title')}</h2>
            <p className="section-subtitle">
              {t('socialPage.mapsAds.subtitle')}
            </p>
          </div>

          <div className="maps-intro-card">
            <p>{t('socialPage.mapsAds.intro')}</p>
          </div>

          {/* Real Demo Showcase Section */}
          <div className="maps-demo-container">
            <div className="maps-demo-text">
              <span className="badge badge-primary">{t('socialPage.mapsAdsDemo.badge')}</span>
              <h3>{t('socialPage.mapsAdsDemo.title')}</h3>
              <p>{t('socialPage.mapsAdsDemo.desc')}</p>
              <div className="maps-demo-features">
                <div className="demo-feat-item">
                  <span className="feat-dot green"></span>
                  <span>{t('socialPage.mapsAdsDemo.feat1')}</span>
                </div>
                <div className="demo-feat-item">
                  <span className="feat-dot blue"></span>
                  <span>{t('socialPage.mapsAdsDemo.feat2')}</span>
                </div>
              </div>
            </div>
            <div className="maps-demo-mockup-wrapper">
              <div className="phone-mockup">
                <div className="phone-speaker"></div>
                <div className="phone-screen">
                  <img src={googleMapsAdsDemoImg} alt="Google Maps Ads Demo" className="phone-screenshot" />
                </div>
                <div className="phone-home-button"></div>
              </div>
            </div>
          </div>

          <div className="maps-ads-flex">
            {/* Card 1 */}
            <div className="maps-ads-card">
              <div className="maps-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3>{t('socialPage.mapsAds.reason1Title')}</h3>
              <p>{t('socialPage.mapsAds.reason1Desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="maps-ads-card">
              <div className="maps-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3>{t('socialPage.mapsAds.reason2Title')}</h3>
              <p>{t('socialPage.mapsAds.reason2Desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="maps-ads-card">
              <div className="maps-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>{t('socialPage.mapsAds.reason3Title')}</h3>
              <p>{t('socialPage.mapsAds.reason3Desc')}</p>
            </div>

            {/* Card 4 */}
            <div className="maps-ads-card">
              <div className="maps-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>{t('socialPage.mapsAds.reason4Title')}</h3>
              <p>{t('socialPage.mapsAds.reason4Desc')}</p>
            </div>

            {/* Card 5 */}
            <div className="maps-ads-card">
              <div className="maps-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>{t('socialPage.mapsAds.reason5Title')}</h3>
              <p>{t('socialPage.mapsAds.reason5Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Instagram Ads Section */}
      <section className="social-instagram-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('socialPage.instagramAds.title')}</h2>
            <p className="section-subtitle">
              {t('socialPage.instagramAds.subtitle')}
            </p>
          </div>

          <div className="instagram-intro-card">
            <p>{t('socialPage.instagramAds.intro')}</p>
          </div>

          {/* Instagram Ads Types Showcase */}
          <div className="instagram-demo-container">
            <div className="instagram-demo-text">
              <span className="badge badge-primary">{t('socialPage.instagramAds.demoBadge')}</span>
              <h3>{t('socialPage.instagramAds.demoTitle')}</h3>
              <p>{t('socialPage.instagramAds.demoDesc')}</p>
              <div className="instagram-demo-actions">
                <a href="#social-contact-form" className="btn btn-instagram-accent">
                  <span>Quảng cáo ngay</span>
                </a>
              </div>
            </div>
            <div className="instagram-demo-image-wrapper">
              <img src={instagramAdsTypesImg} alt="Các loại quảng cáo Instagram" className="instagram-demo-img" />
            </div>
          </div>

          <div className="instagram-ads-flex">
            {/* Card 1 */}
            <div className="instagram-ads-card">
              <div className="instagram-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3>{t('socialPage.instagramAds.reason1Title')}</h3>
              <p>{t('socialPage.instagramAds.reason1Desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="instagram-ads-card">
              <div className="instagram-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>{t('socialPage.instagramAds.reason2Title')}</h3>
              <p>{t('socialPage.instagramAds.reason2Desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="instagram-ads-card">
              <div className="instagram-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>{t('socialPage.instagramAds.reason3Title')}</h3>
              <p>{t('socialPage.instagramAds.reason3Desc')}</p>
            </div>

            {/* Card 4 */}
            <div className="instagram-ads-card">
              <div className="instagram-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>{t('socialPage.instagramAds.reason4Title')}</h3>
              <p>{t('socialPage.instagramAds.reason4Desc')}</p>
            </div>

            {/* Card 5 */}
            <div className="instagram-ads-card">
              <div className="instagram-ads-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 2.1l4 4-4 4"></path>
                  <path d="M3 12.2v-2a4 4 0 0 1 4-4h14M7 21.9l-4-4 4-4"></path>
                  <path d="M21 11.8v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </div>
              <h3>{t('socialPage.instagramAds.reason5Title')}</h3>
              <p>{t('socialPage.instagramAds.reason5Desc')}</p>
            </div>
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
