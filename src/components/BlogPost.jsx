import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'
import blogNoelCover from '../assets/blog_noel_cover.png'

export default function BlogPost({ postIdOverride }) {
  const { postId: paramPostId } = useParams()
  const postId = postIdOverride || paramPostId
  const { language } = useLanguage()
  const navigate = useNavigate()

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [postId])

  // Get active localized post, fallback to 'vi', and fallback to first post if invalid ID
  const activeLang = blogPosts[language] ? language : 'vi'
  let post = blogPosts[activeLang][postId]
  
  // Fallback check
  if (!post) {
    // If not found in current language, try 'vi' fallback
    post = blogPosts['vi'][postId]
  }

  const postImageMap = {
    '10-y-tuong-giup-tiem-nails-hut-khach-vao-dip-noel': blogNoelCover
  }
  const postImage = postImageMap[postId]

  if (!post) {
    return (
      <div className="blog-fallback-container container">
        <div className="blog-fallback-card card text-center">
          <span className="fallback-emoji">🔍</span>
          <h2>{language === 'vi' ? 'Không tìm thấy bài viết' : 'Article not found'}</h2>
          <p>
            {language === 'vi' 
              ? 'Bài viết bạn yêu cầu không tồn tại hoặc đã được di chuyển.' 
              : 'The article you requested does not exist or has been moved.'}
          </p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            {language === 'vi' ? 'Quay lại trang chủ' : 'Go back home'}
          </button>
        </div>
      </div>
    )
  }

  // Localized general labels
  const labelBack = language === 'vi' ? '← Quay lại trang chủ' : '← Back to Home'
  const labelToc = language === 'vi' ? 'Mục lục bài viết' : 'Table of Contents'
  const labelAboutTitle = language === 'vi' ? 'Về Vietsol Digital Marketing' : 'About Vietsol Digital Marketing'
  const labelAboutDesc = language === 'vi' 
    ? 'Là công ty tiếp thị số của người Việt tại Châu Âu, chuyên cung cấp các giải pháp tăng review Google, chăm sóc khách hàng tự động và thiết kế website chuyên biệt cho các tiệm Nails tại EU.' 
    : 'A leading digital marketing company for Vietnamese salons in Europe, specializing in Google Maps SEO, automated customer retention, and custom booking websites.'
  const labelAboutBtn = language === 'vi' ? 'Liên hệ nhận tư vấn' : 'Get Free Consultation'
  const labelSoftwareTitle = language === 'vi' ? 'YoCheckIn - Phần mềm tăng Review' : 'YoCheckIn - Review Booster Tool'
  const labelSoftwareDesc = language === 'vi'
    ? 'Giải pháp thông minh giúp ẩn review xấu, tăng 5 sao Google maps và chăm sóc khách cũ tự động.'
    : 'Smart solution to filter negative reviews, boost 5-star Google reviews, and automate client follow-ups.'
  const labelSoftwareBtn = language === 'vi' ? 'Dùng thử 30 ngày miễn phí' : 'Start 30-Day Free Trial'
  const labelCtaTitle = language === 'vi' ? 'Sẵn sàng đột phá doanh thu tiệm Nails?' : 'Ready to boost your salon revenue?'
  const labelCtaDesc = language === 'vi'
    ? 'Hãy để đội ngũ chuyên gia của Vietsol giúp bạn xây dựng hệ thống marketing tự động thu hút khách hàng bản địa.'
    : 'Let Vietsol experts build your automated marketing systems and attract local customers.'
  const labelCtaBtn = language === 'vi' ? 'Đăng ký tư vấn ngay' : 'Get Consultation Now'
  const labelTrustCard = language === 'vi' ? 'Không cần thẻ tín dụng' : 'No credit card required'
  const labelTrustSupport = language === 'vi' ? 'Hỗ trợ 24/7 tiếng Việt' : '24/7 Vietnamese support'
  const labelTrustSetup = language === 'vi' ? 'Bảo mật chuẩn GDPR' : 'GDPR Compliant Data'

  // Scroll to anchor smoothly
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 100 // Spacing for sticky header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <article className="blog-post-page" style={{ '--post-accent': post.color }}>
      <div className="blog-post-page__glow"></div>
      
      <div className="container blog-post-page__inner">
        {/* Navigation back */}
        <Link to="/" className="blog-post-page__back-link">
          {labelBack}
        </Link>

        {/* Header Section */}
        <header className="blog-post-header">
          <div className="blog-post-header__category" style={{ color: post.color, background: `${post.color}15` }}>
            {post.category}
          </div>
          <h1 className="blog-post-header__title">{post.title}</h1>
          <div className="blog-post-header__meta">
            <span className="meta-item">🗓️ {post.date}</span>
            <span className="meta-item-sep">·</span>
            <span className="meta-item">⏱️ {post.readTime}</span>
          </div>
          
          {/* Main Visual container */}
          <div className="blog-post-header__banner" style={{ background: `linear-gradient(135deg, ${post.color}15, ${post.color}25)` }}>
            {postImage ? (
              <img src={postImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <span className="blog-post-header__emoji">{post.emoji}</span>
            )}
          </div>
        </header>

        {/* Content body with sidebar */}
        <div className="blog-post-layout">
          {/* Left Column: Article Content */}
          <div className="blog-post-content">
            <p className="blog-post-content__intro">{post.intro}</p>

            {/* Table of Contents block */}
            <div className="blog-post-toc">
              <h3 className="blog-post-toc__title">📍 {labelToc}</h3>
              <ul className="blog-post-toc__list">
                {post.tips.map((tip) => (
                  <li key={tip.num} className="blog-post-toc__item">
                    <a 
                      href={`#tip-${tip.num}`} 
                      onClick={(e) => handleAnchorClick(e, `tip-${tip.num}`)}
                    >
                      <span className="toc-number">{tip.num < 10 ? `0${tip.num}` : tip.num}.</span>
                      <span className="toc-text">{tip.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips section */}
            <div className="blog-post-tips">
              {post.tips.map((tip) => (
                <section key={tip.num} id={`tip-${tip.num}`} className="blog-post-tip-card card">
                  <div className="blog-post-tip-card__header">
                    <div className="blog-post-tip-card__number" style={{ background: `linear-gradient(135deg, ${post.color}, #a78bfa)` }}>
                      {tip.num < 10 ? `0${tip.num}` : tip.num}
                    </div>
                    <h2 className="blog-post-tip-card__title">{tip.title}</h2>
                  </div>
                  <div className="blog-post-tip-card__body">
                    <p>{tip.desc}</p>
                  </div>
                </section>
              ))}
            </div>

            {/* Outro section */}
            <div className="blog-post-content__outro card">
              <p>{post.outro}</p>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="blog-post-sidebar">
            {/* About widget */}
            <div className="blog-post-sidebar__widget card">
              <div className="widget-icon">⚡</div>
              <h4 className="widget-title">{labelAboutTitle}</h4>
              <p className="widget-desc">{labelAboutDesc}</p>
              <a href="https://wa.me/34642805848" className="btn btn-primary btn-sm widget-btn" target="_blank" rel="noreferrer">
                <span>{labelAboutBtn}</span>
              </a>
            </div>

            {/* YoCheckIn Software widget */}
            <div className="blog-post-sidebar__widget card highlight-widget">
              <div className="widget-icon" style={{ color: '#00d4b1' }}>🚀</div>
              <h4 className="widget-title">{labelSoftwareTitle}</h4>
              <p className="widget-desc">{labelSoftwareDesc}</p>
              <a href="https://yocheckin.com/auth/register" className="btn btn-secondary btn-sm widget-btn" target="_blank" rel="noreferrer">
                <span>{labelSoftwareBtn}</span>
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom CTA section */}
        <section className="blog-post-cta card">
          <div className="blog-post-cta__bg-orb"></div>
          <div className="blog-post-cta__inner">
            <h3 className="blog-post-cta__title">{labelCtaTitle}</h3>
            <p className="blog-post-cta__desc">{labelCtaDesc}</p>
            <div className="blog-post-cta__actions">
              <a href="https://wa.me/34642805848" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
                <span>{labelCtaBtn}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
            <div className="blog-post-cta__trust">
              <span>✓ {labelTrustCard}</span>
              <span>·</span>
              <span>✓ {labelTrustSupport}</span>
              <span>·</span>
              <span>✓ {labelTrustSetup}</span>
            </div>
          </div>
        </section>

      </div>
    </article>
  )
}
