import { lazy, Suspense } from 'react'
import Hero from './Hero'
import BrandStory from './BrandStory'
import Stats from './Stats'
import Partners from './Partners'

// Lazy load below-the-fold sections to code-split non-critical CSS and JS
const Features = lazy(() => import('./Features'))
const Services = lazy(() => import('./Services'))
const About = lazy(() => import('./About'))
const Testimonials = lazy(() => import('./Testimonials'))
const Blog = lazy(() => import('./Blog'))

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Stats />
      <Partners />
      <Suspense fallback={null}>
        <Features />
        <Services />
        <About />
        <Testimonials />
        <Blog />
      </Suspense>
    </>
  )
}
