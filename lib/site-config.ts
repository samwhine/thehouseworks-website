const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://thehouseworks.vercel.app";

export const siteConfig = {
  name: "The House Works",
  shortName: "THW",
  tagline: "Creative production partner for brands.",
  supportingLine: "From brief to final frame.",
  url: rawSiteUrl,
  email: "thehouseworks.co@gmail.com",
  instagram: {
    handle: "@thehouse.works",
    url: "https://instagram.com/thehouse.works",
  },
  behance: {
    samuel: "https://www.behance.net/samuel-e-heydemans",
  },
  keywords: [
    "The House Works",
    "The House Works Indonesia",
    "The House Works creative production",
    "creative production Indonesia",
    "creative agency Indonesia",
    "creative production partner",
    "video editing Indonesia",
    "video editing for brands",
    "social media content production",
    "social media creative",
    "creative production studio",
    "brand content production",
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
