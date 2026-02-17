export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "Automated Document Processing",
      description: "AI instantly reads and extracts data from W-2s, 1099s, receipts, and other tax documents. No more manual data entry."
    },
    {
      icon: "🎯",
      title: "Smart Deductions Finder", 
      description: "Advanced AI analyzes client data to identify every possible deduction and credit, maximizing refunds and minimizing taxes."
    },
    {
      icon: "👥",
      title: "Client Portal",
      description: "Secure portal where clients can upload documents, track progress, and communicate directly with your firm."
    },
    {
      icon: "🗺️",
      title: "Multi-State Filing",
      description: "Handle complex multi-state returns with confidence. AI ensures compliance across all jurisdictions."
    },
    {
      icon: "🔍",
      title: "Error Detection",
      description: "Built-in validation catches errors before filing, reducing amendments and IRS notices."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track firm performance, client satisfaction, and revenue metrics in real-time."
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Tax Professionals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to streamline your tax preparation workflow and delight your clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glow-card rounded-xl p-8 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-500/30 rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-blue-300">Launching Q2 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}