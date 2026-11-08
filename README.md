# Massage Practice Website

A fast, accessible, mobile-first one-page website for a small massage therapy practice.
Built with Next.js (static export), TypeScript and Tailwind CSS, and hosted for free on Cloudflare Pages.

## Features
- Responsive layout designed mobile-first
- All business details (services, prices, hours, contact) in one file: `site.config.ts`
- Accessible: semantic HTML, skip link, visible focus states, labeled form fields, reduced-motion support
- Local SEO: page metadata, Open Graph tags, and `LocalBusiness` structured data (JSON-LD)
- Contact form using Formspree (no server needed)
- Static output, so there is no server to maintain and hosting is free

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build
```bash
npm run build      # outputs the static site to ./out
```

## Customize
Edit `site.config.ts`: business name, services, prices, hours, address, booking link, and form endpoint.

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Build output directory: `out`
- Framework preset: Next.js (Static HTML Export)

## Requirements and decisions
(Add a short section here for your portfolio: what the client needed, the choices you made, and the results,
for example Lighthouse scores and what you would add next.)
# MomMassageWebsite
