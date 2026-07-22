import React from 'react'
import './Partners.css'
import phoVietnamLogo from '../assets/partners/pho-vietnam.png'
import phoVietExactLogo from '../assets/partners/pho-viet-exact.png'

export default function Partners() {
  const partners = [
    {
      id: 'pho-vietnam',
      name: 'Pho Vietnam',
      url: 'https://phovietnam.es/',
      logo: <img src={phoVietnamLogo} alt="Pho Vietnam" className="partner-img partner-img--wide" />
    },
    {
      id: 'google',
      name: 'Google',
      url: 'https://www.google.com',
      logo: (
        <svg viewBox="0 0 160 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <path d="M22.5 24.2c0-1.3-.1-2.7-.4-3.9H11.5v7.4h6.2c-.3 1.5-1.1 2.8-2.3 3.6v3h3.7c2.2-2 3.4-5 3.4-10.1z" fill="#4285F4"/>
          <path d="M11.5 35.5c3.2 0 6-1.1 8-3l-3.7-3c-1.1.7-2.5 1.2-4.3 1.2-3.3 0-6.1-2.2-7.1-5.3H.6v3.1c2.1 4.1 6.3 7 10.9 7z" fill="#34A853"/>
          <path d="M4.4 25.4c-.3-.8-.4-1.6-.4-2.4s.1-1.6.4-2.4v-3.1H.6C-.2 19.1-.6 21.5-.6 23s.4 3.9 1.2 5.5l3.8-3.1z" fill="#FBBC05"/>
          <path d="M11.5 11.5c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.4 8 14.7 7 11.5 7 6.9 7 2.7 9.9.6 14l3.8 3.1c1-3.1 3.8-5.6 7.1-5.6z" fill="#EA4335"/>
          <text x="32" y="32" fontFamily="'Outfit', 'Product Sans', sans-serif" fontWeight="700" fontSize="26" fill="#4285F4" letterSpacing="-0.5">Google</text>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com',
      logo: (
        <svg viewBox="0 0 170 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <circle cx="20" cy="24" r="16" fill="#1877F2"/>
          <path d="M22.5 35V24h3.7l.6-4.3h-4.3v-2.8c0-1.2.3-2.1 2.1-2.1h2.3V11c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 5.8v3.1h-3.7V24h3.7v11h4.7z" fill="#FFFFFF"/>
          <text x="44" y="32" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="24" fill="#1877F2" letterSpacing="-0.5">facebook</text>
        </svg>
      )
    },
    {
      id: 'pho-viet',
      name: 'Restaurante Pho Viet',
      url: 'https://www.restaurantephoviet.com/',
      logo: <img src={phoVietExactLogo} alt="Restaurante Pho Viet" className="partner-img partner-img--exact" />
    },
    {
      id: 'luxe-nails',
      name: 'Luxe Nails & Spa',
      url: '#',
      logo: (
        <svg viewBox="0 0 190 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <path d="M18 10L22 18L30 14L25 24L32 30L22 28L18 36L14 28L4 30L11 24L6 14L14 18L18 10Z" fill="#D4AF37"/>
          <circle cx="18" cy="23" r="4" fill="#FFF"/>
          <text x="38" y="27" fontFamily="'Cinzel', serif" fontWeight="800" fontSize="18" fill="#D4AF37" letterSpacing="2">LUXE</text>
          <text x="38" y="39" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="10" fill="#B38F24" letterSpacing="3">NAILS & SPA</text>
        </svg>
      )
    },
    {
      id: 'bella-beauty',
      name: 'Bella Beauty Salon',
      url: '#',
      logo: (
        <svg viewBox="0 0 190 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <path d="M18 8C12 16 8 22 8 28C8 34 12.5 38 18 38C23.5 38 28 34 28 28C28 22 24 16 18 8Z" fill="#EC4899" fillOpacity="0.8"/>
          <path d="M18 14C14 20 12 24 12 28C12 32 14.5 35 18 35C21.5 35 24 32 24 28C24 24 22 20 18 14Z" fill="#F472B6"/>
          <text x="34" y="27" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="20" fill="#EC4899" letterSpacing="1">BELLA</text>
          <text x="34" y="39" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="9" fill="#DB2777" letterSpacing="2.5">BEAUTY SALON</text>
        </svg>
      )
    },
    {
      id: 'royal-art-nails',
      name: 'Royal Art Nails',
      url: '#',
      logo: (
        <svg viewBox="0 0 200 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <path d="M6 14L13 28L20 14L27 28L34 14L32 34H8L6 14Z" fill="#8B5CF6"/>
          <circle cx="6" cy="11" r="2.5" fill="#A78BFA"/>
          <circle cx="20" cy="11" r="2.5" fill="#A78BFA"/>
          <circle cx="34" cy="11" r="2.5" fill="#A78BFA"/>
          <text x="42" y="27" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="19" fill="#8B5CF6" letterSpacing="1.5">ROYAL</text>
          <text x="42" y="39" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="10" fill="#7C3AED" letterSpacing="3">ART NAILS</text>
        </svg>
      )
    },
    {
      id: 'glamour-studio',
      name: 'Glamour Nails Studio',
      url: '#',
      logo: (
        <svg viewBox="0 0 210 48" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg">
          <path d="M18 6L21 16L31 19L21 22L18 32L15 22L5 19L15 16L18 6Z" fill="#06B6D4"/>
          <path d="M28 28L30 33L35 35L30 37L28 42L26 37L21 35L26 33L28 28Z" fill="#22D3EE"/>
          <text x="40" y="27" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="19" fill="#0891B2" letterSpacing="1">GLAMOUR</text>
          <text x="40" y="39" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="10" fill="#06B6D4" letterSpacing="2.5">NAILS STUDIO</text>
        </svg>
      )
    }
  ]

  // Multiply items for infinite smooth marquee loop
  const marqueeItems = [
    ...partners, ...partners, ...partners
  ]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-label-wrapper">
          <span className="partners-label">PARTNERS</span>
        </div>
        <div className="partners-marquee-viewport">
          <div className="partners-marquee-track">
            {marqueeItems.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.url}
                target={item.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="partner-logo-item"
                title={item.name}
              >
                {item.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
