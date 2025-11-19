Modern portfolio built with Next.js (App Router) and Tailwind CSS v4, designed for a crisp, polished look and fast deploys on Vercel.

## Quickstart

1) Install deps

```bash
npm install
```

2) Dev server

```bash
npm run dev
```

Open http://localhost:3000

## Customize Content

- Profile + socials: edit `data/site.js`
- Sections: `components/Hero.jsx`, `components/Projects.jsx`, `components/Skills.jsx`, `components/Contact.jsx`
- Theme/brand: tweak variables in `app/globals.css` (e.g. `--primary`)
- SEO: update `app/layout.js` `metadataBase`, `title`, and `description`

## Deploy to Vercel

Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

Option B: GitHub → Vercel

- Push to a GitHub repo
- Import the repo at https://vercel.com/new
- Framework: Next.js; Root: `/`; Build: `next build`; Output: `.vercel/output` (default)

## Notes

- Uses system color scheme by default with a manual toggle (`ThemeToggle`).
- No server components beyond Next defaults — fully static friendly.
- Replace placeholder project links and your contact email in `data/site.js`.
