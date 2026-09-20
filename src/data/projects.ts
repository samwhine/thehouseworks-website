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

// Art-directed placeholder covers keep the portfolio polished until final project media is ready.
export const projects: Project[] = [
  {
    slug: "ade-govinda",
    title: "Ade Govinda / Performance Cut",
    category: "Editing · Motion · Social",
    creator: "Samuel",
    services: ["Professional Editing", "Cinematic Editing", "Social Content"],
    description: "A performance-led edit built around rhythm, presence and a sharp social-first finish.",
    thumbnail: "/projects/ade-govinda/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
    featured: true,
  },
  {
    slug: "nelly-syara",
    title: "Nelly Syara / Internet Energy",
    category: "Social Edit · Comedy · Brand Voice",
    creator: "Samuel",
    services: ["Meme Editing", "Funny Edits", "Social Content"],
    description: "Fast, expressive social cuts that turn personality, timing and internet culture into momentum.",
    thumbnail: "/projects/nelly-syara/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)",
    featured: true,
  },
  {
    slug: "sidegigx",
    title: "Sidegigx / Make Your Own Lane",
    category: "2D Motion · Brand System · Editing",
    creator: "Samuel",
    services: ["2D Animation", "Branding", "Editing"],
    description: "A playful motion system translating an ambitious side-hustle mindset into a clear visual language.",
    thumbnail: "/projects/sidegigx/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
    featured: true,
  },
  {
    slug: "proctologyku",
    title: "Proctologyku / Making Health Human",
    category: "2D Motion · Explainer · Brand Content",
    creator: "Samuel",
    services: ["2D Animation", "Branding", "Editing"],
    description: "A friendly explainer direction that gives specialist information a warmer, more approachable voice.",
    thumbnail: "/projects/proctologyku/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
    featured: true,
  },
  {
    slug: "tebar-pesona",
    title: "Tebar Pesona / Turn It Up",
    category: "Promotional Content · Music · Campaign",
    creator: "Samuel",
    services: ["Promotional Content", "Content Marketing", "Music Content"],
    description: "A promotional content direction with a bright pulse, built to make a music-led campaign feel immediate.",
    thumbnail: "/projects/tebar-pesona/cover.svg",
    externalUrl: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)",
    featured: true,
  },
];

export function getProject(slug: string) { return projects.find((p) => p.slug === slug); }
export function getFeaturedProjects() { const featured = projects.filter((p) => p.featured); return featured.length > 0 ? featured : projects.slice(0, 3); }
export function getAdjacentProject(slug: string) { const index = projects.findIndex((p) => p.slug === slug); if (index === -1) return projects[0]; return projects[(index + 1) % projects.length]; }
