# Abhijeet Sakpal — Portfolio

Personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx       # Root layout, fonts, SEO
  page.tsx         # Home (composes all sections)
  globals.css      # Tailwind + custom styles
  icon.svg         # Favicon
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts          # All content (edit here to update site)
public/
  Abhijeet_Sakpal_Resume.pdf   # Downloadable resume
```

**To update content:** edit `lib/data.ts` (profile, projects, experience, skills, services).

## Deploy to Vercel (recommended — free, auto-SSL, custom domain)

### Option A — Deploy from GitHub (best — auto-deploys on every push)

1. **Create a GitHub repo:**

   ```bash
   cd "D:/My Work/Grow Up/Portfolio"
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create portfolio --public --source=. --push
   ```

   Or create the repo manually on github.com and:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to <https://vercel.com/signup> and sign in with GitHub
   - Click **Add New → Project**
   - Import your `portfolio` repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy** — done in ~60 seconds

3. **You get:** `https://portfolio-yourname.vercel.app` — live with HTTPS.

### Option B — Deploy via Vercel CLI

```bash
npm install -g vercel
cd "D:/My Work/Grow Up/Portfolio"
vercel
```

Follow the prompts. First deploy creates the project, future runs of `vercel --prod` push to production.

## Custom domain (recommended)

Buy a domain (e.g. `abhijeetsakpal.dev`) — $10–15/year on:
- **Namecheap** (cheap) — namecheap.com
- **Cloudflare Registrar** (at-cost pricing) — cloudflare.com
- **Porkbun** (cheap, modern) — porkbun.com

In Vercel:
1. Project → **Settings** → **Domains**
2. Add `abhijeetsakpal.dev` and `www.abhijeetsakpal.dev`
3. Vercel shows DNS records — paste them into your registrar's DNS panel
4. SSL is auto-issued. Live in ~5 minutes.

> Update `metadataBase` in `app/layout.tsx` from `https://abhijeetsakpal.dev` to your actual domain.

## Hosting alternatives

| Host | Cost | Why pick it |
|---|---|---|
| **Vercel** ⭐ | Free | Made by Next.js team. Best DX, fastest deploy, free SSL, easy custom domain. |
| Netlify | Free | Great alt to Vercel. Slightly slower Next.js builds. |
| Cloudflare Pages | Free | Cheapest at scale, great if you also use Cloudflare DNS. Next.js works via `@cloudflare/next-on-pages`. |
| Azure Static Web Apps | Free tier | Good if you're already in Azure. Slightly more setup. |
| Self-host on VPS | $5–10/mo | Overkill for a portfolio. |

**Recommendation: Vercel.** Zero friction, designed for Next.js, free for personal use forever.

## Post-deploy checklist

- [ ] Replace `github.com/` URL in `lib/data.ts` with your real GitHub profile.
- [ ] Update `metadataBase` URL in `app/layout.tsx` to your final domain.
- [ ] Add the live URL to your **LinkedIn** profile, **Upwork** bio, and email signature.
- [ ] Submit the site to **Google Search Console** (search.google.com/search-console) for SEO.
- [ ] Add Plausible / Vercel Analytics to track visitors (both have free tiers).
- [ ] Replace placeholder GitHub link once you publish public repos.

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts). Edit the values, save, and the site updates instantly in dev. After pushing to GitHub, Vercel auto-redeploys.

## Optional config

### Contact form (Web3Forms)

The form in the Contact section works out of the box with a `mailto:` fallback (opens the user's email client with a pre-filled draft). For real submissions delivered to your inbox:

1. Go to [web3forms.com](https://web3forms.com) → click **Create Access Key**.
2. Enter `sakpalabhijeet09@gmail.com` (the inbox where leads should land) → submit.
3. **Confirm via the verification email Web3Forms sends you** — without this, submissions are silently dropped.
4. Copy the access key (a UUID like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).
5. Locally — create `.env.local` in the project root:

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

6. On Vercel — **Project Settings → Environment Variables** → add the same key/value → redeploy.

Free tier is **unlimited submissions, no domain required**. Includes a built-in honeypot for spam protection plus the form's own honeypot field.

#### Want to switch to Resend later?

Once you own a custom domain (e.g. `abhijeetsakpal.dev`):

- [Resend](https://resend.com) — 3K emails/month free, requires DNS verification on your domain. Best DX, branded sender address (e.g. `hello@abhijeetsakpal.dev`).
- [Formspree](https://formspree.io) — free 50 submissions/month, no domain needed. Drop-in alternative.

### Testimonials section

Section auto-hides while empty. To enable, edit the `testimonials` array in [`lib/data.ts`](lib/data.ts) — paste your LinkedIn recommendations or client quotes. Best sources:

- LinkedIn → your profile → Recommendations → request from past managers/clients
- Direct quotes from email after project sign-off
- Slack/Teams kudos (with permission)

### OG image

Auto-generated at `/opengraph-image` via Next.js's edge runtime — uses your name, tagline, and accent gradient. Test by sharing the deployed URL on LinkedIn / WhatsApp. Edit [`app/opengraph-image.tsx`](app/opengraph-image.tsx) to change it.

### Blog — adding posts (MDX)

Posts live in [`content/blog/*.mdx`](content/blog/). Each post is a single MDX file with YAML frontmatter:

```mdx
---
title: "Your post title"
description: "One-sentence description used for meta + cards."
date: "2026-04-27"
tags: ["LLM", "Architecture"]
draft: false
---

Markdown content here. Code blocks, lists, blockquotes — all styled by mdx-components.tsx.
```

- **Slug** = filename without `.mdx`. So `content/blog/my-post.mdx` → `/blog/my-post`.
- **Drafts** (`draft: true`) appear in `npm run dev` only, never in production.
- Reading time is computed automatically (~200 wpm).
- New posts auto-appear on `/blog` index, in the sitemap, and pick up Article schema metadata.

Styling is centralized in [`mdx-components.tsx`](mdx-components.tsx).

### SEO — single source of truth

All canonical URLs, JSON-LD schemas, and Twitter card defaults live in [`lib/seo.ts`](lib/seo.ts):

- `SITE_URL` — change once when you point a custom domain
- `personJsonLd` + `professionalServiceJsonLd` — injected on the homepage
- `articleJsonLd()` helper — used by case studies and blog posts

After deploying, submit your sitemap to **Google Search Console**:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → use the URL prefix method with your live URL
3. Verify via the HTML meta tag (paste it into `app/layout.tsx` → `metadata.verification.google`)
4. Sitemaps → submit `https://your-url/sitemap.xml`

### Case studies — NDA review checklist

Each case study lives at `app/case-studies/{slug}/page.tsx` and uses the shared `CaseStudyLayout` component. **Before publishing or sharing in proposals, review every page for these:**

- [ ] **Customer / client names** — none should appear directly. Generic descriptors only ("a UAE port operator", "a customer-support team").
- [ ] **Specific traffic / revenue / volume numbers** — keep approximate (e.g. "~40%") and wrap exact metrics in `<SanitizedMetric>` so a regex grep finds them.
- [ ] **Internal product names** outside your resume — ensure they're already public.
- [ ] **Architecture diagrams** — verify Mermaid charts don't reveal internal naming conventions or proprietary patterns.
- [ ] **Screenshots placeholders** — every `screenshotPlaceholder` is a TODO. Add a sanitized screenshot or remove the placeholder before going live.
- [ ] **The `ndaNote` banner** at the top of each page — confirm wording fits the actual confidentiality terms.

To find every flagged metric across all case studies:

```bash
grep -rn "SanitizedMetric" app/case-studies/
grep -rn "screenshotPlaceholder" app/case-studies/
```

To grep for any "TODO" markers:

```bash
grep -rn "TODO\|VERIFY\|REVIEW\|NDA" app/case-studies/
```

### Cal.com booking (optional next step)

Highest-impact freelance conversion lever. To add:

1. Sign up at [cal.com](https://cal.com) — free.
2. Create a 20-min discovery call event.
3. Replace the **Start a Project** button in `components/Hero.tsx` with the Cal embed or a link to your booking URL.
