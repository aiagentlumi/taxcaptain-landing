export default function Testimonials() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Tax Professionals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re building TaxCaptain specifically for small and mid-size accounting firms 
            who want to spend less time on data entry and more time advising clients.
          </p>
        </div>

        {/* Value Props instead of fake testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glow-card rounded-xl p-8">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-4">Designed for Small Firms</h3>
            <p className="text-gray-300 leading-relaxed">
              We&apos;re focused on firms with 1-10 CPAs — the practices that 
              need automation the most but can&apos;t afford enterprise solutions.
            </p>
          </div>

          <div className="glow-card rounded-xl p-8">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-4">Tool, Not Replacement</h3>
            <p className="text-gray-300 leading-relaxed">
              TaxCaptain assists your CPAs — it doesn&apos;t replace them. 
              Your professionals stay in control of every return and every decision.
            </p>
          </div>

          <div className="glow-card rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-4">Security First</h3>
            <p className="text-gray-300 leading-relaxed">
              Tax data is sensitive. We&apos;re building with encryption, 
              access controls, and data protection as foundational requirements.
            </p>
          </div>
        </div>

        {/* Early Access CTA */}
        <div className="mt-16 text-center">
          <div className="glow-card rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Be an Early Adopter</h3>
            <p className="text-gray-300 mb-8">
              Join the waitlist to get early access, help shape the product, 
              and lock in founding member pricing when we launch.
            </p>
            <a href="#top" className="btn-primary px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-white inline-block">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
