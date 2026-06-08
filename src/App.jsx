import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NailSalonServices from './components/NailSalonServices'
import NailTemplateViewer from './components/NailTemplateViewer'
import Footer from './components/Footer'

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
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash, isDemoPage])

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {!isDemoPage && <Navbar />}
      <main style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dich-vu-nails" element={<NailSalonServices />} />
          <Route path="/demo/:templateId" element={<NailTemplateViewer />} />
        </Routes>
      </main>
      {!isDemoPage && <Footer />}
    </div>
  )
}

export default App



