import './Blog.css'

const posts = [
  {
    category: 'Tips & Tricks',
    date: '15 tháng 12, 2024',
    title: '10 ý tưởng giúp tiệm nails hút khách vào dịp Noel',
    excerpt: 'Dịp Noel là cơ hội vàng để tiệm nails thu hút thêm khách mới và giữ chân khách cũ. Khám phá 10 chiến lược marketing hiệu quả nhất.',
    readTime: '5 phút đọc',
    emoji: '🎄',
    color: '#ff6b35',
  },
  {
    category: 'Digital Marketing',
    date: '08 tháng 11, 2024',
    title: 'Cách tăng đánh giá Google Maps cho tiệm nails trong 30 ngày',
    excerpt: 'Hướng dẫn chi tiết để tăng số lượng đánh giá tích cực trên Google Maps, giúp tiệm nails của bạn nổi bật hơn trong tìm kiếm địa phương.',
    readTime: '7 phút đọc',
    emoji: '⭐',
    color: '#f5a623',
  },
  {
    category: 'Quản lý khách hàng',
    date: '22 tháng 10, 2024',
    title: 'Làm thế nào để khách hàng quay lại tiệm nails nhiều hơn',
    excerpt: 'Phân tích hành vi khách hàng và các chiến lược giữ chân hiệu quả để tăng tỷ lệ khách hàng trung thành cho tiệm nails của bạn.',
    readTime: '6 phút đọc',
    emoji: '💅',
    color: '#6c47ff',
  },
]

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog__header">
          <div>
            <div className="section-label">Latest News</div>
            <h2 className="section-title">Tin tức & Chia sẻ kiến thức</h2>
          </div>
          <a href="#blog" className="btn btn-secondary">
            Xem tất cả bài viết
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <article key={i} className="blog__card card" style={{ '--post-color': post.color }}>
              <div className="blog__card-thumb" style={{ background: `${post.color}15` }}>
                <span className="blog__card-emoji">{post.emoji}</span>
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
                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <a href="#" className="blog__card-link" style={{ color: post.color }}>
                  Đọc thêm
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
