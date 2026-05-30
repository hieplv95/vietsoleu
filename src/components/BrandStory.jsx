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
                <img src={yocheckinReal} alt="YoCheckIn iPad" className="brand-story__img brand-story__img--horizontal" />
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
          <h2 className="brand-story__title">FASTBOY MARKETING</h2>
          <div className="brand-story__since">Since 2013</div>
          
          <div className="brand-story__content">
            <p className="brand-story__desc">
              Là công ty người Việt tại Mỹ, với hơn 10 năm kinh nghiệm trong lĩnh vực online marketing cho các tiệm nails.
              Công ty Fastboy Marketing đã giúp hàng chục ngàn chủ tiệm nails trên khắp nước Mỹ, Canada, Úc và châu Âu
              kiếm thêm khách hàng mới và thành công trong việc kinh doanh của mình.
            </p>
            <p className="brand-story__desc">
              Với kinh nghiệm trợ giúp và phục vụ khách hàng tại nhiều quốc gia với nhiều hoàn cảnh khác nhau, Fastboy tự tin
              sẽ luôn có các giải pháp phù hợp đáp ứng đầy đủ các yêu cầu của chủ tiệm.
            </p>
          </div>

          {/* Flags representing coverage */}
          <div className="brand-story__flags">
            {/* US Flag */}
            <div className="brand-story__flag-wrapper" title="Mỹ">
              <svg width="36" height="24" viewBox="0 0 190 100" className="brand-story__flag">
                <rect width="190" height="100" fill="#c1193c"/>
                <rect width="190" height="7.69" y="7.69" fill="#fff"/>
                <rect width="190" height="7.69" y="23.08" fill="#fff"/>
                <rect width="190" height="7.69" y="38.46" fill="#fff"/>
                <rect width="190" height="7.69" y="53.85" fill="#fff"/>
                <rect width="190" height="7.69" y="69.23" fill="#fff"/>
                <rect width="190" height="7.69" y="84.62" fill="#fff"/>
                <rect width="76" height="53.85" fill="#1b2c58"/>
                <circle cx="12" cy="10" r="2.2" fill="#fff"/>
                <circle cx="27" cy="10" r="2.2" fill="#fff"/>
                <circle cx="42" cy="10" r="2.2" fill="#fff"/>
                <circle cx="57" cy="10" r="2.2" fill="#fff"/>
                <circle cx="19" cy="20" r="2.2" fill="#fff"/>
                <circle cx="34" cy="20" r="2.2" fill="#fff"/>
                <circle cx="49" cy="20" r="2.2" fill="#fff"/>
                <circle cx="64" cy="20" r="2.2" fill="#fff"/>
                <circle cx="12" cy="30" r="2.2" fill="#fff"/>
                <circle cx="27" cy="30" r="2.2" fill="#fff"/>
                <circle cx="42" cy="30" r="2.2" fill="#fff"/>
                <circle cx="57" cy="30" r="2.2" fill="#fff"/>
                <circle cx="19" cy="40" r="2.2" fill="#fff"/>
                <circle cx="34" cy="40" r="2.2" fill="#fff"/>
                <circle cx="49" cy="40" r="2.2" fill="#fff"/>
                <circle cx="64" cy="40" r="2.2" fill="#fff"/>
              </svg>
            </div>

            {/* Canada Flag */}
            <div className="brand-story__flag-wrapper" title="Canada">
              <svg width="36" height="24" viewBox="0 0 100 50" className="brand-story__flag">
                <rect width="100" height="50" fill="#ff0000"/>
                <rect width="50" height="50" x="25" fill="#ffffff"/>
                <path d="M 50 10 L 52 18 L 60 16 L 56 22 L 62 26 L 54 28 L 56 36 L 51 34 L 52 42 L 48 42 L 49 34 L 44 36 L 46 28 L 38 26 L 44 22 L 40 16 L 48 18 Z" fill="#ff0000"/>
              </svg>
            </div>

            {/* Australia Flag */}
            <div className="brand-story__flag-wrapper" title="Úc">
              <svg width="36" height="24" viewBox="0 0 100 50" className="brand-story__flag">
                <rect width="100" height="50" fill="#00008b"/>
                <rect width="50" height="25" fill="#00008b"/>
                <path d="M0 0 L50 25 M0 25 L50 0" stroke="#fff" strokeWidth="4"/>
                <path d="M0 0 L50 25 M0 25 L50 0" stroke="#ff0000" strokeWidth="2.5"/>
                <path d="M25 0 V25 M0 12.5 H50" stroke="#fff" strokeWidth="6"/>
                <path d="M25 0 V25 M0 12.5 H50" stroke="#ff0000" strokeWidth="4"/>
                <circle cx="25" cy="37.5" r="4" fill="#fff"/>
                <circle cx="75" cy="12.5" r="2" fill="#fff"/>
                <circle cx="65" cy="22" r="2" fill="#fff"/>
                <circle cx="85" cy="22" r="2" fill="#fff"/>
                <circle cx="75" cy="32" r="2" fill="#fff"/>
                <circle cx="78" cy="26" r="1" fill="#fff"/>
              </svg>
            </div>

            {/* EU Flag */}
            <div className="brand-story__flag-wrapper" title="Châu Âu">
              <svg width="36" height="24" viewBox="0 0 100 66.6" className="brand-story__flag">
                <rect width="100" height="66.6" fill="#003399"/>
                <g fill="#ffcc00">
                  <circle cx="50" cy="18.3" r="2.2"/>
                  <circle cx="50" cy="48.3" r="2.2"/>
                  <circle cx="35" cy="33.3" r="2.2"/>
                  <circle cx="65" cy="33.3" r="2.2"/>
                  <circle cx="39" cy="24.3" r="2.2"/>
                  <circle cx="61" cy="24.3" r="2.2"/>
                  <circle cx="39" cy="42.3" r="2.2"/>
                  <circle cx="61" cy="42.3" r="2.2"/>
                  <circle cx="44.5" cy="20.3" r="2.2"/>
                  <circle cx="55.5" cy="20.3" r="2.2"/>
                  <circle cx="44.5" cy="46.3" r="2.2"/>
                  <circle cx="55.5" cy="46.3" r="2.2"/>
                </g>
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
