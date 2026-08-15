// App main routing configuration
import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

// Lazy-load non-critical components and routes to minimize initial bundle
const Footer = lazy(() => import('./components/Footer'))
const FloatingChat = lazy(() => import('./components/FloatingChat'))
const NailSalonServices = lazy(() => import('./components/NailSalonServices'))
const NailTemplateViewer = lazy(() => import('./components/NailTemplateViewer'))
const SocialMediaMarketing = lazy(() => import('./components/SocialMediaMarketing'))
const BlogPost = lazy(() => import('./components/BlogPost'))
const BlogPage = lazy(() => import('./components/BlogPage'))
const Contact = lazy(() => import('./components/Contact'))
const AboutUs = lazy(() => import('./components/AboutUs'))

function App() {
  const { pathname, hash } = useLocation()
  const isDemoPage = pathname.startsWith('/demo/')

  useEffect(() => {
    // Only scroll if we are not navigating inside demo previewer
    if (isDemoPage) return

    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 150)
        return () => clearTimeout(timer)
      }
    } else if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash, isDemoPage])

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {!isDemoPage && <Navbar />}
      <main style={{ width: '100%' }}>
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ width: '36px', height: '36px', border: '3px solid var(--clr-border)', borderTopColor: 'var(--clr-primary)', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite' }} />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thiet-ke-website-nails" element={<NailSalonServices />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/tiem-nails-google-maps" element={<BlogPost postIdOverride="tiem-nails-google-maps" />} />
            <Route path="/demo/:templateId" element={<NailTemplateViewer />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/ve-chung-toi" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </main>
      {!isDemoPage && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingChat />
        </Suspense>
      )}
    </div>
  )
}

export default App
