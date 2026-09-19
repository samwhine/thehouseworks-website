# The House Works — Website

Production-house landing page for **The House Works**. The current version is service-first: it explains the corporate workflow, the Fanny/Samuel roles, ways to work together, and keeps the portfolio section as editable placeholders while the work is being renovated.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React icons
- Google Fonts: Space Grotesk, DM Sans, DM Mono

## Run locally

```bash
npm install
npm run dev
```

The project also includes a `pnpm-lock.yaml`, so `pnpm install && pnpm dev` works as well.

## Verify production build

```bash
npm run check
npm run build
npm run start
```

## Main files to edit

- `client/src/pages/Home.tsx` — all page copy, services, workflow, packages, placeholder portfolio cards, and contact links.
- `client/src/index.css` — brand palette, typography, responsive layout, cards, and motion.
- `client/public/brand/the-house-works-logo-source.png` — current logo/banner source.
- `client/index.html` — title and SEO description.

## Push to GitHub

From the project directory:

```bash
git init
git add .
git commit -m "Build The House Works production house website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If the GitHub repository already has commits, use `git pull --rebase origin main` before pushing, or create a fresh empty repository for this source.

## Deploy to Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist/public`.
5. Deploy.

The logo is stored locally in `client/public/brand/`, so the source does not depend on a private Manus storage URL.

## Content notes

The portfolio cards intentionally use placeholders. Replace them only after the relevant project cover, role attribution, description, and public link are approved. The current service structure is designed around:

- **Fanny:** client handling, planning, brief, production coordination.
- **Samuel:** editing, motion, post-production, final delivery.

The package names and deliverables are placeholders and should be updated once the commercial offer is final.
