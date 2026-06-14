import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    salonName: '',
    location: '',
    service: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '34642805848' // VietSol WhatsApp number
    const serviceLabel = formData.service ? t(`contactPage.form.${formData.service}`) : t('contactPage.form.selectDefault')
    
    const message = `Chào Vietsol, tôi cần liên hệ tư vấn:\n- Họ tên: ${formData.name}\n- Số điện thoại: ${formData.phone}\n- Tên tiệm: ${formData.salonName}\n- Địa chỉ tiệm: ${formData.location || 'Không có'}\n- Dịch vụ quan tâm: ${serviceLabel}\n- Lời nhắn: ${formData.message || 'Không có'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    setFormSubmitted(true)
    setFormData({
      name: '',
      phone: '',
      salonName: '',
      location: '',
      service: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      {/* Decorative background glows */}
      <div className="contact-bg-glow"></div>
      <div className="contact-bg-glow-left"></div>

      <div className="container contact-container">
        {/* Hero Section */}
        <header className="contact-hero">
          <span className="section-label">{t('contactPage.hero.badge')}</span>
          <h1 className="section-title">
            {t('contactPage.hero.title1')} <br />
            <span>{t('contactPage.hero.title2')}</span>
          </h1>
          <p className="contact-hero__desc">
            {t('contactPage.hero.desc')}
          </p>
        </header>

        {/* Main Grid */}
        <div className="contact-grid">
          {/* Left Panel: Contact Info */}
          <aside className="contact-info-panel">
            <div className="contact-info-panel__header">
              <h2>{t('contactPage.info.title')}</h2>
              <p>{t('contactPage.info.desc')}</p>
            </div>

            {/* Address Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card__details">
                <h3>{t('contactPage.info.address')}</h3>
                <p>{t('contactPage.info.addressVal')}</p>
              </div>
            </div>

            {/* Hotline Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card__details">
                <h3>{t('contactPage.info.hotline')}</h3>
                <p>{t('contactPage.info.hotlineVal')}</p>
                <span>Hỗ trợ qua Phone, WhatsApp, Viber</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card__details">
                <h3>{t('contactPage.info.email')}</h3>
                <p>{t('contactPage.info.emailVal')}</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-card__details">
                <h3>{t('contactPage.info.hours')}</h3>
                <p>{t('contactPage.info.hoursVal')}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-section">
              <h3>{t('contactPage.info.social')}</h3>
              <div className="contact-social-links">
                <a href="https://www.facebook.com/vietsol.eu" className="contact-social-btn contact-social-btn--facebook" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://wa.me/34642805848" className="contact-social-btn contact-social-btn--whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="https://x.com/vietsoldigital" className="contact-social-btn contact-social-btn--x" target="_blank" rel="noreferrer" aria-label="Twitter/X">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Panel: Contact Form */}
          <main className="contact-form-panel">
            {formSubmitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>{t('contactPage.form.successTitle')}</h3>
                <p>{t('contactPage.form.successDesc')}</p>
                <button className="btn btn-primary btn-sm" onClick={() => setFormSubmitted(false)}>
                  <span>{t('webSeoPage.form.btnNewRequest')}</span>
                </button>
              </div>
            ) : (
              <>
                <h3>{t('contactPage.form.title')}</h3>
                <p>{t('contactPage.form.desc')}</p>

                <form className="contact-form" onSubmit={handleFormSubmit}>
                  {/* Name and Phone Row */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="name">{t('contactPage.form.labelName')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={t('contactPage.form.placeholderName')}
                        value={formData.name}
                        onChange={handleFormChange}
                        className="contact-form-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="phone">{t('contactPage.form.labelPhone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t('contactPage.form.placeholderPhone')}
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="contact-form-input"
                      />
                    </div>
                  </div>

                  {/* Salon Name and Location Row */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="salonName">{t('contactPage.form.labelSalonName')}</label>
                      <input
                        type="text"
                        id="salonName"
                        name="salonName"
                        required
                        placeholder={t('contactPage.form.placeholderSalon')}
                        value={formData.salonName}
                        onChange={handleFormChange}
                        className="contact-form-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="location">{t('contactPage.form.labelLocation')}</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder={t('contactPage.form.placeholderLocation')}
                        value={formData.location}
                        onChange={handleFormChange}
                        className="contact-form-input"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="contact-form-group">
                    <label htmlFor="service">{t('contactPage.form.labelService')}</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleFormChange}
                      className="contact-form-select"
                    >
                      <option value="">{t('contactPage.form.selectDefault')}</option>
                      <option value="selectServiceWeb">{t('contactPage.form.selectServiceWeb')}</option>
                      <option value="selectServiceMaps">{t('contactPage.form.selectServiceMaps')}</option>
                      <option value="selectServiceSocial">{t('contactPage.form.selectServiceSocial')}</option>
                      <option value="selectServiceYocheckin">{t('contactPage.form.selectServiceYocheckin')}</option>
                      <option value="selectServiceAll">{t('contactPage.form.selectServiceAll')}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="contact-form-group">
                    <label htmlFor="message">{t('contactPage.form.labelMessage')}</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t('contactPage.form.placeholderMessage')}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="contact-form-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary btn-block">
                    <span>{t('contactPage.form.btnSubmit')}</span>
                  </button>
                </form>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
