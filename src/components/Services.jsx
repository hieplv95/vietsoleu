import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 8h4M7 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#6c47ff',
    title: 'Xây dựng Website & App',
    desc: 'Thiết kế website chuyên nghiệp, chuẩn SEO, tối ưu trên mọi thiết bị. Phù hợp với thương hiệu và phong cách của từng tiệm Nails tại Châu Âu.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1.2" fill="currentColor"/>
      </svg>
    ),
    color: '#00d4b1',
    title: 'Social Media Marketing',
    desc: 'Sáng tạo nội dung, lên lịch tự động và chạy quảng cáo Facebook/Instagram nhắm đúng đối tượng khách hàng tiệm nail tại EU.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#f5a623',
    title: 'SEO & Google Marketing',
    desc: 'Tối ưu từ khóa địa phương, tăng thứ hạng Google Maps và website, giúp khách hàng tìm thấy tiệm của bạn nhanh hơn đối thủ.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 12v3M10 13.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#ff6b35',
    title: 'Hệ thống POS & Merchant',
    desc: 'Tích hợp phần mềm YoCheckIn với hệ thống POS, quản lý thanh toán, tích điểm khách hàng và báo cáo doanh thu theo thời gian thực.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      {/* Background orbs */}
      <div className="services__orb services__orb--1" />
      <div className="services__orb services__orb--2" />

      <div className="container">
        {/* Header */}
        <div className="services__header text-center">
          <div className="section-label">Dịch vụ của chúng tôi</div>
          <h2 className="section-title">
            Giải pháp toàn diện cho{' '}
            <span className="services__title-accent">tiệm Nails</span>
          </h2>
          <p className="section-desc">
            Từ Digital Marketing đến POS & Merchant — Vietsol cung cấp mọi công cụ giúp tiệm
            Nails của bạn phát triển bền vững tại Châu Âu.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services__grid">
          {services.map((svc, i) => (
            <div key={i} className="services__card card" style={{ '--svc-color': svc.color }}>
              <div className="services__card-glow" />
              <div className="services__icon" style={{ color: svc.color, background: `${svc.color}18` }}>
                {svc.icon}
              </div>
              <h3 className="services__card-title">{svc.title}</h3>
              <p className="services__card-desc">{svc.desc}</p>
              <div className="services__card-footer">
                <a href="#contact" className="services__link">
                  Tìm hiểu thêm
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="services__strip">
          <div className="services__strip-text">
            <span className="services__strip-tag">📦 Gói trọn bộ</span>
            <p>Sử dụng trọn gói dịch vụ, tiết kiệm <strong>từ €500 – €1.000/tháng</strong> so với thuê riêng lẻ</p>
          </div>
          <a href="#pricing" className="btn btn-primary">
            <span>Xem bảng giá</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
