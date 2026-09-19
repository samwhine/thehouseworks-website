# The House Works — Website

Source for the House Works (THW) marketing site: Next.js 16 (App Router),
TypeScript, Tailwind CSS v4, Framer Motion + GSAP/ScrollTrigger for motion.

**Status:** Phase 1 build, now with the real THW logo and a full SEO/icon
pass on top. Project cover art, preview videos, and Fanny's own projects
are still placeholders — see "Still placeholder" below. Nothing on the
site claims a client, metric, or result that wasn't actually provided.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Node 20+ recommended.

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` drives `metadataBase`, canonical links, the sitemap,
robots.txt and JSON-LD. It's unset by default (falls back to
`http://localhost:3000`) because we don't want to guess a domain that isn't
live yet — **set the real one in Vercel's project settings before launch**,
since search engines need a stable, real URL to index.

## Project structure

```
src/
  app/            routes (App Router), sitemap/robots/manifest, OG images
  components/
    layout/       header, mobile menu, footer, custom cursor, logo
    home/         homepage sections
    work/         project card + media
    services/     services list (shared by homepage + /services)
    about/        team grid (shared by homepage + /about)
    ui/           container, reveal, accordion, buttons, magnetic hover
  data/           site.ts, projects.ts, services.ts, faq.ts, process.ts, team.ts
  lib/            seo.ts (Metadata builder), json-ld.ts, og-assets.ts, fonts.ts, utils.ts
  hooks/          reduced-motion / pointer / breakpoint checks
  fonts/          self-hosted Inter + Space Grotesk (variable, .woff2)
public/
  brand/          the real logo (transparent cutout + original source file)
  icons/          generated app icons (512, 192, apple-touch)
  favicon.ico     generated multi-resolution favicon
  projects/       placeholder cover art per project
```

## Editing content

- **Projects** — `src/data/projects.ts`. Each entry is one object; add a
  slug folder under `public/projects/<slug>/` for its media. `featured:
  true` puts it in the homepage "Selected work" list.
- **Services** — `src/data/services.ts`.
- **FAQ** — `src/data/faq.ts`.
- **Team bios** — `src/data/team.ts`.
- **Site-wide info** (email, Instagram, nav) — `src/data/site.ts`.

## SEO & icons

- Every page builds its `Metadata` via `buildMetadata()` in
  `src/lib/seo.ts` — unique title, description, keywords, canonical, Open
  Graph, and Twitter card per page.
- Open Graph images are generated in code (`opengraph-image.tsx` at the
  root, `/work`, and `/work/[slug]`) via `next/og`, with the real logo
  embedded — so they never go stale and never need manual re-exporting.
- Favicon, Apple touch icon, and PWA icons (512/192) are all generated
  from the real logo (see "The logo" below) and wired up in
  `layout.tsx` → `metadata.icons` and `manifest.ts`.
- JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `CreativeWork`) is
  built in `src/lib/json-ld.ts`. `Organization.logo` points at the real
  icon; each `CreativeWork` includes its project's cover `image`.
- `sitemap.ts` includes an `images` entry per URL (the logo on the
  homepage, each project's cover on its page) — this is what helps
  Google associate those images with this site in Image Search, on top of
  descriptive `alt` text and file names.
- **On ranking #1 for "The House Works":** everything above is the part
  that's actually in a website's control, and a distinctive, low-competition
  name like this is a genuinely good candidate for it. But none of it can
  guarantee a #1 ranking by itself — that also depends on the domain
  actually being live, Google indexing it (days to weeks after first
  deploy), and some inbound links/mentions over time (the Instagram bio
  link, Behance profile, etc. all help). Deploying to the real domain and
  submitting the sitemap in Google Search Console is the next concrete
  step once one exists.

## The logo

`public/brand/the-house-works-logo.png` is the real THW mark, cut out of
the supplied logo file (its dark background removed) so it drops cleanly
onto any surface. `public/brand/logo-source.png` keeps the original
as-delivered square tile for reference. Everything else — favicon,
apple-touch-icon, the 512/192 PWA icons, the header/footer logo, the OG
images — is generated from that one cutout, so there's a single source
of truth. To regenerate the icon set (e.g. with different padding), the
pipeline is a short Pillow script: composite the cutout onto a solid
`#121011` square at ~74% fill, then export each size.

## Still placeholder (not yet real)

- `public/projects/<slug>/cover.svg` — abstract placeholder art, not real
  photography/stills. Replace and update the `thumbnail` path in
  `src/data/projects.ts` (any image format works, not just SVG).
- `previewVideo` / `heroMedia` fields in `src/data/projects.ts` — add real
  hover-preview clips and case-study hero media as they become available.
- `externalUrl` per project — add a Behance case-study link once one exists
  for that specific project (until then, the project page links out to the
  general Behance profile instead of guessing a case-study URL).
- Fanny's own projects, once ready to be credited as `creator: "Fanny"`.

## Notable decisions worth knowing about

- **Not using React Bits Pro.** It's a paid component library we don't have
  a license for, and the brief itself says to treat it as a reference for
  interaction *language*, not to copy its code. Every interaction (custom
  cursor, staggered hero reveal, hover preview, magnetic hover, the
  services accordion, the Process scroll-stack) is built from scratch with
  Framer Motion / GSAP instead.
- **Lenis (smooth scroll) is not wired in.** It's listed as optional in the
  brief, and skipping it removes a common source of scroll/ScrollTrigger
  bugs for a first pass. Native scrolling is used everywhere.
- **Process section "scroll stack"** uses GSAP ScrollTrigger pinning on
  desktop only; mobile always gets plain stacked cards.
- **Colors/type are a deliberate placeholder direction**, not final brand
  guidelines: near-black + warm off-white + a brass/gold accent (picked to
  sit well with the logo's white/silver mark), Space Grotesk for display
  type and Inter for body/UI. Easy to swap in `src/app/globals.css`
  (`@theme` block) once final brand colors exist.
