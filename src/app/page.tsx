import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TaxCaptain.ai - AI Tax Prep That Works While You Sleep',
  description: 'AI-powered tax preparation assistant for small accounting firms. Automated document processing, smart deductions finder, client portal, and multi-state filing.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}