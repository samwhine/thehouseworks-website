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
  previewVideo?: string;
  heroMedia?: string;
  gallery?: string[];
  externalUrl?: string;
  featured?: boolean;
};

// NOTE — Phase 1 placeholder data.
// Thumbnails are temporary abstract cover art (see /public/projects), not
// final photography or video stills. Real covers, gallery media and (where
// they exist) individual Behance case-study links get swapped in during
// Phase 2 — see the asset checklist. Nothing below invents a client name,
// metric, testimonial or result that wasn't provided.

export const projects: Project[] = [
  {
    slug: "ade-govinda",
    title: "Ade Govinda",
    category: "Artist Promotional Content",
    creator: "Samuel",
    services: ["Video Editing", "Social"],
    description:
      "Promotional video editing and social cutdowns for musician Ade Govinda.",
    thumbnail: "/projects/ade-govinda/cover.svg",
    featured: true,
  },
  {
    slug: "nelly-syara",
    title: "Nelly Syara",
    category: "Artist Promotional Content",
    creator: "Samuel",
    services: ["Video Editing", "Social", "Typography"],
    description:
      "Promotional and social-first video editing for musician Nelly Syara.",
    thumbnail: "/projects/nelly-syara/cover.svg",
    featured: false,
  },
  {
    slug: "sidegigx",
    title: "Sidegigx",
    category: "Promotional Video",
    creator: "Samuel",
    services: ["Video Editing", "Typography", "Social"],
    description: "Promotional video editing and short-form social content.",
    thumbnail: "/projects/sidegigx/cover.svg",
    featured: true,
  },
  {
    slug: "proctologyku",
    title: "Proctologyku",
    category: "Content Series",
    creator: "Samuel",
    services: ["Short-Form Editing", "Social Media Editing"],
    description: "Ongoing short-form editing and social content execution.",
    thumbnail: "/projects/proctologyku/cover.svg",
    featured: true,
  },
  {
    slug: "tebar-pesona",
    title: "Tebar Pesona",
    category: "Content Production",
    creator: "Samuel",
    services: ["Video Editing", "Basic 2D Motion", "Content Production"],
    description: "Video editing and lightweight motion graphics support.",
    thumbnail: "/projects/tebar-pesona/cover.svg",
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
