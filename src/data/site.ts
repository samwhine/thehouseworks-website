// Central, non-visual source of truth for brand + contact details.
// Update NEXT_PUBLIC_SITE_URL in your environment once a domain is live —
// see .env.example. Nothing here should be duplicated by hand elsewhere.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const site = {
  name: "The House Works",
  shortName: "THW",
  tagline: "Creative production partner for brands.",
  supportingLine: "From brief to final frame.",
  description:
    "The House Works is a creative production partner helping brands turn briefs into content through creative direction, design, video editing and social production.",
  email: "thehouseworks.co@gmail.com",
  instagramHandle: "@thehouse.works",
  instagramUrl: "https://www.instagram.com/thehouse.works",
  locale: "en_US",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navCta: NavLink = { label: "Start a Project", href: "/contact" };

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: "Instagram", href: site.instagramUrl },
];
