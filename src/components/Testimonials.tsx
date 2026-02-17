export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Managing Partner",
      company: "Austin Tax Solutions",
      image: "/api/placeholder/64/64",
      quote: "TaxCaptain.ai has transformed our practice. We're processing 3x more returns with the same staff, and our clients love the automated portal.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CPA",
      company: "Rodriguez & Associates",
      image: "/api/placeholder/64/64",
      quote: "The AI deduction finder caught $15,000 in missed deductions for one client alone. It's like having a tax expert reviewing every return.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Tax Director", 
      company: "Walsh Financial Group",
      image: "/api/placeholder/64/64",
      quote: "Multi-state filing used to be a nightmare. Now it's completely automated. Our accuracy has never been higher.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Tax Professionals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of accounting firms who have revolutionized their tax preparation workflow with AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glow-card rounded-xl p-8">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-blue-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">250+</div>
              <div className="text-gray-300">Firms Using TaxCaptain</div>
            </div>
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-gray-300">Returns Processed</div>
            </div>
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">$50M+</div>
              <div className="text-gray-300">Additional Refunds Found</div>
            </div>
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="glow-card rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-gray-300 mb-8">
              Join the waitlist and be among the first to experience AI-powered tax preparation.
            </p>
            <button className="btn-primary px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-white">
              Join the Waitlist Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}