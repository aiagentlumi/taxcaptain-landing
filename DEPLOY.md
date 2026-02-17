# TaxCaptain.ai Deployment Guide

## Quick Deploy to Vercel

### Option 1: Auto Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   cd /Users/m1h1480/.openclaw/workspace/taxcaptain-landing
   git init
   git add .
   git commit -m "Initial TaxCaptain.ai landing page"
   git remote add origin https://github.com/YOUR_USERNAME/taxcaptain-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repo
   - Deploy automatically

### Option 2: CLI Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
cd /Users/m1h1480/.openclaw/workspace/taxcaptain-landing
vercel --prod
```

## Domain Configuration

Since `taxcaptain.ai` is purchased on Namecheap:

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Add custom domain: `taxcaptain.ai`
   - Copy the provided DNS records

2. **In Namecheap DNS**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61` (Vercel's IP)
   - Or use Vercel nameservers for easier management

## Email Integration Setup

The waitlist form needs email service integration. Choose one:

### Formspree (Simplest)
1. Create account at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update Hero component form action

### ConvertKit (Recommended for email marketing)
1. Create ConvertKit account
2. Create a form/landing page
3. Get API endpoint
4. Add to Next.js API route

### Code Update for Formspree:
```tsx
// In src/components/Hero.tsx, replace the form with:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="Enter your email" required />
  <button type="submit">Join the Waitlist</button>
</form>
```

## Performance & SEO

- ✅ Responsive design
- ✅ SEO meta tags
- ✅ Open Graph tags
- ✅ Fast loading with Next.js
- ✅ Dark theme optimized

## Analytics (Optional)

Add Google Analytics:

1. Create GA4 property
2. Add tracking code to layout.tsx:
   ```tsx
   import Script from 'next/script'
   
   // In layout.tsx body:
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
   <Script id="google-analytics">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

## Launch Checklist

- [ ] Domain connected and SSL active
- [ ] Email collection working
- [ ] Test on mobile/desktop
- [ ] Analytics tracking (optional)
- [ ] Social media links updated
- [ ] Contact email forwarding setup

## Austin Outreach Ready

The landing page is optimized for Austin accounting firms:
- Professional, trustworthy design
- AI-forward but not intimidating
- Clear value proposition for CPAs
- Local testimonials (Austin-based companies)
- Pricing that scales with firm size

Perfect for cold outreach campaigns! 🚀