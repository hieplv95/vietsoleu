import salonMain from '../assets/salon_main.png'
import yocheckinReal from '../assets/yocheckin-real.png'
import salonWaiting from '../assets/salon_waiting.png'
import salonCheckin from '../assets/salon_checkin.png'
import salonTech from '../assets/salon_tech.png'
import './BrandStory.css'

export default function BrandStory() {
  return (
    <section className="brand-story section" id="brand-story">
      <div className="container brand-story__inner">

        {/* ===== LEFT: Image Grid ===== */}
        <div className="brand-story__left">
          <div className="brand-story__grid">

            {/* Top row: Accent line + Main Image */}
            <div className="brand-story__top-row">
              <div className="brand-story__accent-line"></div>
              <img src={salonMain} alt="Vietnamese nail tech working on client" className="brand-story__img brand-story__img--main" />
            </div>

            {/* Bottom row: Grid with Left vertical, Middle stacked, Right vertical */}
            <div className="brand-story__bottom-row">
              {/* Left Column: Vertical image */}
              <div className="brand-story__col-vertical">
                <img src={salonCheckin} alt="Client checkin" className="brand-story__img brand-story__img--vertical" />
              </div>

              {/* Middle Column: Stacked horizontal images */}
              <div className="brand-story__col-stacked">
                <div className="brand-story__img-wrapper brand-story__img-wrapper--horizontal">
                  <img src={yocheckinReal} alt="YoCheckIn iPad" className="brand-story__img brand-story__img--cropped" />
                </div>
                <img src={salonTech} alt="YoCheckIn terminal setup" className="brand-story__img brand-story__img--horizontal" />
              </div>

              {/* Right Column: Vertical image */}
              <div className="brand-story__col-vertical">
                <img src={salonWaiting} alt="Cozy European salon" className="brand-story__img brand-story__img--vertical" />
              </div>
            </div>

          </div>
        </div>

        {/* ===== RIGHT: Content ===== */}
        <div className="brand-story__right">
          <h2 className="brand-story__title">VietSol Digital Marketing</h2>
          <div className="brand-story__since">Since 2023</div>

          <div className="brand-story__content">
            <p className="brand-story__desc">
              Là công ty người Việt tại Tây Ban Nha, với hơn 10 năm kinh nghiệm trong lĩnh vực Digital marketing cho các tiệm nails.
              Công ty VietSol Digital Marketing đã giúp hàng chục ngàn chủ tiệm nails trên khắp nước Đức,Anh,Tây Ban nha và khắp Châu Âu
              kiếm thêm khách hàng mới và thành công trong việc kinh doanh của mình.
            </p>
            <p className="brand-story__desc">
              Với kinh nghiệm trợ giúp và phục vụ khách hàng tại nhiều quốc gia với nhiều hoàn cảnh khác nhau, VietSol tự tin
              sẽ luôn có các giải pháp phù hợp đáp ứng đầy đủ các yêu cầu của chủ tiệm.
            </p>
          </div>

          {/* Flags representing coverage */}
          <div className="brand-story__flags">
            {/* UK Flag */}
            <div className="brand-story__flag-wrapper" title="Anh Quốc">
              <svg width="72" height="48" viewBox="0 0 60 30" className="brand-story__flag">
                <clipPath id="uk-clip">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <rect width="60" height="30" fill="#012169" />
                <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#uk-clip)" />
                <path d="M0 0 L30 15" stroke="#C8102E" strokeWidth="2.2" clipPath="url(#uk-clip)" />
                <path d="M60 30 L30 15" stroke="#C8102E" strokeWidth="2.2" clipPath="url(#uk-clip)" />
                <path d="M60 0 L30 15" stroke="#C8102E" strokeWidth="2.2" clipPath="url(#uk-clip)" />
                <path d="M0 30 L30 15" stroke="#C8102E" strokeWidth="2.2" clipPath="url(#uk-clip)" />
                <path d="M30 0 v30 M0 15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
              </svg>
            </div>

            {/* Germany Flag */}
            <div className="brand-story__flag-wrapper" title="Đức">
              <svg width="72" height="48" viewBox="0 0 5 3" className="brand-story__flag">
                <rect width="5" height="1" y="0" fill="#000000" />
                <rect width="5" height="1" y="1" fill="#DD0000" />
                <rect width="5" height="1" y="2" fill="#FFCC00" />
              </svg>
            </div>

            {/* France Flag */}
            <div className="brand-story__flag-wrapper" title="Pháp">
              <svg width="72" height="48" viewBox="0 0 3 2" className="brand-story__flag">
                <rect width="1" height="2" x="0" fill="#00209F" />
                <rect width="1" height="2" x="1" fill="#FFFFFF" />
                <rect width="1" height="2" x="2" fill="#F31830" />
              </svg>
            </div>

            {/* Spain Flag */}
            <div className="brand-story__flag-wrapper" title="Tây Ban Nha">
              <svg width="72" height="48" viewBox="0 0 750 500" className="brand-story__flag">
                <rect width="750" height="500" fill="#F1BF00" />
                <rect width="750" height="125" fill="#C60B1E" />
                <rect width="750" height="125" y="375" fill="#C60B1E" />
                {/* Coat of arms (aligned to the left) */}
                <g transform="translate(180, 160) scale(1.1)">
                  {/* Left Pillar */}
                  <rect x="0" y="40" width="12" height="100" fill="#B3B3B3" rx="2" />
                  <ellipse cx="6" cy="40" rx="8" ry="4" fill="#F1BF00" />
                  <rect x="-2" y="140" width="16" height="10" fill="#808080" rx="1" />
                  {/* Right Pillar */}
                  <rect x="110" y="40" width="12" height="100" fill="#B3B3B3" rx="2" />
                  <ellipse cx="116" cy="40" rx="8" ry="4" fill="#F1BF00" />
                  <rect x="108" y="140" width="16" height="10" fill="#808080" rx="1" />
                  {/* Shield */}
                  <path d="M 25,40 L 95,40 L 95,110 A 35,35 0 0,1 25,110 Z" fill="#C60B1E" stroke="#F1BF00" strokeWidth="6" />
                  <path d="M 28,43 L 92,43 L 92,105 A 32,32 0 0,1 28,105 Z" fill="#FFFFFF" />
                  {/* Inner quarters of shield */}
                  <rect x="28" y="43" width="32" height="32" fill="#C60B1E" /> {/* Castile (Castle) */}
                  <rect x="60" y="43" width="32" height="32" fill="#E5A3C1" /> {/* León (Lion) */}
                  <rect x="28" y="75" width="32" height="30" fill="#F1BF00" /> {/* Aragon (Stripes) */}
                  <rect x="60" y="75" width="32" height="30" fill="#007A87" /> {/* Navarre */}
                  {/* Castile Castle drawing */}
                  <path d="M 38,70 L 38,55 L 44,55 L 44,50 L 48,50 L 48,55 L 50,55 L 50,70 Z" fill="#F1BF00" />
                  {/* Crown on top of Shield */}
                  <path d="M 30,35 Q 60,10 90,35 Q 90,20 60,15 Q 30,20 30,35 Z" fill="#F1BF00" />
                  <circle cx="60" cy="12" r="5" fill="#C60B1E" />
                  <path d="M 40,35 L 40,25 M 50,35 L 50,22 M 60,35 L 60,20 M 70,35 L 70,22 M 80,35 L 80,25" stroke="#F1BF00" strokeWidth="4" />
                </g>
              </svg>
            </div>

            {/* EU Flag */}
            <div className="brand-story__flag-wrapper" title="Châu Âu">
              <svg width="72" height="48" viewBox="0 0 300 200" className="brand-story__flag">
                <defs>
                  <g id="eu-star">
                    <polygon points="0,-10 3,-3 10,-3 4.5,1 7.5,8 0,4 -7.5,8 -4.5,1 -10,-3 -3,-3" fill="#FFCC00" />
                  </g>
                </defs>
                <rect width="300" height="200" fill="#003399" />
                <use href="#eu-star" transform="translate(150, 40)" />
                <use href="#eu-star" transform="translate(180, 48)" />
                <use href="#eu-star" transform="translate(202, 70)" />
                <use href="#eu-star" transform="translate(210, 100)" />
                <use href="#eu-star" transform="translate(202, 130)" />
                <use href="#eu-star" transform="translate(180, 152)" />
                <use href="#eu-star" transform="translate(150, 160)" />
                <use href="#eu-star" transform="translate(120, 152)" />
                <use href="#eu-star" transform="translate(98, 130)" />
                <use href="#eu-star" transform="translate(90, 100)" />
                <use href="#eu-star" transform="translate(98, 70)" />
                <use href="#eu-star" transform="translate(120, 48)" />
              </svg>
            </div>
          </div>

          {/* Action button */}
          <div className="brand-story__action">
            <a href="https://wa.me/+32" className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
              <span>TÌM HIỂU THÊM</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
