import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import SocialScheduler from './components/SocialScheduler'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ width: '100%' }}>
        <Hero />
        <Stats />
        <Features />
        <About />
        <Testimonials />
        <SocialScheduler />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
