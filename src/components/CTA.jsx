import './CTA.css'

export default function CTA() {
  return (
    <section className="cta section" id="contact">
      <div className="cta__bg-orb cta__bg-orb--1"></div>
      <div className="cta__bg-orb cta__bg-orb--2"></div>
      <div className="cta__grid-pattern"></div>
      <div className="container cta__inner">
        <div className="cta__badge">🚀 Launch Today</div>
        <h2 className="cta__title">
          Sẵn sàng nâng tầm tiệm nails của bạn?
          <br />
          <span className="cta__title-highlight">Bắt đầu 14 ngày miễn phí ngay hôm nay.</span>
        </h2>
        <p className="cta__desc">
          Trải nghiệm sức mạnh của tự động hóa, sức mạnh phân tích dữ liệu và tích hợp liền mạch.
          Hành trình của bạn bắt đầu từ đây!
        </p>
        <div className="cta__actions">
          <a href="https://yocheckin.com/auth/register" className="btn btn-primary btn-lg cta__btn-primary" target="_blank" rel="noreferrer">
            <span>Bắt đầu 14 ngày miễn phí</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary btn-lg">
            Khám phá tính năng
          </a>
        </div>
        <div className="cta__trust">
          <span>✓ Không cần thẻ tín dụng</span>
          <span>·</span>
          <span>✓ Hủy bất cứ lúc nào</span>
          <span>·</span>
          <span>✓ Hỗ trợ tiếng Việt</span>
        </div>
      </div>
    </section>
  )
}
