export type Creator = "Samuel" | "Fanny" | "THW";

export type Project = {
  slug: string;
  title: string;
  category: string;
  creator: Creator;
  services: string[];
  year?: string;
  client?: string;
  description?: string;
  thumbnail: string;
  externalUrl?: string;
  externalLabel?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

/**
 * One unified THW portfolio (spec section 21). Only real, available work —
 * nothing here is a fabricated client, metric, or result.
 *
 * Fanny's own case studies aren't public yet, so her Behance link is left
 * undefined on purpose (spec section 24) rather than blocked on it.
 */
export const projects: Project[] = [
  {
    slug: "ade-govinda",
    title: "Ade Govinda",
    category: "Artist Promotional Content",
    creator: "Samuel",
    services: ["Video Editing", "Social"],
    description:
      "Promotional video content for musician Ade Govinda, cut for social release.",
    thumbnail: "/projects/ade-govinda/cover.svg",
    externalUrl: "https://www.behance.net/samuel-e-heydemans",
    externalLabel: "View on Behance",
    featured: true,
    seoTitle: "Ade Govinda — Video Editing | The House Works",
    seoDescription:
      "Promotional video editing for musician Ade Govinda by The House Works.",
  },
  {
    slug: "nelly-syara",
    title: "Nelly Syara",
    category: "Artist Promotional Content",
    creator: "Samuel",
    services: ["Video Editing", "Typography", "Social"],
    description:
      "Short-form promotional edits and typography-led content for artist Nelly Syara.",
    thumbnail: "/projects/nelly-syara/cover.svg",
    externalUrl: "https://www.behance.net/samuel-e-heydemans",
    externalLabel: "View on Behance",
    featured: true,
    seoTitle: "Nelly Syara — Video Editing | The House Works",
    seoDescription:
      "Promotional video editing and typography for artist Nelly Syara by The House Works.",
  },
  {
    slug: "sidegigx",
    title: "Sidegigx",
    category: "Brand Content Production",
    creator: "Samuel",
    services: ["Video Editing", "2D Motion", "Social"],
    description:
      "Social content production and light 2D motion work for Sidegigx.",
    thumbnail: "/projects/sidegigx/cover.svg",
    externalUrl: "https://www.behance.net/samuel-e-heydemans",
    externalLabel: "View on Behance",
    featured: true,
    seoTitle: "Sidegigx — Video Editing | The House Works",
    seoDescription:
      "Brand content production and 2D motion for Sidegigx by The House Works.",
  },
  {
    slug: "proctologyku",
    title: "Proctologyku",
    category: "Content Production",
    creator: "Samuel",
    services: ["Video Editing", "Content Production"],
    description: "Ongoing content production and video editing for Proctologyku.",
    thumbnail: "/projects/proctologyku/cover.svg",
    externalUrl: "https://www.behance.net/samuel-e-heydemans",
    externalLabel: "View on Behance",
    seoTitle: "Proctologyku — Content Production | The House Works",
    seoDescription:
      "Content production and video editing for Proctologyku by The House Works.",
  },
  {
    slug: "tebar-pesona",
    title: "Tebar Pesona",
    category: "Social Content Production",
    creator: "Samuel",
    services: ["Video Editing", "Social Content"],
    description: "Social-first video content and editing for Tebar Pesona.",
    thumbnail: "/projects/tebar-pesona/cover.svg",
    externalUrl: "https://www.behance.net/samuel-e-heydemans",
    externalLabel: "View on Behance",
    seoTitle: "Tebar Pesona — Social Content | The House Works",
    seoDescription:
      "Social-first video content production for Tebar Pesona by The House Works.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
