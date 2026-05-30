import { useState } from 'react'
import './Features.css'

const tabs = ['Cửa Hàng Nails', 'Nhà Hàng']

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Quản lý khách hàng toàn diện',
    desc: 'Phân loại khách hàng thông minh: mới, thường xuyên, VIP, rủi ro. Nắm bắt toàn bộ lịch sử giao dịch.',
    color: '#6c47ff',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Gửi SMS tự động',
    desc: 'Tự động gửi SMS chúc mừng sinh nhật, nhắc nhở khách lâu không quay lại, và thông báo khuyến mãi.',
    color: '#00d4b1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tăng đánh giá Google Maps',
    desc: 'Mời khách hài lòng viết review lên Google Maps & Facebook ngay sau khi sử dụng dịch vụ.',
    color: '#f5a623',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tích điểm & Reward',
    desc: 'Hệ thống tích điểm tự động khen thưởng khách hàng trung thành, khuyến khích quay lại nhiều hơn.',
    color: '#ff6b35',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Phân tích doanh thu',
    desc: 'Báo cáo chi tiết về doanh thu, xu hướng khách hàng và hiệu quả của các chiến dịch marketing.',
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Trợ lý quản lý đánh giá',
    desc: 'Nhận cảnh báo khi có đánh giá xấu, tự động phản hồi và bảo vệ uy tín tiệm trên mạng xã hội.',
    color: '#22d3ee',
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="text-center">
          <div className="section-label">Customer Data Platform</div>
          <h2 className="section-title">
            Phần mềm nhiều tính năng,<br />rất tiện lợi cho cửa hàng Nails
          </h2>
          <p className="section-desc">
            Phần mềm giúp bạn quản lý khách hàng, doanh thu, giúp chủ cửa hàng tìm kiếm
            khách hàng mới và chăm sóc khách hàng cũ một cách tự động.
          </p>
        </div>

        {/* Tabs */}
        <div className="features__tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`features__tab ${activeTab === i ? 'features__tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pain points */}
        <div className="features__pain">
          <div className="features__pain-icon">💭</div>
          <div className="features__pain-content">
            <p>Bạn đang đau đầu khi không biết <strong>khách hàng của mình có trung thành</strong> với cửa hàng không?</p>
            <p>Sợ không chăm sóc được khách hàng tốt, khách hàng sẽ <strong>qua tiệm khác</strong>?</p>
          </div>
          <a href="https://wa.me/+32" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
            <span>Giải quyết ngay</span>
          </a>
        </div>

        {/* Feature cards */}
        <div className="features__grid">
          {features.map((feat, i) => (
            <div key={i} className="features__card card" style={{ '--feat-color': feat.color }}>
              <div className="features__card-icon" style={{ background: `${feat.color}18`, color: feat.color }}>
                {feat.icon}
              </div>
              <h3 className="features__card-title">{feat.title}</h3>
              <p className="features__card-desc">{feat.desc}</p>
              <div className="features__card-glow" style={{ background: feat.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
