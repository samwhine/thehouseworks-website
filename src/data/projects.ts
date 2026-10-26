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

/**
 * Creative work currently shown on Samuel's portfolio.
 * Keep this list aligned with the portfolio's Selected Creative Work section.
 */
export const projects: Project[] = [
  {
    slug: "sanfile-manggala-farma",
    title: "PT. Sanfile Manggala Farma / Promotional Video Editing",
    category: "Promotional Video Editing",
    creator: "Samuel",
    services: ["Talking-Head Editing", "Factory B-Roll", "Trend-Led Social Content"],
    description:
      "Promotional video editing for a cosmetic OEM/ODM manufacturer, combining talking-head edits, factory B-roll, and trend-led social content.",
    thumbnail: "/projects/samuel-extehines-heydemans-sanfile-manggala-farma-promotional-video-editing-cover.png",
    externalUrl: "https://www.behance.net/gallery/256116219/PT-Sanfile-Manggala-Farma-(Professional-Editing)",
    featured: true,
  },
  {
    slug: "ade-govinda",
    title: "Ade Govinda / Professional Editing",
    category: "Video Editing",
    creator: "Samuel",
    services: ["Performance Editing", "Pacing", "Social Content"],
    description:
      "Professional editing for musician Ade Govinda's channel content, with performance and promotional footage shaped for a working artist's release cycle.",
    thumbnail: "/projects/samuel-extehines-heydemans-ade-govinda-professional-video-editing-cover.png",
    externalUrl: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
    featured: true,
  },
  {
    slug: "nelly-syara",
    title: "Nelly Syara / Meme & Comedy Editing",
    category: "Video Editing",
    creator: "Samuel",
    services: ["Meme Editing", "Comedy Editing", "Social Content"],
    description:
      "Fast, punchy comedic edits for Nelly Syara, built for short-form attention spans without losing the joke or personality.",
    thumbnail: "/projects/samuel-extehines-heydemans-nelly-syara-meme-comedy-video-editing-cover.png",
    externalUrl: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)",
    featured: true,
  },
  {
    slug: "sidegigx",
    title: "Sidegigx / 2D Animation",
    category: "2D Animation",
    creator: "Samuel",
    services: ["2D Animation", "Motion Design", "Editing"],
    description:
      "Motion and character animation produced end to end for a short-form 2D piece for the Sidegigx freelance platform.",
    thumbnail: "/projects/samuel-extehines-heydemans-sidegigx-2d-animation-cover.png",
    externalUrl: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
    featured: true,
  },
  {
    slug: "proctologyku",
    title: "Proctologyku / 2D Animation",
    category: "2D Animation",
    creator: "Samuel",
    services: ["2D Animation", "Character Motion", "Content Editing"],
    description:
      "Comedic 2D animation for a doctor's personal content brand, using clean timing and simple character motion to make specialist content approachable.",
    thumbnail: "/projects/samuel-extehines-heydemans-proctologyku-2d-animation-cover.png",
    externalUrl: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
    featured: true,
  },
  {
    slug: "tebar-pesona",
    title: "Tebar Pesona / Promotional Content",
    category: "Promotional Content",
    creator: "Samuel",
    services: ["Promotional Editing", "Content Marketing", "Social Campaign"],
    description:
      "Brand-forward promotional content built to move quickly across social platforms and support a music-led campaign.",
    thumbnail: "/projects/samuel-extehines-heydemans-tebar-pesona-promotional-content-cover.png",
    externalUrl: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
