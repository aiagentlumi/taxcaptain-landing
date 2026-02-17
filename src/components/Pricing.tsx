export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month per firm",
      description: "Perfect for small firms getting started with AI tax prep",
      features: [
        "Up to 100 returns per month",
        "Automated document processing",
        "Basic deduction finder",
        "Client portal access",
        "Email support",
        "1-state filing included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "/month per firm",
      description: "Most popular plan for growing tax practices",
      features: [
        "Up to 500 returns per month",
        "Advanced AI deduction finder",
        "Multi-state filing (up to 5 states)",
        "Priority client portal",
        "Phone & email support",
        "Analytics dashboard",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large accounting firms",
      features: [
        "Unlimited returns",
        "White-label solution",
        "All states supported",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom AI training",
        "Advanced analytics",
        "SLA guarantee"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your firm&apos;s needs. All plans include core AI features and secure client portals.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-gray-800/50 border border-gray-600 rounded-lg p-1">
            <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-gray-400 font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'glow-card border-2 border-blue-500/50 scale-105' 
                  : 'glow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Join Waitlist'}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-green-900/20 border border-green-500/30 rounded-full px-8 py-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-green-300 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}