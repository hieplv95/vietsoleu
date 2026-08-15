import { useLanguage } from '../context/LanguageContext'
import salonMain from '../assets/salon_main_opt.webp'
import yocheckinReal from '../assets/yocheckin-real.webp'
import salonWaiting from '../assets/salon_waiting_opt.webp'
import salonCheckin from '../assets/salon_checkin_opt.webp'
import salonTech from '../assets/salon_tech_opt.webp'
import './BrandStory.css'

export default function BrandStory() {
  const { t } = useLanguage()

  return (
    <section className="brand-story section" id="brand-story">
      <div className="container brand-story__inner">

        {/* ===== LEFT: Image Grid ===== */}
        <div className="brand-story__left">
          <div className="brand-story__grid">

            {/* Top row: Accent line + Main Image */}
            <div className="brand-story__top-row">
              <div className="brand-story__accent-line"></div>
              <img src={salonMain} alt="Vietnamese nail tech working on client" className="brand-story__img brand-story__img--main" loading="lazy" width="621" height="621" />
            </div>

            {/* Bottom row: Grid with Left vertical, Middle stacked, Right vertical */}
            <div className="brand-story__bottom-row">
              {/* Left Column: Vertical image */}
              <div className="brand-story__col-vertical">
                <img src={salonCheckin} alt="Client checkin" className="brand-story__img brand-story__img--vertical" loading="lazy" width="180" height="180" />
              </div>

              {/* Middle Column: Stacked horizontal images */}
              <div className="brand-story__col-stacked">
                <div className="brand-story__img-wrapper brand-story__img-wrapper--horizontal">
                  <img src={yocheckinReal} alt="YoCheckIn iPad" className="brand-story__img brand-story__img--cropped" loading="lazy" width="400" height="200" />
                </div>
                <img src={salonTech} alt="YoCheckIn terminal setup" className="brand-story__img brand-story__img--horizontal" loading="lazy" width="180" height="120" />
              </div>

              {/* Right Column: Vertical image */}
              <div className="brand-story__col-vertical">
                <img src={salonWaiting} alt="Cozy European salon" className="brand-story__img brand-story__img--vertical" loading="lazy" width="180" height="266" />
              </div>
            </div>

          </div>
        </div>

        {/* ===== RIGHT: Content ===== */}
        <div className="brand-story__right">
          <h2 className="brand-story__title">{t('brandStory.title')}</h2>
          <div className="brand-story__since">{t('brandStory.since')}</div>

          <div className="brand-story__content">
            <p className="brand-story__desc">
              {t('brandStory.desc1')}
            </p>
            <p className="brand-story__desc">
              {t('brandStory.desc2')}
            </p>
          </div>

          {/* Flags representing coverage */}
          <div className="brand-story__flags">
            {/* UK Flag */}
            <div className="brand-story__flag-wrapper" title={t('brandStory.flagUk')}>
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
            <div className="brand-story__flag-wrapper" title={t('brandStory.flagGermany')}>
              <svg width="72" height="48" viewBox="0 0 5 3" className="brand-story__flag">
                <rect width="5" height="1" y="0" fill="#000000" />
                <rect width="5" height="1" y="1" fill="#DD0000" />
                <rect width="5" height="1" y="2" fill="#FFCC00" />
              </svg>
            </div>

            {/* France Flag */}
            <div className="brand-story__flag-wrapper" title={t('brandStory.flagFrance')}>
              <svg width="72" height="48" viewBox="0 0 3 2" className="brand-story__flag">
                <rect width="1" height="2" x="0" fill="#00209F" />
                <rect width="1" height="2" x="1" fill="#FFFFFF" />
                <rect width="1" height="2" x="2" fill="#F31830" />
              </svg>
            </div>

            {/* Spain Flag */}
            <div className="brand-story__flag-wrapper" title={t('brandStory.flagSpain')}>
              <svg width="72" height="48" viewBox="0 0 750 500" className="brand-story__flag">
                <rect width="750" height="500" fill="#F1BF00" />
                <rect width="750" height="125" fill="#C60B1E" />
                <rect width="750" height="125" y="375" fill="#C60B1E" />
                {/* Simplified coat of arms */}
                <path d="M 220,180 h 30 v 140 h -30 z M 290,180 h 30 v 140 h -30 z M 235,180 L 305,180 L 305,250 A 35,35 0 0,1 235,250 Z" fill="#C60B1E" />
                <path d="M 245,190 h 50 v 50 A 25,25 0 0,1 245,240 Z" fill="#F1BF00" />
              </svg>
            </div>

            {/* EU Flag - Flat structure, 0 nested defs/uses */}
            <div className="brand-story__flag-wrapper" title={t('brandStory.flagEu')}>
              <svg width="72" height="48" viewBox="0 0 300 200" className="brand-story__flag">
                <rect width="300" height="200" fill="#003399" />
                <polygon points="150,30 153,37 160,37 154.5,41 157.5,48 150,44 142.5,48 145.5,41 140,37 147,37" fill="#FFCC00" />
                <polygon points="180,38 183,45 190,45 184.5,49 187.5,56 180,52 172.5,56 175.5,49 170,45 177,45" fill="#FFCC00" />
                <polygon points="202,60 205,67 212,67 206.5,71 209.5,78 202,74 194.5,78 197.5,71 192,67 199,67" fill="#FFCC00" />
                <polygon points="210,90 213,97 220,97 214.5,101 217.5,108 210,104 202.5,108 205.5,101 200,97 207,97" fill="#FFCC00" />
                <polygon points="202,120 205,127 212,127 206.5,131 209.5,138 202,134 194.5,138 197.5,131 192,127 199,127" fill="#FFCC00" />
                <polygon points="180,142 183,149 190,149 184.5,153 187.5,160 180,156 172.5,160 175.5,153 170,149 177,149" fill="#FFCC00" />
                <polygon points="150,150 153,157 160,157 154.5,161 157.5,168 150,164 142.5,168 145.5,161 140,157 147,157" fill="#FFCC00" />
                <polygon points="120,142 123,149 130,149 124.5,153 127.5,160 120,156 112.5,160 115.5,153 110,149 117,149" fill="#FFCC00" />
                <polygon points="98,120 101,127 108,127 102.5,131 105.5,138 98,134 90.5,138 93.5,131 88,127 95,127" fill="#FFCC00" />
                <polygon points="90,90 93,97 100,97 94.5,101 97.5,108 90,104 82.5,108 85.5,101 80,97 87,97" fill="#FFCC00" />
                <polygon points="98,60 101,67 108,67 102.5,71 105.5,78 98,74 90.5,78 93.5,71 88,67 95,67" fill="#FFCC00" />
                <polygon points="120,38 123,45 130,45 124.5,49 127.5,56 120,52 112.5,56 115.5,49 110,45 117,45" fill="#FFCC00" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
