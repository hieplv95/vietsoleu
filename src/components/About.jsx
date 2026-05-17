import './About.css'

const integrations = [
  { name: 'Google Maps', color: '#4285f4', icon: '🗺️' },
  { name: 'Facebook', color: '#1877f2', icon: '📘' },
  { name: 'WhatsApp', color: '#25d366', icon: '💬' },
  { name: 'SMS', color: '#f5a623', icon: '📱' },
  { name: 'Email', color: '#ea4335', icon: '📧' },
  { name: 'Instagram', color: '#e1306c', icon: '📷' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__bg-orb about__bg-orb--1"></div>
      <div className="about__bg-orb about__bg-orb--2"></div>
      <div className="container about__inner">
        {/* Left: Content */}
        <div className="about__content">
          <div className="section-label">Seamless Tool Integration</div>
          <h2 className="about__title">
            Vietsol Digital Marketing — công ty của người Việt tại Châu Âu
          </h2>
          <p className="about__desc">
            Với hơn <strong>10 năm kinh nghiệm</strong> trong digital marketing, chúng tôi giúp khách hàng
            triển khai các hoạt động tiếp thị, quảng bá sản phẩm/dịch vụ thông qua các kênh trực tuyến.
          </p>
          <p className="about__desc">
            Giúp khách hàng tiếp cận những công nghệ mới để <strong>thu hút và chăm sóc khách hàng</strong> hiệu quả hơn.
          </p>

          <div className="about__highlights">
            {[
              { icon: '🎯', text: 'Chuyên gia marketing người Việt tại EU' },
              { icon: '🚀', text: 'Triển khai nhanh, hỗ trợ tận tình' },
              { icon: '🔒', text: 'Dữ liệu bảo mật theo chuẩn GDPR Châu Âu' },
              { icon: '📊', text: 'Báo cáo kết quả rõ ràng, minh bạch' },
            ].map((item, i) => (
              <div key={i} className="about__highlight-item">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            <span>Xem tất cả tích hợp</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        {/* Right: Integration visual */}
        <div className="about__visual">
          {/* Center hub */}
          <div className="about__hub">
            <div className="about__hub-ring about__hub-ring--1"></div>
            <div className="about__hub-ring about__hub-ring--2"></div>
            <div className="about__hub-ring about__hub-ring--3"></div>
            <div className="about__hub-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="12" fill="url(#hub-grad)"/>
                <path d="M10 20L20 30L30 20M20 10v20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="hub-grad" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#6c47ff"/>
                    <stop offset="1" stopColor="#4e2ed4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>YoCheckIn</span>
            </div>
            {/* Orbit items */}
            {integrations.map((item, i) => {
              const angle = (i * 360) / integrations.length
              return (
                <div
                  key={i}
                  className="about__orbit-item"
                  style={{
                    '--angle': `${angle}deg`,
                    '--color': item.color,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <span>{item.icon}</span>
                  <div className="about__orbit-label">{item.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
