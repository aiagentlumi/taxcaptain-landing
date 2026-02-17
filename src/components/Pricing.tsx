export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "For small firms getting started with AI-assisted tax prep",
      features: [
        "Up to 100 returns per month",
        "AI document processing",
        "Basic deduction discovery",
        "Client portal access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "/month",
      description: "For growing practices that need more capacity",
      features: [
        "Up to 500 returns per month",
        "Advanced AI deduction tools",
        "Multi-state support (up to 5)",
        "Priority support",
        "Workflow dashboard",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For larger firms with custom requirements",
      features: [
        "Unlimited returns",
        "White-label option",
        "All states supported",
        "Dedicated account manager",
        "Custom integrations",
        "Priority SLA"
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
            Planned <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Pricing is preliminary and may change before launch. 
            Waitlist members will receive founding member rates.
          </p>
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
                Join Waitlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
