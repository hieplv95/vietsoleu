import { useState } from 'react'
import './SocialScheduler.css'

const items = [
  {
    id: 1,
    title: 'Thời điểm đăng tối ưu',
    content: 'AI của chúng tôi gợi ý thời điểm đăng bài tốt nhất cho đối tượng khách hàng của bạn, tối đa hóa mức độ tương tác và phạm vi tiếp cận.',
  },
  {
    id: 2,
    title: 'Lịch nội dung trực quan',
    content: 'Xem lịch nội dung của bạn một cách trực quan, dễ dàng lên kế hoạch, chỉnh sửa và hợp tác về các bài đăng với đội ngũ của bạn.',
  },
  {
    id: 3,
    title: 'Lên lịch đơn giản',
    content: 'Lên kế hoạch bài đăng trước, đảm bảo giao tiếp nhất quán với khách hàng. Lên lịch hàng tuần chỉ với vài cú nhấp chuột.',
  },
]

const mockCalendar = [
  { day: 'T2', posts: [{ time: '09:00', type: 'google', label: 'Review invite' }] },
  { day: 'T3', posts: [{ time: '18:00', type: 'sms', label: 'Birthday SMS' }, { time: '20:00', type: 'fb', label: 'Promo post' }] },
  { day: 'T4', posts: [] },
  { day: 'T5', posts: [{ time: '10:00', type: 'email', label: 'Newsletter' }] },
  { day: 'T6', posts: [{ time: '17:00', type: 'sms', label: 'Reminder SMS' }] },
  { day: 'T7', posts: [{ time: '11:00', type: 'google', label: 'Review follow-up' }, { time: '14:00', type: 'fb', label: 'Weekend promo' }] },
  { day: 'CN', posts: [] },
]

const typeColors = { google: '#4285f4', sms: '#f5a623', fb: '#1877f2', email: '#ea4335' }

export default function SocialScheduler() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <section className="scheduler section" id="scheduler">
      <div className="container scheduler__inner">
        {/* Left: calendar preview */}
        <div className="scheduler__visual">
          <div className="scheduler__calendar card">
            <div className="scheduler__cal-header">
              <span>📅 Lịch Chiến Dịch — Tháng 5</span>
              <div className="scheduler__cal-dots">
                {['google', 'sms', 'fb', 'email'].map(t => (
                  <span key={t} className="scheduler__dot" style={{ background: typeColors[t] }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="scheduler__cal-grid">
              {mockCalendar.map((day, i) => (
                <div key={i} className={`scheduler__cal-day ${day.posts.length === 0 ? 'scheduler__cal-day--empty' : ''}`}>
                  <div className="scheduler__cal-day-label">{day.day}</div>
                  <div className="scheduler__cal-posts">
                    {day.posts.map((post, j) => (
                      <div key={j} className="scheduler__cal-post" style={{ borderLeftColor: typeColors[post.type] }}>
                        <span className="scheduler__cal-time">{post.time}</span>
                        <span className="scheduler__cal-label">{post.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="scheduler__content">
          <div className="section-label">Social Media Management</div>
          <h2 className="section-title scheduler__title">
            Nhất quán, thu hút & tiết kiệm thời gian
          </h2>
          <p className="section-desc scheduler__desc">
            Quản lý sự hiện diện trên mạng xã hội dễ dàng với tính năng lên lịch tự động tích hợp.
          </p>

          <div className="scheduler__accordion">
            {items.map((item, i) => (
              <div
                key={i}
                className={`scheduler__accordion-item ${activeItem === i ? 'scheduler__accordion-item--active' : ''}`}
                onClick={() => setActiveItem(i)}
              >
                <div className="scheduler__accordion-header">
                  <div className="scheduler__accordion-num">{i + 1}</div>
                  <h3 className="scheduler__accordion-title">{item.title}</h3>
                  <svg
                    className="scheduler__accordion-icon"
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                  >
                    <path d={activeItem === i ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                {activeItem === i && (
                  <p className="scheduler__accordion-content">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
