# Setup Guide: from zero to a live website

Estimated time: 1 to 2 hours. Estimated cost: about $12 per year (domain only).

## 0. Install tools (once)
1. Install Node.js (LTS version) from https://nodejs.org
2. Install Git from https://git-scm.com
3. Unzip the project, open a terminal in the folder, then run:
   `npm install` then `npm run dev` and open http://localhost:3000

## 1. Fill in her real details
Open `site.config.ts` and replace every `TODO`:
- Business name, therapist name, license number
- Phone, email, address (or remove the address if she works from home or travels)
- Services and prices, hours, short About text
- Confirm with the Florida Board of Massage Therapy what must appear in advertising.
Add photos later in `public/` and reference them from the page.

## 2. Put the code on GitHub
1. Create a free GitHub account if needed, then create a new repository named `massage-site`
   (public is fine, but keep her private details out of it).
2. In the project folder:
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/massage-site.git
git push -u origin main
```

## 3. Deploy free on Cloudflare Pages
1. Create a free Cloudflare account.
2. Go to Workers & Pages, then Create, then Pages, then Connect to Git, and pick the repo.
3. Settings: build command `npm run build`, output directory `out`.
4. Deploy. You get a free `something.pages.dev` address right away.
Every `git push` to `main` redeploys automatically.

## 4. Buy and connect a domain (about $10 to $15 per year)
1. Search for a domain at Cloudflare Registrar (or Porkbun). Prefer `.com`.
2. In Cloudflare Pages, open the project, Custom domains, then add the domain.
3. Update `url` in `site.config.ts`, then push.
Check the renewal price before you buy.

## 5. Contact form (free)
1. Create a free Formspree account and a new form. Copy the endpoint URL.
2. Put it in `formEndpoint` in `site.config.ts` and push. Leaving it empty hides the form.

## 6. Online booking (free to cheap)
1. Set up Square Appointments (or Fresha or Vagaro) for her services.
2. Paste the booking link into `bookingUrl` in `site.config.ts` and push.
Check current fees for card payments.

## 7. Google Business Profile (free, important)
1. Go to https://business.google.com and create her profile (name, category "Massage therapist", hours, photos).
2. Add the website and booking link. Google will verify the business (often by postcard or video).
3. Ask happy clients for reviews.

## 8. Measure it (for the resume)
1. Open the live site in Chrome, DevTools, Lighthouse, run it on Mobile.
2. Record Performance, Accessibility, Best Practices and SEO scores. Use only real numbers on the resume.
3. Optionally turn on Cloudflare Web Analytics (free) to see visits.

## Resume entry (edit with your real numbers)
**Small Business Website (Massage Practice) | Developer & Designer**
- Designed, built and deployed a responsive website for a family-owned massage practice using Next.js, TypeScript and Tailwind CSS, hosted on Cloudflare Pages with a custom domain.
- Integrated online booking and a contact form; added local SEO and accessibility features, scoring [X] on Lighthouse.
Get her permission before using the business name publicly.
