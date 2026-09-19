# The House Works — Next.js Website

Next.js App Router source for The House Works, positioned as a corporate-ready external production partner. The page covers planning, client/production management, editing, motion, workflow, package placeholders, and renovation-safe portfolio placeholders.

## Stack

- Next.js 16 + React 19
- TypeScript
- App Router
- Plain CSS in `app/globals.css`
- Local brand asset in `public/brand/`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Vercel settings

Because this is a standard Next.js project, Vercel should detect it automatically:

```text
Framework Preset: Next.js
Root Directory: ./
Build Command: next build
Output Directory: leave empty
Install Command: npm install
```

`package.json` must be in the selected Root Directory.

## Main files

- `app/page.tsx` — homepage content and sections.
- `app/globals.css` — visual system and responsive layout.
- `app/layout.tsx` — metadata and root layout.
- `public/brand/the-house-works-logo-source.png` — local logo/banner.

## Push to GitHub

```bash
git init
git add .
git commit -m "Rebuild The House Works in Next.js"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

The portfolio entries intentionally remain placeholders until project ownership, cover, description, and public links are approved.
