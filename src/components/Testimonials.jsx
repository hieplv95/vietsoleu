import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Phần mềm YoCheckIn giúp tiệm mình tăng lượng đánh giá Google Maps từ 12 lên 89 chỉ trong 2 tháng. Khách hàng quay lại nhiều hơn rõ rệt!',
    name: 'Chị Hoa Nguyễn',
    role: 'Chủ tiệm Nails Paris Beauty',
    location: 'Paris, Pháp',
    stat: '+640%',
    statLabel: 'đánh giá Google Maps',
    avatar: '👩',
  },
  {
    quote: 'SMS tự động gửi nhắc nhở khách lâu không quay lại — tỷ lệ khách quay lại tăng lên 35%. Đội ngũ hỗ trợ rất nhiệt tình và nói tiếng Việt!',
    name: 'Anh Tuấn Lê',
    role: 'Chủ tiệm Nails Royal',
    location: 'Brussels, Bỉ',
    stat: '+35%',
    statLabel: 'tỷ lệ khách quay lại',
    avatar: '👨',
  },
  {
    quote: 'Hệ thống tích điểm rất được lòng khách hàng. Họ cảm thấy được trân trọng và hay giới thiệu bạn bè đến tiệm nhiều hơn.',
    name: 'Chị Mai Trần',
    role: 'Chủ tiệm Nails Luxury',
    location: 'Amsterdam, Hà Lan',
    stat: '+52%',
    statLabel: 'khách hàng mới từ giới thiệu',
    avatar: '👩',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials__bg"></div>
      <div className="container">
        <div className="text-center">
          <div className="section-label">Customer Testimonials</div>
          <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
          <p className="section-desc">
            Hàng trăm chủ tiệm Nails người Việt tại Châu Âu đang tin dùng giải pháp của Vietsol.
          </p>
        </div>

        <div className="testimonials__main">
          {/* Featured testimonial */}
          <div className="testimonials__featured card">
            <div className="testimonials__quote-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M13 6H7a1 1 0 00-1 1v6a1 1 0 001 1h3l-3 6h4l4-7V7a1 1 0 00-1-1zM25 6h-6a1 1 0 00-1 1v6a1 1 0 001 1h3l-3 6h4l4-7V7a1 1 0 00-1-1z" fill="url(#quote-grad)"/>
                <defs>
                  <linearGradient id="quote-grad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#6c47ff"/>
                    <stop offset="1" stopColor="#00d4b1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="testimonials__text">{testimonials[active].quote}</p>
            <div className="testimonials__stat">
              <div className="testimonials__stat-value">{testimonials[active].stat}</div>
              <div className="testimonials__stat-label">{testimonials[active].statLabel}</div>
            </div>
            <div className="testimonials__author">
              <div className="testimonials__avatar">{testimonials[active].avatar}</div>
              <div>
                <div className="testimonials__name">{testimonials[active].name}</div>
                <div className="testimonials__role">{testimonials[active].role}</div>
                <div className="testimonials__location">📍 {testimonials[active].location}</div>
              </div>
              <div className="testimonials__stars">
                {'⭐'.repeat(5)}
              </div>
            </div>
          </div>

          {/* Nav cards */}
          <div className="testimonials__nav">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonials__nav-card ${active === i ? 'testimonials__nav-card--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="testimonials__nav-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonials__nav-name">{t.name}</div>
                  <div className="testimonials__nav-location">{t.location}</div>
                </div>
                <div className="testimonials__nav-stat">{t.stat}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
