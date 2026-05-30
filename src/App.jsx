import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Stats from './components/Stats'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ width: '100%' }}>
        <Hero />
        <BrandStory />
        <Stats />
        <Features />
        <Services />
        <About />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
