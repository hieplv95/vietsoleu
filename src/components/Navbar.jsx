import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo-yocheckin.png'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navLinks = [
    {
      label: t('navbar.services'),
      href: '#features',
      dropdown: [
        { label: t('navbar.yocheckin'), href: '#features' },
        { label: t('navbar.webSeo'), href: '/dich-vu-nails' },
        { label: t('navbar.socialAds'), href: '/social-media-marketing' },
      ]
    },
    { label: t('navbar.webSeo'), href: '/dich-vu-nails' },
    { label: t('navbar.socialAds'), href: '/social-media-marketing' },
    { label: t('navbar.solutions'), href: '#about' },
    { label: t('navbar.blog'), href: '/blog' },
    { label: t('navbar.contact'), href: '#contact' },
  ]

  useEffect(() => {
    // Maintain theme compatibility
    const currentTheme = localStorage.getItem('vietsol-theme') || 'light'
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const location = useLocation()

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
      setMenuOpen(false)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar__logo-icon-container">
            <img src={logoImg} alt="YoCheckIn Logo" className="navbar__logo-icon-cropped" />
          </div>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link, i) => (
            <div
              key={i}
              className="navbar__nav-item"
              onMouseEnter={() => link.dropdown ? setActiveDropdown(i) : null}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className="navbar__nav-link"
                onClick={(e) => {
                  handleHashLinkClick(e, link.href)
                  if (!link.href.startsWith('#')) {
                    setMenuOpen(false)
                  }
                }}
              >
                {link.label}
                {link.dropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </Link>
              {link.dropdown && activeDropdown === i && (
                <div className="navbar__dropdown">
                  {link.dropdown.map((item, j) => (
                    <Link
                      key={j}
                      to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                      className="navbar__dropdown-link"
                      onClick={(e) => {
                        handleHashLinkClick(e, item.href)
                        setActiveDropdown(null)
                        if (!item.href.startsWith('#')) {
                          setMenuOpen(false)
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="navbar__actions">
          {/* Language Switcher Toggle */}
          <button
            className="navbar__lang-toggle"
            onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
            aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            title={language === 'vi' ? 'English' : 'Tiếng Việt'}
          >
            {/* Globe Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>{language === 'vi' ? 'EN' : 'VI'}</span>
          </button>

          <a href="https://wa.me/+32" className="navbar__whatsapp" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a href="https://wa.me/+32" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
            <span>{t('navbar.freeTrial')}</span>
          </a>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
