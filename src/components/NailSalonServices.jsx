import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import unasArtNailsImg from '../assets/unas_artnails.png'
import { useLanguage } from '../context/LanguageContext'
import './NailSalonServices.css'

// Demo templates data
const templatesData = [
  {
    id: 'luxe-nails',
    name: 'Luxe Nails & Spa',
    category: 'luxury',
    themeName: 'Hoàng Gia & Sang Trọng',
    colorHex: '#0d2b1d', // Emerald & Gold
    tag: 'Luxury',
    tagColor: '#d4af37',
    description: 'Phong cách quý phái với tông xanh lục bảo kết hợp nhũ vàng kim. Thích hợp cho salon phân khúc cao cấp.',
    features: ['Đặt lịch VIP trực tuyến', 'Trưng bày dịch vụ dạng Signature', 'Tích hợp Thẻ thành viên điện tử']
  },
  {
    id: 'glow-studio',
    name: 'Glow Studio',
    category: 'modern',
    themeName: 'Pastel Hồng & Modern',
    colorHex: '#fff0f2', // Soft Pink & Rose Gold
    tag: 'Modern',
    tagColor: '#ff7a90',
    description: 'Thiết kế trẻ trung, tươi sáng với tông màu hồng phấn và vàng hồng. Tập trung vào trải nghiệm đặt lịch nhanh trên mobile.',
    features: ['Trực quan hóa Insta Feed', 'Thanh toán đặt cọc online', 'Menu dịch vụ phân loại thông minh']
  },
  {
    id: 'zen-garden',
    name: 'Zen Garden Nails',
    category: 'natural',
    themeName: 'Thảo Mộc & Tự Nhiên',
    colorHex: '#f4f6f0', // Sage Green & Oak
    tag: 'Natural',
    tagColor: '#5a785a',
    description: 'Thiết kế mộc mạc mang cảm hứng thiên nhiên, sử dụng tông màu xanh xô thơm và vân gỗ nhẹ nhàng. Phù hợp tiệm Nails & Spa Organic.',
    features: ['Trình bày gói Combo thư giãn', 'Giới thiệu nguyên liệu thảo mộc', 'Nhận đánh giá Google tự động']
  },
  {
    id: 'neon-glitter',
    name: 'Neon Glitter Bar',
    category: 'modern',
    themeName: 'Neon Cyberpunk & Cá Tính',
    colorHex: '#0c0214', // Cyber Dark & Neon Pink
    tag: 'Vibrant',
    tagColor: '#bd00ff',
    description: 'Giao diện Dark Mode huyền bí với các dải màu neon phát sáng cuốn hút. Cực kỳ thích hợp cho các tiệm nail art nghệ thuật độc đáo.',
    features: ['Bộ sưu tập Nail Art cuộn vô hạn', 'Bảng xếp hạng mẫu hot tuần', 'Chat tư vấn WhatsApp 24/7']
  },
  {
    id: 'urban-polish',
    name: 'Urban Polish Lounge',
    category: 'luxury',
    themeName: 'Monochrome Đơn Sắc',
    colorHex: '#111111', // Matte Black & White
    tag: 'Luxury',
    tagColor: '#ffffff',
    description: 'Phong cách tối giản đương đại với độ tương phản cực cao (trắng/đen matte). Mang đến cảm giác thời thượng, cao cấp châu Âu.',
    features: ['Bố cục tối giản phong cách tạp chí', 'Tối ưu hóa hình ảnh độ nét cao', 'Kết nối đặt lịch tự động Google Calendar']
  },
  {
    id: 'blossom-boutique',
    name: 'Blossom Nail Boutique',
    category: 'natural',
    themeName: 'Floral & Ngọt Ngào',
    colorHex: '#fdf7f8', // Soft Rose & Floral
    tag: 'Natural',
    tagColor: '#e07a9b',
    description: 'Phong cách lãng mạn phủ sắc hoa anh đào dịu nhẹ. Mang lại cảm giác thư thái, thân thiện cho khách hàng nữ khi truy cập.',
    features: ['Tích hợp bản đồ trực quan', 'Trình bày đội ngũ thợ (Nail Artists)', 'Hệ thống review sao nội bộ']
  },
  {
    id: 'velvet-petals',
    name: 'Velvet Petals Spa',
    category: 'luxury',
    themeName: 'Đỏ Nhung & Cổ Điển',
    colorHex: '#26030c', // Maroon & Velvet
    tag: 'Luxury',
    tagColor: '#ff3e6c',
    description: 'Sử dụng gam màu đỏ nhung quyến rũ kết hợp với font chữ Serif cổ điển. Làm nổi bật các dịch vụ chăm sóc móng và massage chuyên sâu.',
    features: ['Bán Thẻ Quà Tặng (Gift Cards)', 'Tự động nhắc lịch hẹn qua SMS', 'Đăng ký nhận ưu đãi VIP qua Email']
  },
  {
    id: 'aura-holistics',
    name: 'Aura Holistics',
    category: 'natural',
    themeName: 'Lavender & Chữa Lành',
    colorHex: '#f6f4fa', // Lavender Soft
    tag: 'Natural',
    tagColor: '#967bb6',
    description: 'Tông màu tím Lavender dịu mát kết hợp màu kem đất ấm áp. Hướng tới các dịch vụ trị liệu móng tự nhiên và chăm sóc sức khỏe.',
    features: ['Trang blog chia sẻ mẹo dưỡng móng', 'Form khảo sát tình trạng móng', 'Bộ lọc tìm kiếm dịch vụ thông minh']
  },
  {
    id: 'chic-co',
    name: 'Chic & Co. Studio',
    category: 'luxury',
    themeName: 'Thời Trang & Tạp Chí',
    colorHex: '#fafafa', // Warm white & Thin border
    tag: 'Luxury',
    tagColor: '#111111',
    description: 'Thiết kế lưới (grid-based layout) cá tính phối hợp chữ nghệ thuật Serif nổi bật. Rất phù hợp cho các Nail Artist muốn khoe tác phẩm độc quyền.',
    features: ['Slider tác phẩm độ phân giải cao', 'Liên kết trực tiếp Booking Link', 'Ưu tiên hiển thị feedback khách hàng']
  },
  {
    id: 'tiny-pixie',
    name: 'Tiny Pixie Nails',
    category: 'modern',
    themeName: 'Whimsical & Nhí Nhảnh',
    colorHex: '#fcfaf0', // Pale Yellow & Sky Blue
    tag: 'Vibrant',
    tagColor: '#00bcd4',
    description: 'Phong cách thiết kế hoạt họa vui tươi, màu sắc tươi tắn như vàng nhạt và xanh dương. Tạo sự gần gũi, năng động cho các tiệm vẽ móng hoạt hình.',
    features: ['Danh mục phân loại Nail Art theo chủ đề', 'Tính năng Like/Lưu mẫu móng yêu thích', 'Bảng tính giá tự động theo yêu cầu']
  }
]

export default function NailSalonServices() {
  const { t } = useLanguage()
  const location = useLocation()
  const [selectedTemplateForForm, setSelectedTemplateForForm] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    salonName: '',
    location: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Scroll to top on mount & read query parameter for template selection
  useEffect(() => {
    window.scrollTo(0, 0)

    // Check if there is a selectTemplate query parameter
    const params = new URLSearchParams(location.search)
    const templateParam = params.get('selectTemplate')
    if (templateParam) {
      const timer = setTimeout(() => {
        setSelectedTemplateForForm(templateParam)
        const formSection = document.getElementById('nails-contact-form')
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '34642805848'
    const message = `Chào Vietsol, tôi muốn nhận tư vấn thiết kế Web & SEO Nails:\n- Họ tên: ${formData.name}\n- Số điện thoại: ${formData.phone}\n- Tên tiệm: ${formData.salonName}\n- Địa chỉ tiệm: ${formData.location || 'Không có'}\n- Mẫu website đã chọn: ${selectedTemplateForForm || 'Tự chọn/Tư vấn thêm'}\n- Lời nhắn: ${formData.message || 'Không có'}`
    
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
    <div className="nails-service-page">
      {/* 1. Hero Section */}
      <section className="nails-hero">
        <div className="container nails-hero__grid">
          <div className="nails-hero__content">
            <span className="badge badge-primary">{t('webSeoPage.hero.badge')}</span>
            <h1 className="nails-hero__title">
              {t('webSeoPage.hero.title1')} <br />
              <span>{t('webSeoPage.hero.title2')}</span>
            </h1>
            <p className="nails-hero__lead">
              {t('webSeoPage.hero.desc')}
            </p>
            <div className="nails-hero__actions">
              <a href="https://www.unasartnails.es/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <span>{t('webSeoPage.hero.btnDemo')}</span>
              </a>
              <a href="#nails-contact-form" className="btn btn-secondary btn-lg">
                <span>{t('webSeoPage.hero.btnConsult')}</span>
              </a>
            </div>
          </div>
          <div className="nails-hero__image-container">
            <img src={unasArtNailsImg} alt="Unas ArtNails Preview" className="nails-hero__preview-img" />
          </div>
        </div>
      </section>

      {/* 1.5. Web & Hosting Pricing Section */}
      <section className="nails-web-hosting-pricing container">
        <div className="web-hosting-pricing-header">
          <h2 className="web-hosting-title">
            <span className="gold-bar"></span>
            {t('webSeoPage.hostingPricing.title')}
          </h2>
        </div>

        <div className="web-hosting-cards-grid">
          {/* Card 1: 1 Year Package */}
          <div className="web-hosting-card pkg-white">
            <span className="card-package-label">{t('webSeoPage.hostingPricing.pkg1Label')}</span>
            <h3 className="card-package-name">{t('webSeoPage.hostingPricing.pkg1Name')}</h3>
            <div className="card-package-price">{t('webSeoPage.hostingPricing.pkg1Price')}</div>
            <div className="card-price-divider"></div>
            <ul className="card-features-list">
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat1')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat2')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat3')}
              </li>
            </ul>
          </div>

          {/* Card 2: 3 Year Package */}
          <div className="web-hosting-card pkg-blue">
            <span className="card-package-label">{t('webSeoPage.hostingPricing.pkg2Label')}</span>
            <h3 className="card-package-name">{t('webSeoPage.hostingPricing.pkg2Name')}</h3>
            <div className="card-package-price">{t('webSeoPage.hostingPricing.pkg2Price')}</div>
            <div className="card-price-divider"></div>
            <ul className="card-features-list">
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat1')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat2')}
              </li>
              <li>
                <span className="check-icon">✔</span>
                {t('webSeoPage.hostingPricing.feat3_3yr')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. SEO Pricing Table Section */}
      <section className="nails-pricing-table-section container">
        <div className="seo-pricing-card">
          {/* Header Row */}
          <div className="nails-pricing-header-row">
            <div className="pricing-brand-col">
              <div className="pricing-brand-logo-wrap">
                <div className="pricing-brand-logo">
                  <span className="brand-mac">VIETSOL</span>
                  <span className="brand-usa">DIGITAL</span>
                </div>
                <span className="brand-marketing">MARKETING</span>
              </div>
              <h2 className="pricing-brand-title">PRICING TABLE FOR<br />NAIL SALON</h2>
            </div>

            <div className="pricing-title-banner">
              <span className="banner-title">{t('webSeoPage.seoPricingTable.brandSubtitle')}</span>
              <span className="banner-subtitle">{t('webSeoPage.seoPricingTable.brandSupport')}</span>
            </div>
          </div>

          {/* SEO WEB SERVICE SECTION */}
          <div className="seo-web-service-container">
            {/* Header Columns row */}
            <div className="seo-web-service-header-row">
              <div className="web-service-title-cell">
                <span>{t('webSeoPage.seoPricingTable.webServiceTitle')}</span>
              </div>
              <div className="package-header-cell top10">
                <span className="pkg-label">TOP 10</span>
                <span className="pkg-price">$79</span>
                <span className="pkg-period">{t('webSeoPage.seoPricingTable.period')}</span>
              </div>
              <div className="package-header-cell top5">
                <span className="pkg-label">TOP 5</span>
                <span className="pkg-price">$139</span>
                <span className="pkg-period">{t('webSeoPage.seoPricingTable.period')}</span>
              </div>
              <div className="package-header-cell top3">
                <span className="pkg-label">TOP 3</span>
                <span className="pkg-price">$299+</span>
                <span className="pkg-period">{t('webSeoPage.seoPricingTable.period')}</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="seo-web-service-row row-white">
              <div className="row-desc-cell">
                {t('webSeoPage.seoPricingTable.webRow1')}
              </div>
              <div className="row-val-cell" data-label="TOP 10"><span className="checkmark-green">✔</span></div>
              <div className="row-val-cell pkg-highlight-cell" data-label="TOP 5"><span className="checkmark-green">✔</span></div>
              <div className="row-val-cell" data-label="TOP 3"><span className="checkmark-green">✔</span></div>
            </div>

            {/* Row 2 */}
            <div className="seo-web-service-row row-grey">
              <div className="row-desc-cell">
                <span>
                  {t('webSeoPage.seoPricingTable.webRow2')}
                </span>
              </div>
              <div className="row-val-cell font-small" data-label="TOP 10">{t('webSeoPage.seoPricingTable.top10Desc')}</div>
              <div className="row-val-cell font-small pkg-highlight-cell" data-label="TOP 5">{t('webSeoPage.seoPricingTable.top5Desc')}</div>
              <div className="row-val-cell font-small" data-label="TOP 3">{t('webSeoPage.seoPricingTable.top3Desc')}</div>
            </div>
          </div>

          {/* SEO MAP SERVICE SECTION */}
          <div className="seo-map-service-container">
            {/* Header Columns row */}
            <div className="seo-map-service-header-row">
              <div className="map-service-title-cell">
                <span>{t('webSeoPage.seoPricingTable.mapServiceTitle')}</span>
              </div>
              <div className="package-header-cell-map">
                <span className="pkg-label-map">TOP 3 $ 299</span>
                <span className="pkg-period-map">{t('webSeoPage.seoPricingTable.period')}</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="seo-map-service-row row-white">
              <div className="row-desc-cell-map">
                {t('webSeoPage.seoPricingTable.mapRow1')}
              </div>
              <div className="row-col-val-map" data-label="TOP 3 MAP"><span className="checkmark-green">✔</span></div>
            </div>

            {/* Row 2 */}
            <div className="seo-map-service-row row-grey">
              <div className="row-desc-cell-map">
                <span>
                  {t('webSeoPage.seoPricingTable.mapRow2')}
                </span>
              </div>
              <div className="row-col-val-map font-small" data-label="TOP 3 MAP">{t('webSeoPage.seoPricingTable.top3MapDesc')}</div>
            </div>
          </div>

          {/* Bottom Notes */}
          <div className="seo-pricing-footer-notes">
            <p className="note-text red-note">
              {t('webSeoPage.seoPricingTable.noteRed')}
            </p>
            <p className="note-text blue-note">
              {t('webSeoPage.seoPricingTable.noteBlue')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service Pillars Section */}
      <section className="nails-pillars container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('webSeoPage.pillars.title')}</h2>
          <p className="section-subtitle">{t('webSeoPage.pillars.subtitle')}</p>
        </div>

        <div className="nails-pillars__grid">
          {/* Card 1: Web Design */}
          <div className="nails-pillar-card">
            <div className="nails-pillar-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>{t('webSeoPage.pillars.pillar1Title')}</h3>
            <p>{t('webSeoPage.pillars.pillar1Desc')}</p>
            <ul>
              <li>{t('webSeoPage.pillars.pillar1Feat1')}</li>
              <li>{t('webSeoPage.pillars.pillar1Feat2')}</li>
              <li>{t('webSeoPage.pillars.pillar1Feat3')}</li>
            </ul>
          </div>

          {/* Card 2: Local SEO */}
          <div className="nails-pillar-card">
            <div className="nails-pillar-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3>{t('webSeoPage.pillars.pillar2Title')}</h3>
            <p>{t('webSeoPage.pillars.pillar2Desc')}</p>
            <ul>
              <li>{t('webSeoPage.pillars.pillar2Feat1')}</li>
              <li>{t('webSeoPage.pillars.pillar2Feat2')}</li>
              <li>{t('webSeoPage.pillars.pillar2Feat3')}</li>
            </ul>
          </div>

          {/* Card 3: Google Maps SEO */}
          <div className="nails-pillar-card">
            <div className="nails-pillar-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>{t('webSeoPage.pillars.pillar3Title')}</h3>
            <p>{t('webSeoPage.pillars.pillar3Desc')}</p>
            <ul>
              <li>{t('webSeoPage.pillars.pillar3Feat1')}</li>
              <li>{t('webSeoPage.pillars.pillar3Feat2')}</li>
              <li>{t('webSeoPage.pillars.pillar3Feat3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Quality Comparison Section */}
      <section className="nails-comparison container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('webSeoPage.comparison.title')}</h2>
          <p className="section-subtitle">{t('webSeoPage.comparison.subtitle')}</p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{t('webSeoPage.comparison.featCol')}</th>
                <th className="vietsol-column">{t('webSeoPage.comparison.vietsolCol')}</th>
                <th className="other-column">{t('webSeoPage.comparison.otherCol')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{t('webSeoPage.comparison.row1Title')}</strong></td>
                <td className="vietsol-cell">{t('webSeoPage.comparison.row1Vietsol')}</td>
                <td className="other-cell">{t('webSeoPage.comparison.row1Other')}</td>
              </tr>
              <tr>
                <td><strong>{t('webSeoPage.comparison.row2Title')}</strong></td>
                <td className="vietsol-cell">{t('webSeoPage.comparison.row2Vietsol')}</td>
                <td className="other-cell">{t('webSeoPage.comparison.row2Other')}</td>
              </tr>
              <tr>
                <td><strong>{t('webSeoPage.comparison.row3Title')}</strong></td>
                <td className="vietsol-cell">{t('webSeoPage.comparison.row3Vietsol')}</td>
                <td className="other-cell">{t('webSeoPage.comparison.row3Other')}</td>
              </tr>
              <tr>
                <td><strong>{t('webSeoPage.comparison.row4Title')}</strong></td>
                <td className="vietsol-cell">{t('webSeoPage.comparison.row4Vietsol')}</td>
                <td className="other-cell">{t('webSeoPage.comparison.row4Other')}</td>
              </tr>
              <tr>
                <td><strong>{t('webSeoPage.comparison.row5Title')}</strong></td>
                <td className="vietsol-cell">{t('webSeoPage.comparison.row5Vietsol')}</td>
                <td className="other-cell">{t('webSeoPage.comparison.row5Other')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Workflow Section */}
      <section className="nails-workflow">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('webSeoPage.workflow.title')}</h2>
            <p className="section-subtitle">{t('webSeoPage.workflow.subtitle')}</p>
          </div>

          <div className="nails-workflow__grid">
            <div className="workflow-step">
              <div className="step-num">01</div>
              <h3>{t('webSeoPage.workflow.step1Title')}</h3>
              <p>{t('webSeoPage.workflow.step1Desc')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">02</div>
              <h3>{t('webSeoPage.workflow.step2Title')}</h3>
              <p>{t('webSeoPage.workflow.step2Desc')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">03</div>
              <h3>{t('webSeoPage.workflow.step3Title')}</h3>
              <p>{t('webSeoPage.workflow.step3Desc')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">04</div>
              <h3>{t('webSeoPage.workflow.step4Title')}</h3>
              <p>{t('webSeoPage.workflow.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Registration Form Section */}
      <section id="nails-contact-form" className="nails-contact-section container">
        <div className="nails-contact__grid">
          <div className="nails-contact__info">
            <span className="badge badge-primary">{t('webSeoPage.form.badge')}</span>
            <h2>{t('webSeoPage.form.title')}</h2>
            <p>{t('webSeoPage.form.desc')}</p>
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
            <div className="info-item">
              <span className="info-icon">💬</span>
              <div>
                <strong>{t('webSeoPage.form.directConsult')}</strong>
                <p>{t('webSeoPage.form.directConsultVal')}</p>
              </div>
            </div>
          </div>

          <div className="nails-contact__form-wrapper">
            <h3>{t('webSeoPage.form.formTitle')}</h3>
            {formSubmitted ? (
              <div className="form-success-alert">
                <h4>{t('webSeoPage.form.successTitle')}</h4>
                <p>{t('webSeoPage.form.successDesc')}</p>
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
                  <label htmlFor="selectedTemplate">{t('webSeoPage.form.labelTemplate')}</label>
                  <select
                    id="selectedTemplate"
                    name="selectedTemplate"
                    value={selectedTemplateForForm}
                    onChange={(e) => setSelectedTemplateForForm(e.target.value)}
                  >
                    <option value="">{t('webSeoPage.form.selectDefault')}</option>
                    {templatesData.map((tpl) => (
                      <option key={tpl.id} value={tpl.name}>
                        {tpl.name} ({tpl.themeName})
                      </option>
                    ))}
                  </select>
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
