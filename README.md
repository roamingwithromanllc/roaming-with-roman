# Roaming with Roman — Website

Florida Springs Kayak & Eco Tours website built with Next.js 16, TypeScript, and Tailwind CSS.

---

## Running Locally (Development)

### Prerequisites
- Node.js 18 or higher — download from https://nodejs.org
- npm (comes with Node.js)

### Steps

1. **Unzip the project** and open a terminal in the project folder.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create your environment file** by copying the example:
   ```bash
   cp .env.local.example .env.local
   ```
   Then open `.env.local` and fill in your values (see Environment Variables section below).

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser to **http://localhost:3000**

---

## Deploying to Vercel (Live Website)

Vercel is the recommended hosting platform for this site. It's free to start and purpose-built for Next.js.

### Step 1 — Install the Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Log in to Vercel
```bash
vercel login
```
Follow the prompts to log in with your email or GitHub account.

### Step 3 — Deploy
From inside the project folder run:
```bash
vercel
```
Follow the prompts (accept all defaults). When finished it will give you a preview URL.

To deploy to production:
```bash
vercel --prod
```

### Step 4 — Set Environment Variables in Vercel
Go to **vercel.com → your project → Settings → Environment Variables** and add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key (get one free at resend.com) |
| `CONTACT_FROM_EMAIL` | The email address emails are sent FROM |
| `CONTACT_TO_EMAIL` | roamingwithromanllc@gmail.com |
| `ALLOWED_ORIGIN` | https://yourdomain.com (your live domain, no trailing slash) |
| `RATE_LIMIT_SALT` | Run `openssl rand -hex 32` in terminal to generate |

### Step 5 — Add the Custom Domain
1. In Vercel dashboard → Project → Settings → Domains
2. Add your domain (e.g. `roamingwithroman.com`)
3. Vercel will show you DNS records to add

### Step 6 — Update DNS in Cloudflare
Log into Cloudflare and go to DNS for the domain:
1. Add an **A record**: Name `@` → Value `76.76.21.21`
2. Add a **CNAME record**: Name `www` → Value `cname.vercel-dns.com`
3. Set both to **DNS only** (gray cloud, NOT proxied)

SSL certificate is automatically provisioned by Vercel within a few minutes.

---

## Updating the Site After Changes

Every time you make changes and want to push them live, just run:
```bash
vercel --prod
```

That's it — no GitHub required.

---

## Environment Variables Reference

Copy `.env.local.example` to `.env.local` for local development.

```
# Email — Option A: Resend (recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=noreply@roamingwithroman.com
CONTACT_TO_EMAIL=roamingwithromanllc@gmail.com

# Email — Option B: SMTP (Gmail, etc.)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=your@gmail.com
# SMTP_PASS=your-app-password

# Security
ALLOWED_ORIGIN=https://roamingwithroman.com
RATE_LIMIT_SALT=generate_with_openssl_rand_hex_32
```

### Generating RATE_LIMIT_SALT
Run this once in your terminal:
```bash
openssl rand -hex 32
```
Copy the output into your `.env.local` and into Vercel's environment variables.

---

## FareHarbor Booking

The booking buttons currently link to:
`https://fareharbor.com/embeds/book/roamingwithroman/items/all/`

Once you have your FareHarbor company shortname, search the project for `roamingwithroman` and replace it with your actual shortname. Files to update:
- `components/layout/Header.tsx`
- `components/sections/Hero.tsx`
- `components/sections/Experiences.tsx`
- `components/sections/ContactSection.tsx`
- `components/layout/Footer.tsx`

---

## Project Structure

```
roaming-with-roman/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main page (all sections)
│   └── api/contact/        # Contact form API endpoint
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Experiences, Locations, Wildlife,
│   │                       # About, Gallery, ContactSection, ContactForm
│   └── ui/                 # Shared SVG icon set
├── lib/                    # Email, rate limiting, validation, sanitize
├── public/assets/          # Logo, hero image, gallery photos
└── .env.local.example      # Environment variable template
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Email:** Resend (primary) / Nodemailer SMTP (fallback)
- **Validation:** Zod
- **Hosting:** Vercel (recommended)
- **DNS:** Cloudflare
