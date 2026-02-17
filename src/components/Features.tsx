export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "Document Reading",
      description: "We're exploring how AI can read and extract data from W-2s, 1099s, receipts, and other common tax documents."
    },
    {
      icon: "🎯",
      title: "Deduction Checklist Tools", 
      description: "Tools to help your team organize and review potential deductions and credits — a second set of eyes, not a replacement for professional judgment."
    },
    {
      icon: "👥",
      title: "Client Portal",
      description: "A place for clients to securely upload documents and check on their return status, so your team spends less time on back-and-forth emails."
    },
    {
      icon: "🗺️",
      title: "Multi-State Awareness",
      description: "We're building with multi-state complexity in mind, so firms with clients across jurisdictions have better tooling."
    },
    {
      icon: "🔍",
      title: "Review Checklists",
      description: "Checklists and validation prompts to support your team's existing quality control process before filing."
    },
    {
      icon: "📊",
      title: "Workflow Dashboard",
      description: "A dashboard to see return progress, team workload, and client status in one view during tax season."
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
            We&apos;re developing tools for tax professionals. Here&apos;s what 
            we&apos;re working on — your feedback will shape what we ship.
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
