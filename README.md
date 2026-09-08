# The House Works

The website for **The House Works (THW)** — a creative production partner
for brands, from brief to final frame. Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

This is a **Phase 1 build**: the full site, architecture, and content
structure are complete and production-capable, but several brand and
project assets are still temporary placeholders (see "Current placeholder
assets" below). Nothing here needs to be rebuilt to bring in the real
assets — see "Adding real assets" below.

## Stack

- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** [Motion](https://motion.dev/docs/react) (`motion/react`)
- **Font:** Space Grotesk (self-hosted variable font, `public/fonts`)
- **Deployment target:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
app/            Routes (App Router) — pages, sitemap, robots, manifest, OG image, error pages
components/     UI organized by section (navigation, hero, work, services, process, about, faq, footer, motion, ui)
data/           Centralized content: projects.ts, services.ts, faq.ts, process.ts
lib/            site-config.ts (site-wide constants), seo.ts (metadata + JSON-LD helpers), hooks.ts
public/         Static assets — brand/, projects/, fonts/
```

## Adding a project to the portfolio

Add an entry to `data/projects.ts` — no other file needs to change:

```ts
{
  slug: "project-name",
  title: "Project Name",
  category: "Video Editing",
  creator: "Samuel", // "Samuel" | "Fanny" | "THW"
  services: ["Editing", "Typography", "Social"],
  thumbnail: "/projects/project-name/cover.webp",
  externalUrl: "https://...", // optional
}
```

Place project media under `public/projects/[slug]/`.

## Current placeholder assets (Phase 1)

These exist so every system in the site is fully functional today, and are
intentionally easy to find and swap:

- `public/brand/` — wordmark, logo mark, and favicon are temporary. The
  navbar/footer currently render a text-based `Logo` component
  (`components/ui/Logo.tsx`) rather than an image, so swapping in the real
  logo means updating that component to render the supplied SVG.
- `public/projects/*/cover.svg` — placeholder covers for each project.
  Replace with real covers/media (`.webp` recommended) and update the
  `thumbnail` field in `data/projects.ts`.
- Fanny's portfolio has no public case studies yet, so no Fanny-credited
  projects are listed and no Behance link is set for her. Nothing blocks
  adding these later.

## Adding real brand/project assets (Phase 2)

1. Inspect the supplied assets and confirm intended use.
2. Rename cleanly (e.g. `thw-logo.svg`, `thw-logo-mark.svg`,
   `the-house-works-[project]-[content-type].webp`).
3. Place logo/mark files in `public/brand/`; project media in
   `public/projects/[slug]/`.
4. Update `components/ui/Logo.tsx` to render the real logo, and update
   `data/projects.ts` thumbnails/external links.
5. Update `app/icon.svg`, `app/apple-icon.tsx`, and `app/opengraph-image.tsx`
   with the real mark.
6. Update `lib/seo.ts` → `organizationJsonLd()` if the logo path changes.
7. Optimize images, run `npm run build`, and do a full responsive/QA pass.
8. Remove any now-unused placeholder assets.

## SEO & Open Graph

- Every page sets unique title/description/canonical via `lib/seo.ts`'s
  `pageMeta()` helper.
- `app/sitemap.ts` and `app/robots.ts` are generated dynamically from
  `data/projects.ts` and `lib/site-config.ts`.
- `app/opengraph-image.tsx` and `app/apple-icon.tsx` generate branded
  images on the fly via `next/og` — no manual image exports needed.
- JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `CreativeWork`) is
  injected via `components/seo/JsonLd.tsx`, sourced from `lib/seo.ts`.
- Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the real production
  domain before launch — every canonical/OG/JSON-LD URL depends on it.

## Deployment

```text
Local → GitHub → Vercel Preview → QA → Production
```

1. `git init && git add . && git commit -m "Initial commit"`
2. Push to GitHub.
3. Import the repo in Vercel.
4. Set `NEXT_PUBLIC_SITE_URL` as an environment variable in Vercel.
5. Deploy, then attach the custom domain.
