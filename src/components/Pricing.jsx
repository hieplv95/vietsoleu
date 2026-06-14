import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
  {
    name: 'Gói Cơ Bản',
    subtitle: 'YoCheckIn Basic',
    price: 19,
    period: '/tháng',
    color: '#6c47ff',
    popular: false,
    features: [
      { text: 'Không giới hạn Member', included: true },
      { text: 'Mời khách viết review Google Maps, Facebook', included: true },
      { text: 'Phân loại khách hàng (mới, thường, VIP, rủi ro)', included: true },
      { text: 'Tích điểm & tặng thưởng reward', included: true },
      { text: 'SMS sinh nhật & nhắc khách lâu không quay lại', included: true },
      { text: 'Gửi SMS chiến dịch khuyến mãi', included: false },
      { text: 'Trợ lý quản lý đánh giá', included: false },
      { text: 'Email marketing tích hợp', included: false },
    ],
    cta: 'Đăng ký ngay',
  },
  {
    name: 'Gói Tiêu Chuẩn',
    subtitle: 'YoCheckIn Pro',
    price: 49,
    period: '/tháng',
    color: '#00d4b1',
    popular: true,
    features: [
      { text: 'Không giới hạn Member', included: true },
      { text: 'Mời khách viết review Google Maps, Facebook', included: true },
      { text: 'Phân loại khách hàng (mới, thường, VIP, rủi ro)', included: true },
      { text: 'Tích điểm & tặng thưởng reward', included: true },
      { text: 'SMS sinh nhật & nhắc khách lâu không quay lại', included: true },
      { text: 'Gửi SMS chiến dịch khuyến mãi', included: true },
      { text: 'Trợ lý quản lý đánh giá', included: true },
      { text: 'Email marketing tích hợp', included: false },
    ],
    cta: 'Bắt đầu ngay',
  },
  {
    name: 'Gói Cao Cấp',
    subtitle: 'YoCheckIn Elite',
    price: 99,
    period: '/tháng',
    color: '#f5a623',
    popular: false,
    features: [
      { text: 'Không giới hạn Member', included: true },
      { text: 'Mời khách viết review Google Maps, Facebook', included: true },
      { text: 'Phân loại khách hàng (mới, thường, VIP, rủi ro)', included: true },
      { text: 'Tích điểm & tặng thưởng reward', included: true },
      { text: 'SMS sinh nhật & nhắc khách lâu không quay lại', included: true },
      { text: 'Gửi SMS chiến dịch khuyến mãi', included: true },
      { text: 'Trợ lý quản lý đánh giá', included: true },
      { text: 'Email marketing tích hợp', included: true },
    ],
    cta: 'Bắt đầu ngay',
  },
]

export default function Pricing() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="pricing section" id="pricing">
      <div className="pricing__bg"></div>
      <div className="container">
        <div className="text-center">
          <div className="section-label">Affordable Plans</div>
          <h2 className="section-title">Bảng giá linh hoạt cho mọi quy mô</h2>
          <p className="section-desc">
            Chọn gói phù hợp với mô hình kinh doanh của bạn. Tất cả gói đều bao gồm 14 ngày dùng thử miễn phí.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card card ${plan.popular ? 'pricing__card--popular' : ''} ${hovered === i ? 'pricing__card--hovered' : ''}`}
              style={{ '--plan-color': plan.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {plan.popular && (
                <div className="pricing__popular-badge">🔥 Phổ biến nhất</div>
              )}
              <div className="pricing__card-header">
                <div className="pricing__plan-icon" style={{ background: `${plan.color}18`, color: plan.color }}>
                  {i === 0 ? '🌱' : i === 1 ? '⚡' : '👑'}
                </div>
                <div className="pricing__plan-name">{plan.name}</div>
                <div className="pricing__plan-sub">{plan.subtitle}</div>
              </div>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>
                <span className="pricing__amount">{plan.price}</span>
                <span className="pricing__period">{plan.period}</span>
              </div>
              <ul className="pricing__features">
                {plan.features.map((feat, j) => (
                  <li key={j} className={`pricing__feature ${!feat.included ? 'pricing__feature--excluded' : ''}`}>
                    {feat.included ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z" stroke={plan.color} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#5a6478" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {feat.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/lien-he"
                className="btn pricing__cta"
                style={plan.popular ? {
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                  color: 'white',
                  boxShadow: `0 4px 20px ${plan.color}40`
                } : {}}
              >
                {plan.popular ? <span>{plan.cta}</span> : plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          💡 Không cần thẻ tín dụng · Hủy bất cứ lúc nào · Hỗ trợ bằng tiếng Việt
        </p>
      </div>
    </section>
  )
}
