import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import unasArtNailsImg from '../assets/unas_artnails.png'
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
    features: ['Bộ sưu tập Nail Art cuộn vô hạn', 'Bảng xếp hạng mẫu hot tuần', 'Chat tư vấn Zalo/WhatsApp 24/7']
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
    <div className="nails-service-page">
      {/* 1. Hero Section */}
      <section className="nails-hero">
        <div className="container nails-hero__grid">
          <div className="nails-hero__content">
            <span className="badge badge-primary">Giải Pháp Toàn Diện Cho Tiệm Nails</span>
            <h1 className="nails-hero__title">
              Thiết Kế Website Salon Nails <br />
              <span>Chuẩn SEO Google Maps</span>
            </h1>
            <p className="nails-hero__lead">
              Nâng tầm thương hiệu, thu hút hàng trăm khách hàng bản địa tìm kiếm mỗi tháng. Tích hợp đặt lịch tự động, tối ưu hóa hiển thị Bản đồ giúp tăng lượt ghé tiệm thực tế từ 30% - 50%.
            </p>
            <div className="nails-hero__actions">
              <a href="https://www.unasartnails.es/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <span>Xem Mẫu Website Thật</span>
              </a>
              <a href="#nails-contact-form" className="btn btn-secondary btn-lg">
                <span>Nhận Tư Vấn Miễn Phí</span>
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
            1. DỊCH VỤ THIẾT KẾ WEBSITE + HOSTING
          </h2>
        </div>

        <div className="web-hosting-cards-grid">
          {/* Card 1: 1 Year Package */}
          <div className="web-hosting-card pkg-white">
            <span className="card-package-label">Package 1</span>
            <h3 className="card-package-name">GÓI 1 NĂM</h3>
            <div className="card-package-price">350€</div>
            <div className="card-price-divider"></div>
            <ul className="card-features-list">
              <li>
                <span className="check-icon">✔</span>
                Lựa chọn mẫu website theo tiêu chuẩn SEO
              </li>
              <li>
                <span className="check-icon">✔</span>
                Thiết kế hiện đại, theo yêu cầu
              </li>
              <li>
                <span className="check-icon">✔</span>
                Set up Domain & Hosting 1 năm
              </li>
            </ul>
          </div>

          {/* Card 2: 3 Year Package */}
          <div className="web-hosting-card pkg-blue">
            <span className="card-package-label">Package 2</span>
            <h3 className="card-package-name">GÓI 3 NĂM</h3>
            <div className="card-package-price">650€</div>
            <div className="card-price-divider"></div>
            <ul className="card-features-list">
              <li>
                <span className="check-icon">✔</span>
                Lựa chọn mẫu website theo tiêu chuẩn SEO
              </li>
              <li>
                <span className="check-icon">✔</span>
                Thiết kế hiện đại, theo yêu cầu
              </li>
              <li>
                <span className="check-icon">✔</span>
                Set up Domain & Hosting 3 năm
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
                  <span className="brand-mac">MAC</span>
                  <span className="brand-usa">USA</span>
                </div>
                <span className="brand-marketing">MARKETING</span>
              </div>
              <h2 className="pricing-brand-title">PRICING TABLE FOR<br />NAIL SALON</h2>
            </div>

            <div className="pricing-title-banner">
              <span className="banner-title">SEO SERVICES</span>
              <span className="banner-subtitle">1 STEP SUPPORT</span>
            </div>
          </div>

          {/* SEO WEB SERVICE SECTION */}
          <div className="seo-web-service-container">
            {/* Header Columns row */}
            <div className="seo-web-service-header-row">
              <div className="web-service-title-cell">
                <span>SEO WEB SERVICE</span>
              </div>
              <div className="package-header-cell top10">
                <span className="pkg-label">TOP 10</span>
                <span className="pkg-price">$79</span>
                <span className="pkg-period">per month</span>
              </div>
              <div className="package-header-cell top5">
                <span className="pkg-label">TOP 5</span>
                <span className="pkg-price">$139</span>
                <span className="pkg-period">per month</span>
              </div>
              <div className="package-header-cell top3">
                <span className="pkg-label">TOP 3</span>
                <span className="pkg-price">$299+</span>
                <span className="pkg-period">per month</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="seo-web-service-row row-white">
              <div className="row-desc-cell">
                Create content + design photo to post on website and increase the website traffic
              </div>
              <div className="row-val-cell" data-label="TOP 10"><span className="checkmark-green">✔</span></div>
              <div className="row-val-cell pkg-highlight-cell" data-label="TOP 5"><span className="checkmark-green">✔</span></div>
              <div className="row-val-cell" data-label="TOP 3"><span className="checkmark-green">✔</span></div>
            </div>

            {/* Row 2 */}
            <div className="seo-web-service-row row-grey">
              <div className="row-desc-cell">
                <span>
                  <strong>Keyword:</strong> Nail Salon near me, Nail salon + zip code, Nail salon + city, Nail salon + area...
                </span>
              </div>
              <div className="row-val-cell font-small" data-label="TOP 10">1-2 keywords on top 10 of Google Web</div>
              <div className="row-val-cell font-small pkg-highlight-cell" data-label="TOP 5">1-3 keywords on top 5 of Google Web</div>
              <div className="row-val-cell font-small" data-label="TOP 3">1-3 keywords on top 3 Google Web</div>
            </div>
          </div>

          {/* SEO MAP SERVICE SECTION */}
          <div className="seo-map-service-container">
            {/* Header Columns row */}
            <div className="seo-map-service-header-row">
              <div className="map-service-title-cell">
                <span>SEO MAP SERVICE</span>
              </div>
              <div className="package-header-cell-map">
                <span className="pkg-label-map">TOP 3 $ 299</span>
                <span className="pkg-period-map">per month</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="seo-map-service-row row-white">
              <div className="row-desc-cell-map">
                Ensure page quality, attract customer to Google Business Profile
              </div>
              <div className="row-col-val-map-empty"></div>
              <div className="row-col-val-map-empty"></div>
              <div className="row-col-val-map" data-label="TOP 3 MAP"><span className="checkmark-green">✔</span></div>
            </div>

            {/* Row 2 */}
            <div className="seo-map-service-row row-grey">
              <div className="row-desc-cell-map">
                <span>
                  <strong>Keyword:</strong> Nail Salon /Manicure /Pedicure near me, Nail Salon /Manicure /Pedicure + zip code, Nail Salon /Manicure /Pedicure + city
                </span>
              </div>
              <div className="row-col-val-map-empty"></div>
              <div className="row-col-val-map-empty"></div>
              <div className="row-col-val-map font-small" data-label="TOP 3 MAP">1-3 keywords on top 3 Google MAP</div>
            </div>
          </div>

          {/* Bottom Notes */}
          <div className="seo-pricing-footer-notes">
            <p className="note-text red-note">
              <strong>NOTE:</strong> Pay every 6 months. Guaranteed result. If we can't deliver the SEO result within 6 months, we will refund 100%.
            </p>
            <p className="note-text blue-note">
              After 6 months, we highly recommend you to maintain the service to keep your ranking at the 20% Discounted price.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service Pillars Section */}
      <section className="nails-pillars container">
        <div className="section-header text-center">
          <h2 className="section-title">Tại Sao Cửa Hàng Nails Của Bạn Cần Giải Pháp Này?</h2>
          <p className="section-subtitle">Kết hợp hoàn hảo giữa giao diện đặt lịch sang trọng và kỹ thuật tối ưu địa phương để mang lại khách hàng thực tế.</p>
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
            <h3>Thiết Kế Web Nails Độc Quyền</h3>
            <p>
              Giao diện tối ưu di động với các gam màu sang trọng, pastel phù hợp với ngành làm đẹp. Tích hợp trực tiếp hệ thống Booking (đặt hẹn) mượt mà giúp giảm 80% thời gian trả lời tin nhắn.
            </p>
            <ul>
              <li>⚡ Tốc độ tải trang dưới 1.2s</li>
              <li>📅 Tích hợp Acuity / Square / Setmore</li>
              <li>🎨 Bảng menu hình ảnh móng tay cực sắc nét</li>
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
            <h3>Tối Ưu SEO Local Từ Khóa</h3>
            <p>
              Đưa website của tiệm móng đứng top đầu Google khi khách hàng địa phương tìm kiếm các cụm từ khóa "Nail salon near me", "Tiệm nails uy tín", "Vẽ móng nghệ thuật".
            </p>
            <ul>
              <li>🎯 Nghiên cứu từ khóa hành vi của khách hàng tiệm nails</li>
              <li>✍️ Viết bài giới thiệu dịch vụ chuẩn cấu trúc Schema</li>
              <li>🔗 Xây dựng hệ thống backlinks địa lý bản địa</li>
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
            <h3>SEO Google Maps (Google My Business)</h3>
            <p>
              Tối ưu hồ sơ doanh nghiệp để hiển thị trong top 3 kết quả tìm kiếm bản đồ. Hướng dẫn thiết lập hệ thống tự động xin đánh giá 5 sao từ khách hàng vừa làm xong dịch vụ.
            </p>
            <ul>
              <li>📍 Đóng ghim tọa độ chuẩn xác trên bản đồ</li>
              <li>⭐ Quy trình tăng đánh giá 5 sao an toàn, tự động</li>
              <li>📸 Tải lên hình ảnh tiệm móng định vị GPS ẩn</li>
            </ul>
          </div>
        </div>
      </section>





      {/* 5. Quality Comparison Section */}
      <section className="nails-comparison container">
        <div className="section-header text-center">
          <span className="badge badge-primary">So Sánh Thực Tế</span>
          <h2 className="section-title">Điểm Khác Biệt Của Website Nails Vietsol</h2>
          <p className="section-subtitle">Vì sao website của chúng tôi giúp bạn tăng doanh thu thực chất thay vì chỉ là trang giới thiệu tĩnh.</p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tính Năng / Đặc Điểm</th>
                <th className="vietsol-column">Website Vietsol</th>
                <th className="other-column">Website Giá Rẻ Thông Thường</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hệ Thống Đặt Hẹn (Booking)</strong></td>
                <td className="vietsol-cell">✓ Tích hợp trực quan, nhắc lịch tự động qua SMS/Email giúp giảm 90% số lượng khách bùng lịch.</td>
                <td className="other-cell">✗ Không có hoặc chỉ là form gửi email liên hệ tĩnh, chủ tiệm phải gọi điện xác nhận lại.</td>
              </tr>
              <tr>
                <td><strong>Tối Ưu SEO & Bản Đồ Google</strong></td>
                <td className="vietsol-cell">✓ Cấu trúc mã nguồn chuẩn SEO Schema Local, liên kết chặt chẽ Maps để hiển thị Top 3 tìm kiếm.</td>
                <td className="other-cell">✗ Không được tối ưu, Google Maps không đồng bộ, website không xuất hiện khi tìm kiếm.</td>
              </tr>
              <tr>
                <td><strong>Tốc Độ Tải Trang & Giao Diện Mobile</strong></td>
                <td className="vietsol-cell">✓ Tốc độ cực nhanh dưới 1.5 giây, thiết kế tối giản ưu tiên 100% người dùng thao tác trên điện thoại.</td>
                <td className="other-cell">✗ Tải chậm trên 5s, bố cục vỡ khi xem trên điện thoại gây mất 50% số khách hàng tiềm năng.</td>
              </tr>
              <tr>
                <td><strong>Trình Quản Lý Mẫu Móng & Giá Cả</strong></td>
                <td className="vietsol-cell">✓ Hệ thống quản lý hình ảnh sinh động trực quan dễ chỉnh sửa giá dịch vụ, thêm bớt album móng.</td>
                <td className="other-cell">✗ Giao diện quản lý khó dùng hoặc không có, mỗi lần sửa đổi giá đều phải thuê code lại.</td>
              </tr>
              <tr>
                <td><strong>Chi Phí Trực Tuyến & Cọc Lịch</strong></td>
                <td className="vietsol-cell">✓ Cho phép cấu hình cọc trước để giữ chỗ qua Stripe/PayPal. Không tính phí trên mỗi lượt đặt hẹn.</td>
                <td className="other-cell">✗ Hoặc không hỗ trợ cọc trước, hoặc sử dụng dịch vụ trung gian đắt đỏ lấy phí hoa hồng % booking.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Workflow Section */}
      <section className="nails-workflow">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Quy Trình Triển Khai 4 Bước Tinh Gọn</h2>
            <p className="section-subtitle">Chúng tôi chuẩn bị kỹ lưỡng mọi khâu để bàn giao website và kích hoạt SEO Maps nhanh chóng chỉ trong 7 đến 10 ngày.</p>
          </div>

          <div className="nails-workflow__grid">
            <div className="workflow-step">
              <div className="step-num">01</div>
              <h3>Tư Vấn & Chọn Mẫu</h3>
              <p>Khảo sát nhu cầu thực tế của tiệm, phân tích đối thủ cạnh tranh tại địa phương và chọn mẫu giao diện nails tối ưu nhất.</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">02</div>
              <h3>Thiết Kế & Tích Hợp Đặt Lịch</h3>
              <p>Xây dựng nội dung website, tải ảnh mẫu móng của riêng tiệm, cấu hình menu giá và kết nối hệ thống Booking tự động.</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">03</div>
              <h3>Tối Ưu SEO Maps Địa Phương</h3>
              <p>Đồng bộ thông tin doanh nghiệp, xác minh tọa độ bản đồ, viết bài tối ưu hóa từ khóa local để chuẩn bị cho chiến dịch đẩy top Google.</p>
            </div>
            <div className="workflow-step">
              <div className="step-num">04</div>
              <h3>Bàn Giao & Hướng Dẫn Vận Hành</h3>
              <p>Hướng dẫn chủ tiệm cách xem lịch đặt hẹn trên điện thoại, cách phản hồi đánh giá Maps và cập nhật hình ảnh móng mới.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Registration Form Section */}
      <section id="nails-contact-form" className="nails-contact-section container">
        <div className="nails-contact__grid">
          <div className="nails-contact__info">
            <span className="badge badge-primary">Liên Hệ Ngay</span>
            <h2>Bắt Đầu Đưa Tiệm Nails Của Bạn Lên Bản Đồ Số!</h2>
            <p>
              Hãy điền thông tin bên cạnh để nhận cuộc gọi tư vấn miễn phí phân tích thứ hạng SEO tiệm nails của bạn trên Google Maps tại khu vực đang hoạt động.
            </p>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Hotline / Zalo hỗ trợ:</strong>
                <p>+32 472 90 28 34 (Hỗ trợ chủ tiệm Nails toàn châu Âu & Mỹ)</p>
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
                <strong>Tư vấn trực tiếp:</strong>
                <p>Hỗ trợ Setup tích hợp Booking qua Zalo / Viber / WhatsApp nhanh chóng.</p>
              </div>
            </div>
          </div>

          <div className="nails-contact__form-wrapper">
            <h3>Đăng Ký Tư Vấn & Nhận Demo Bản Đầy Đủ</h3>
            {formSubmitted ? (
              <div className="form-success-alert">
                <h4>🎉 Đăng ký thành công!</h4>
                <p>Cảm ơn anh/chị đã quan tâm. Đội ngũ Vietsol sẽ liên hệ hỗ trợ phân tích SEO tiệm nails của anh/chị qua SĐT/Zalo trong thời gian sớm nhất.</p>
                <button className="btn btn-primary btn-sm" onClick={() => setFormSubmitted(false)}>
                  <span>Gửi yêu cầu mới</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và Tên chủ tiệm *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ví dụ: Nguyễn Thị Mai"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Số Điện Thoại / WhatsApp / Zalo *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Ví dụ: +49 123 456 789 hoặc SĐT Việt Nam"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salonName">Tên Tiệm Nails (Salon Name) *</label>
                  <input
                    type="text"
                    id="salonName"
                    name="salonName"
                    required
                    placeholder="Ví dụ: Lily Blossom Nails & Spa"
                    value={formData.salonName}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Địa Chỉ Tiệm Nails (Thành phố / Quốc gia)</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Ví dụ: München, Germany"
                    value={formData.location}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="selectedTemplate">Mẫu Website Đã Chọn</label>
                  <select
                    id="selectedTemplate"
                    name="selectedTemplate"
                    value={selectedTemplateForForm}
                    onChange={(e) => setSelectedTemplateForForm(e.target.value)}
                  >
                    <option value="">-- Chưa chọn (Tư vấn thêm) --</option>
                    {templatesData.map((tpl) => (
                      <option key={tpl.id} value={tpl.name}>
                        {tpl.name} ({tpl.themeName})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Lời nhắn hoặc yêu cầu riêng (Ví dụ: Tiệm cần tích hợp đặt lịch Acuity)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Nhập lời nhắn của bạn..."
                    value={formData.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Gửi Đăng Ký Ngay</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
