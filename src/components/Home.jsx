import { lazy, Suspense } from 'react'
import Hero from './Hero'

// Lazy load below-the-fold sections to code-split non-critical CSS and JS
const BrandStory = lazy(() => import('./BrandStory'))
const Stats = lazy(() => import('./Stats'))
const Partners = lazy(() => import('./Partners'))
const Features = lazy(() => import('./Features'))
const Services = lazy(() => import('./Services'))
const About = lazy(() => import('./About'))
const Testimonials = lazy(() => import('./Testimonials'))
const Blog = lazy(() => import('./Blog'))

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <BrandStory />
        <Stats />
        <Partners />
        <Features />
        <Services />
        <About />
        <Testimonials />
        <Blog />
      </Suspense>
    </>
  )
}
