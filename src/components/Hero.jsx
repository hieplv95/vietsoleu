import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
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
            Phần mềm Marketing Cho Tiệm Nails
          </div>

          <h1 className="hero__title">
            Giải pháp marketing
            <span className="hero__title-gradient"> thông minh</span>
            <br />cho tiệm nails của bạn
          </h1>

          <p className="hero__desc">
            Phần mềm <strong>YoCheckIn</strong> do đội ngũ Vietsol phát triển — chính thức ra mắt
            cho người Việt tại Châu Âu. Quản lý khách hàng, tăng doanh thu và chăm sóc khách hàng tự động.
          </p>

          <div className="hero__actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              <span>Dùng thử 14 ngày miễn phí</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#features" className="btn btn-secondary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
              </svg>
              Xem phần mềm
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#00d4b1" strokeWidth="2"/>
              </svg>
              Không cần thẻ tín dụng
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#6c47ff" strokeWidth="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#6c47ff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Bảo mật GDPR
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M3 10h18M7 15h1m4 0h1M7 19h1m4 0h1m4-4h1m0 4h1M3 6a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Hỗ trợ tiếng Việt
            </div>
          </div>
        </div>

        {/* ===== RIGHT: Dashboard mockup ===== */}
        <div className="hero__right">
          <div className="hero__dashboard">
            <div className="hero__dashboard-bar">
              <div className="hero__dashboard-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="hero__dashboard-url">app.yocheckin.com</div>
            </div>
            <div className="hero__dashboard-body">
              {/* Stats row */}
              <div className="hero__mock-stats">
                {[
                  { label: 'Khách hàng', value: '2,847', up: '+12%', color: '#6c47ff' },
                  { label: 'CheckIn hôm nay', value: '128', up: '+8%', color: '#00d4b1' },
                  { label: 'Doanh thu', value: '€4,290', up: '+23%', color: '#f5a623' },
                  { label: 'Đánh giá mới', value: '34', up: '+5%', color: '#ff6b35' },
                ].map((stat, i) => (
                  <div key={i} className="hero__mock-stat" style={{ '--stat-color': stat.color }}>
                    <div className="hero__mock-stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 15.93 22 13.07 22 10c0-5.18-3.94-9.45-9-9.95M11 2.05C5.95 2.55 2 6.82 2 12c0 3.07 2.09 5.93 5.22 7.78L6 21l5 3v-5l-2.28 2.28C6.81 20 5 17.21 5 14c0-4.08 3.05-7.44 7-7.93V2.05z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="hero__mock-stat-value">{stat.value}</div>
                      <div className="hero__mock-stat-label">{stat.label}</div>
                    </div>
                    <div className="hero__mock-stat-up">{stat.up}</div>
                  </div>
                ))}
              </div>
              {/* Mini chart */}
              <div className="hero__mock-chart">
                <div className="hero__mock-chart-header">
                  <span>Tăng trưởng khách hàng</span>
                  <span className="hero__mock-chart-badge">Tháng này</span>
                </div>
                <svg viewBox="0 0 400 80" className="hero__mock-svg">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6c47ff" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#6c47ff" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 70 C40 65 60 55 100 45 S180 25 220 20 S320 15 400 10 L400 80 L0 80Z" fill="url(#chartGrad)"/>
                  <path d="M0 70 C40 65 60 55 100 45 S180 25 220 20 S320 15 400 10" fill="none" stroke="#6c47ff" strokeWidth="2"/>
                  <circle cx="220" cy="20" r="4" fill="#6c47ff"/>
                  <circle cx="400" cy="10" r="4" fill="#00d4b1"/>
                </svg>
              </div>

              {/* Notification pills */}
              <div className="hero__mock-pills">
                <div className="hero__mock-pill hero__mock-pill--green">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4M12 2a10 10 0 110 20A10 10 0 0112 2z"/></svg>
                  Chị Lan vừa checkin • 2 phút trước
                </div>
                <div className="hero__mock-pill hero__mock-pill--purple">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  SMS sinh nhật đã gửi cho 12 khách
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="hero__floating-badge">
            <div className="hero__floating-badge-icon">⭐</div>
            <div>
              <div className="hero__floating-badge-val">4.9/5</div>
              <div className="hero__floating-badge-sub">500+ tiệm tin dùng</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Cuộn xuống</span>
      </div>
    </section>
  )
}
