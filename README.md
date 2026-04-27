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

### Contact form (Formspree)

The form in the Contact section works out of the box with a `mailto:` fallback (opens the user's email client). For real form submissions to your inbox:

1. Sign up at [formspree.io](https://formspree.io) — free tier is 50 submissions/month.
2. Create a new form, copy the endpoint URL (looks like `https://formspree.io/f/abcd1234`).
3. Create `.env.local` in the project root:

   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcd1234
   ```

4. On Vercel, add the same env var under **Settings → Environment Variables**.

Alternatives: [Web3Forms](https://web3forms.com) (free unlimited), [Resend](https://resend.com) (3K/month free, requires custom API route).

### Testimonials section

Section auto-hides while empty. To enable, edit the `testimonials` array in [`lib/data.ts`](lib/data.ts) — paste your LinkedIn recommendations or client quotes. Best sources:

- LinkedIn → your profile → Recommendations → request from past managers/clients
- Direct quotes from email after project sign-off
- Slack/Teams kudos (with permission)

### OG image

Auto-generated at `/opengraph-image` via Next.js's edge runtime — uses your name, tagline, and accent gradient. Test by sharing the deployed URL on LinkedIn / WhatsApp. Edit [`app/opengraph-image.tsx`](app/opengraph-image.tsx) to change it.

### Cal.com booking (optional next step)

Highest-impact freelance conversion lever. To add:

1. Sign up at [cal.com](https://cal.com) — free.
2. Create a 20-min discovery call event.
3. Replace the **Start a Project** button in `components/Hero.tsx` with the Cal embed or a link to your booking URL.
