# TaxCaptain.ai Landing Page

A premium, AI-focused landing page for TaxCaptain.ai - an AI-powered tax preparation assistant for small accounting firms.

## Features

- **Modern Dark Theme**: Professional, tech-forward design that appeals to accounting professionals
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Waitlist Integration**: Email capture form ready for integration with email services
- **Premium Components**: 
  - Hero section with compelling headline
  - Feature showcase with AI-focused benefits
  - Transparent pricing tiers
  - Social proof testimonials
  - Trust badges and security indicators
  - Comprehensive footer

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom gradients and animations
- **Typography**: Inter font for modern, professional look
- **Icons**: Heroicons and emoji for visual elements

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This site is ready for deployment to Vercel:

1. Connect your GitHub repository to Vercel
2. Set the domain to `taxcaptain.ai` (already purchased on Namecheap)
3. Configure DNS in Namecheap to point to Vercel
4. Deploy!

### Vercel Deployment Steps

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel --prod
```

## Email Integration

The waitlist form currently logs to console. To integrate with an email service:

1. **Formspree**: Replace form action with Formspree endpoint
2. **ConvertKit**: Add ConvertKit API integration
3. **Mailchimp**: Use Mailchimp API for list management
4. **Custom**: Build API route in `pages/api/` for custom handling

## Customization

### Colors
The site uses a custom color scheme defined in `globals.css`:
- Primary gradient: Blue (#667eea) to Purple (#764ba2)
- Background: Dark gray (#111827)
- Cards: Semi-transparent with blur effects

### Content Updates
- Hero text: Update in `components/Hero.tsx`
- Features: Modify array in `components/Features.tsx`
- Pricing: Update plans in `components/Pricing.tsx`
- Testimonials: Replace with real customer quotes in `components/Testimonials.tsx`

## Performance

- Optimized images and fonts
- Minimal JavaScript bundle
- CSS animations for smooth interactions
- SEO-optimized metadata

## Analytics

Ready for analytics integration:
- Google Analytics 4
- Mixpanel for conversion tracking
- Hotjar for user behavior analysis

## Security

- Content Security Policy headers
- XSS protection
- Frame protection
- HTTPS only (enforced by Vercel)

## Contact

For questions about this landing page:
- Email: hello@taxcaptain.ai
- Development: Built for Austin accounting firm outreach

---

**Note**: This is a promotional landing page for a product in development. Expected launch: Q2 2026.