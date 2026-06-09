import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './BlogPage.css'

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const categories = [
    { id: 'all', label: language === 'vi' ? 'Tất cả' : 'All' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'management', label: language === 'vi' ? 'Quản lý khách hàng' : 'Customer Management' },
  ]

  const posts = [
    {
      id: '10-y-tuong-giup-tiem-nails-hut-khach-vao-dip-noel',
      categoryTag: 'tips',
      category: t('blogSection.post1.category'),
      date: t('blogSection.post1.date'),
      title: t('blogSection.post1.title'),
      excerpt: t('blogSection.post1.excerpt'),
      readTime: t('blogSection.post1.readTime'),
      emoji: '🎄',
      color: '#ff6b35',
    },
    {
      id: 'cach-tang-danh-gia-google-maps',
      categoryTag: 'marketing',
      category: t('blogSection.post2.category'),
      date: t('blogSection.post2.date'),
      title: t('blogSection.post2.title'),
      excerpt: t('blogSection.post2.excerpt'),
      readTime: t('blogSection.post2.readTime'),
      emoji: '⭐',
      color: '#f5a623',
    },
    {
      id: 'lam-the-nao-de-khach-hang-quay-lai',
      categoryTag: 'management',
      category: t('blogSection.post3.category'),
      date: t('blogSection.post3.date'),
      title: t('blogSection.post3.title'),
      excerpt: t('blogSection.post3.excerpt'),
      readTime: t('blogSection.post3.readTime'),
      emoji: '💅',
      color: '#6c47ff',
    },
  ]

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(p => p.categoryTag === activeFilter)

  // Localized texts
  const labelTitle = language === 'vi' ? 'Tin tức & Kiến thức' : 'News & Insights'
  const labelSubtitle = language === 'vi' 
    ? 'Chia sẻ kinh nghiệm marketing, vận hành và đột phá doanh số tiệm Nails tại Châu Âu.' 
    : 'Practical guides on marketing, business operations, and revenue growth for salons in Europe.'
  const labelReadMore = language === 'vi' ? 'Đọc thêm' : 'Read more'

  return (
    <div className="blog-directory-page">
      {/* Background Orbs */}
      <div className="blog-dir-glow blog-dir-glow--1"></div>
      <div className="blog-dir-glow blog-dir-glow--2"></div>

      <div className="container">
        {/* Page Header */}
        <header className="blog-dir-header text-center">
          <div className="section-label">Vietsol Blog</div>
          <h1 className="blog-dir-title">{labelTitle}</h1>
          <p className="blog-dir-subtitle">{labelSubtitle}</p>
        </header>

        {/* Categories Navigation */}
        <div className="blog-dir-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`blog-dir-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="blog-dir-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-dir-card card" style={{ '--post-color': post.color }}>
              <div className="blog-dir-card__thumb" style={{ background: `${post.color}15` }}>
                <span className="blog-dir-card__emoji">{post.emoji}</span>
                <div className="blog-dir-card__category" style={{ color: post.color, background: `${post.color}18` }}>
                  {post.category}
                </div>
              </div>
              <div className="blog-dir-card__body">
                <div className="blog-dir-card__meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-dir-card__title">
                  <Link to={`/blog/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="blog-dir-card__excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="blog-dir-card__link" style={{ color: post.color }}>
                  {labelReadMore}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
