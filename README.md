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

## Brand assets

Real THW brand assets are now wired in:

- `public/brand/thw-logo-mark.png` — the icon mark, cropped from the
  supplied logo. Rendered in the navbar/footer via `components/ui/Logo.tsx`,
  and used as the source for `app/icon.png` (favicon) and
  `app/apple-icon.png` (Apple touch icon).
- `public/brand/thw-banner.jpg` — the full lockup (icon + wordmark +
  tagline), used as a brand plaque on `/contact`.
- `public/brand/thw-og-image.png` (via `app/opengraph-image.png`) — a
  1200×630 crop of the banner, used as the default social share image.
- `public/brand/source/` — the two original uploaded files at full
  resolution, kept for future re-exports (a real vector logo, alternate
  crops, etc.) if higher-fidelity versions are ever supplied.

To swap in an updated logo/banner later: replace the files above (keeping
the same names/dimensions), re-run `npm run build`, and update
`lib/seo.ts` → `organizationJsonLd()` if the filename changes.

## Remaining placeholder assets

- `public/projects/*/cover.svg` — placeholder covers for each project.
  Replace with real covers/media (`.webp` recommended) and update the
  `thumbnail` field in `data/projects.ts`.
- Fanny's portfolio has no public case studies yet, so no Fanny-credited
  projects are listed and no Behance link is set for her. Nothing blocks
  adding these later.

## Adding real project media

1. Optimize the images/video stills (`.webp` recommended).
2. Rename cleanly (e.g. `the-house-works-[project]-[content-type].webp`).
3. Place them in `public/projects/[slug]/`.
4. Update the `thumbnail` field (and any others) in `data/projects.ts`.
5. Run `npm run build` and do a full responsive/QA pass.

## SEO & Open Graph

- Every page sets unique title/description/canonical via `lib/seo.ts`'s
  `pageMeta()` helper.
- `app/sitemap.ts` and `app/robots.ts` are generated dynamically from
  `data/projects.ts` and `lib/site-config.ts`.
- `app/opengraph-image.png` and `app/apple-icon.png` are the real branded
  images (see "Brand assets" above) — no manual `<meta>` wiring needed,
  Next serves them via file convention.
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
