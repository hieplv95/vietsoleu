import { lazy, Suspense } from 'react'
import Hero from './Hero'
import Partners from './Partners'

// Lazy-load below-the-fold sections to reduce initial JS bundle
const BrandStory = lazy(() => import('./BrandStory'))
const Stats = lazy(() => import('./Stats'))
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
      </Suspense>
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
