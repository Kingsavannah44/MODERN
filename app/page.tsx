'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Portfolio />
        <Experience />
        <TechStack />
        <About />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  )
}