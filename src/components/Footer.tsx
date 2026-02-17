export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">TaxCaptain.ai</h3>
              <p className="text-gray-300 max-w-md">
                AI-powered tools designed to help small accounting firms 
                streamline tax preparation workflows.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@taxcaptain.ai" className="hover:text-blue-400 transition-colors">
                  hello@taxcaptain.ai
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Austin, Texas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="mailto:hello@taxcaptain.ai" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 text-sm text-gray-400 space-y-3">
            <p>
              <strong className="text-gray-300">Important Disclaimer:</strong> TaxCaptain.ai is a software tool designed to assist licensed tax professionals. 
              It is not a licensed CPA firm and does not provide tax, legal, or financial advice. 
              All tax returns and financial decisions should be reviewed and approved by a qualified, licensed professional.
            </p>
            <p>
              TaxCaptain.ai is currently in development and not yet publicly available. 
              Features described on this page represent our development roadmap and are subject to change. 
              No guarantees are made regarding specific results, time savings, or accuracy rates.
            </p>
            <p>
              Results will vary based on individual firm circumstances, data quality, and use case complexity.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Hunter Family Ventures LLC. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Launch Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-500/30 rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-300 text-sm">
              Currently in development · Expected launch 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
