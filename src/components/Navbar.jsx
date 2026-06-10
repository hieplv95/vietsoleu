import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo-vietsol.png'
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
            <img src={logoImg} alt="VietSol Logo" className="navbar__logo-icon-cropped" />
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
            <svg className="navbar__lang-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="navbar__lang-text-desktop">{language === 'vi' ? 'EN' : 'VI'}</span>
            <span className="navbar__lang-text-mobile">{language === 'vi' ? 'VN' : 'EN'}</span>
          </button>

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
