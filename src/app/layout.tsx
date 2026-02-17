import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaxCaptain.ai - AI Tax Prep That Works While You Sleep',
  description: 'AI-powered tax preparation assistant for small accounting firms. Automated document processing, smart deductions finder, client portal, and multi-state filing.',
  keywords: ['tax preparation', 'AI tax software', 'accounting firms', 'tax automation', 'CPA software'],
  authors: [{ name: 'TaxCaptain.ai' }],
  openGraph: {
    title: 'TaxCaptain.ai - AI Tax Prep That Works While You Sleep',
    description: 'AI-powered tax preparation assistant for small accounting firms. Automated document processing, smart deductions finder, client portal, and multi-state filing.',
    type: 'website',
    url: 'https://taxcaptain.ai',
    siteName: 'TaxCaptain.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxCaptain.ai - AI Tax Prep That Works While You Sleep',
    description: 'AI-powered tax preparation assistant for small accounting firms.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f2937',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}