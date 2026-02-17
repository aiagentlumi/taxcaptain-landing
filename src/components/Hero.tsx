'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    console.log('Waitlist signup:', email)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">TaxCaptain.ai</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AI-Powered Tools for{' '}
          <span className="gradient-text">Tax Professionals</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We&apos;re building AI tools for small accounting firms that want to 
          spend less time on repetitive tasks and more time advising clients. 
          Join the waitlist to shape the product and get early access.
        </p>
        
        {/* CTA Section */}
        <div className="mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-white"
                >
                  Join the Waitlist
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-300 mb-2">You&apos;re on the list!</h3>
                <p className="text-gray-300">We&apos;ll notify you when TaxCaptain.ai launches.</p>
              </div>
            </div>
          )}
        </div>
        
        {/* What We're Building */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">📄</div>
            <div className="text-gray-300">AI Document Processing</div>
          </div>
          <div>
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-gray-300">Smart Deduction Discovery</div>
          </div>
          <div>
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-gray-300">Workflow Automation</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}
