import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo-vietsol.png'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const location = useLocation()

  const footerLinks = {
    [t('footer.col_features')]: [
      { label: t('footer.link_webSeo'), href: '/dich-vu-nails' },
      { label: t('footer.link_clientMgmt'), href: '#features' },
      { label: t('footer.link_sms'), href: '#features' },
      { label: t('footer.link_review'), href: '#features' },
    ],
    [t('footer.col_resources')]: [
      { label: t('footer.link_support'), href: '#' },
      { label: t('footer.link_guide'), href: '#' },
      { label: t('footer.link_community'), href: '#' },
      { label: t('footer.link_blog'), href: '/blog' },
    ],
    [t('footer.col_company')]: [
      { label: t('footer.link_about'), href: '#about' },
      { label: t('footer.link_jobs'), href: '#' },
      { label: t('footer.link_partners'), href: '#' },
      { label: t('footer.link_contact'), href: '#contact' },
    ],
  }

  const handleHashLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon-container">
              <img src={logoImg} alt="VietSol Logo" className="footer__logo-icon-cropped" />
            </div>
          </div>
          <p className="footer__tagline">
            {t('footer.tagline')}
          </p>
          <p className="footer__tagline-sub">
            {t('footer.subtagline')}
          </p>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <p className="footer__newsletter-label">{t('footer.newsletter')}</p>
            <div className="footer__newsletter-form">
              <input type="email" placeholder={t('footer.emailPlaceholder')} className="footer__newsletter-input" />
              <button className="footer__newsletter-btn">{t('footer.subscribe')}</button>
            </div>
          </div>

          {/* Social */}
          <div className="footer__socials">
            <a href="https://www.facebook.com/vietsol.eu" className="footer__social" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://x.com/vietsoldigital" className="footer__social" target="_blank" rel="noreferrer" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://wa.me/+32" className="footer__social footer__social--whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer__col">
            <h4 className="footer__col-title">{group}</h4>
            <ul className="footer__links">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    className="footer__link"
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{t('footer.copyright')}</p>
          <div className="footer__bottom-links">
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.cookie')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
