import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Blog.css'
import blogNoelCover from '../assets/blog_noel_cover.png'
import blogGoogleMapsCover from '../assets/blog_google_maps_cover.png'

export default function Blog() {
  const { t } = useLanguage()

  const posts = [
    {
      id: 'tiem-nails-google-maps',
      path: '/tiem-nails-google-maps',
      category: t('blogSection.post4.category'),
      date: t('blogSection.post4.date'),
      title: t('blogSection.post4.title'),
      excerpt: t('blogSection.post4.excerpt'),
      readTime: t('blogSection.post4.readTime'),
      emoji: '📍',
      color: '#3b82f6',
      image: blogGoogleMapsCover,
    },
    {
      id: '10-y-tuong-giup-tiem-nails-hut-khach-vao-dip-noel',
      category: t('blogSection.post1.category'),
      date: t('blogSection.post1.date'),
      title: t('blogSection.post1.title'),
      excerpt: t('blogSection.post1.excerpt'),
      readTime: t('blogSection.post1.readTime'),
      emoji: '🎄',
      color: '#ff6b35',
      image: blogNoelCover,
    },
    {
      id: 'cach-tang-danh-gia-google-maps',
      category: t('blogSection.post2.category'),
      date: t('blogSection.post2.date'),
      title: t('blogSection.post2.title'),
      excerpt: t('blogSection.post2.excerpt'),
      readTime: t('blogSection.post2.readTime'),
      emoji: '⭐',
      color: '#f5a623',
    },
  ]

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog__header">
          <div>
            <div className="section-label">{t('blogSection.label')}</div>
            <h2 className="section-title">{t('blogSection.title')}</h2>
          </div>
          <Link to="/blog" className="btn btn-secondary">
            {t('blogSection.btnAllPosts')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <article key={i} className="blog__card card" style={{ '--post-color': post.color }}>
              <div className="blog__card-thumb" style={{ background: `${post.color}15` }}>
                {post.image ? (
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  <span className="blog__card-emoji">{post.emoji}</span>
                )}
                <div className="blog__card-category" style={{ color: post.color, background: `${post.color}18` }}>
                  {post.category}
                </div>
              </div>
              <div className="blog__card-body">
                <div className="blog__card-meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog__card-title">
                  <Link to={post.path || `/blog/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <Link to={post.path || `/blog/${post.id}`} className="blog__card-link" style={{ color: post.color }}>
                  {t('blogSection.linkReadMore')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
