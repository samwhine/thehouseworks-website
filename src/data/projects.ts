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

// Covers are kept locally so the site stays fast and reliable on Vercel.
// Behance does not provide a stable public cover-sync API, so replace the SVG
// files in /public/projects with exported Behance covers when final artwork is ready.
export const projects: Project[] = [
  {
    slug: "ade-govinda",
    title: "Ade Govinda (Professional Editing)",
    category: "Editing · Motion Graphics",
    creator: "Samuel",
    services: ["Professional Editing", "Cinematic Editing", "Social Content"],
    description:
      "Professional editing project for Ade Govinda. Behance creative fields: Editing and Motion Graphics.",
    thumbnail: "/projects/ade-govinda/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
    featured: true,
  },
  {
    slug: "nelly-syara",
    title: "Nelly Syara (MEME, Mentalilty, Funny Editings)",
    category: "Advertising · Branding · Editing",
    creator: "Samuel",
    services: ["Meme Editing", "Funny Edits", "Social Content"],
    description:
      "Nelly Syara project focused on meme, mentality and funny editings. Behance creative fields: Advertising, Branding and Editing.",
    thumbnail: "/projects/nelly-syara/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)",
    featured: true,
  },
  {
    slug: "sidegigx",
    title: "Sidegigx (2D Animation)",
    category: "Animation · Branding · Editing",
    creator: "Samuel",
    services: ["2D Animation", "Branding", "Editing"],
    description:
      "2D animation project for Sidegigx. Behance creative fields: Animation, Branding and Editing.",
    thumbnail: "/projects/sidegigx/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
    featured: true,
  },
  {
    slug: "proctologyku",
    title: "Proctologyku (2D Animation)",
    category: "Animation · Branding · Editing",
    creator: "Samuel",
    services: ["2D Animation", "Branding", "Editing"],
    description:
      "2D animation project for Proctologyku. Behance creative fields: Animation, Branding and Editing.",
    thumbnail: "/projects/proctologyku/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
    featured: true,
  },
  {
    slug: "tebar-pesona",
    title: "Tebar Pesona (Promotional Content)",
    category: "Advertising · Branding · Editing",
    creator: "Samuel",
    services: ["Promotional Content", "Content Marketing", "Music Content"],
    description:
      "Promotional content project for Tebar Pesona. Behance creative fields: Advertising, Branding and Editing.",
    thumbnail: "/projects/tebar-pesona/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)",
    featured: true,
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
