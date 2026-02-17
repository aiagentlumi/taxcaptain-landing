export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "AI Document Processing",
      description: "Designed to read and extract data from W-2s, 1099s, receipts, and other tax documents — reducing manual data entry for your team."
    },
    {
      icon: "🎯",
      title: "Deduction Discovery Tools", 
      description: "AI-assisted analysis to help identify potential deductions and credits that may be applicable to your clients' situations."
    },
    {
      icon: "👥",
      title: "Client Portal",
      description: "A secure portal where clients can upload documents and track progress — streamlining communication between your firm and clients."
    },
    {
      icon: "🗺️",
      title: "Multi-State Support",
      description: "Designed to help manage the complexity of multi-state returns, with built-in jurisdiction awareness."
    },
    {
      icon: "🔍",
      title: "Review Assistance",
      description: "Built-in validation tools designed to help catch common errors before filing, supporting your team's quality control process."
    },
    {
      icon: "📊",
      title: "Workflow Dashboard",
      description: "Track return progress, team workload, and client status in one place to keep your firm organized during tax season."
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We&apos;re{' '}
            <span className="gradient-text">Building</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools designed to help tax professionals work more efficiently — 
            so you can focus on advising clients, not entering data.
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

        {/* Status Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-500/30 rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-blue-300">In Development · Launching 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
