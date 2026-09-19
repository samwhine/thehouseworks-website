export type ServiceGroup = {
  slug: string;
  title: string;
  ledBy: "Fanny" | "Samuel" | "Shared";
  summary: string;
  offerings: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "creative",
    title: "Creative",
    ledBy: "Fanny",
    summary: "Turning a brief into a direction worth building.",
    offerings: [
      "Creative Direction",
      "Content Ideas",
      "Campaign Concepts",
      "Creative Briefs",
      "Pitch Development",
      "Presentation Decks",
    ],
  },
  {
    slug: "design",
    title: "Design",
    ledBy: "Fanny",
    summary: "Visual direction and assets that carry a campaign.",
    offerings: [
      "Visual Direction",
      "Social Design",
      "Campaign Assets",
      "Presentation Design",
      "Brand Visuals",
    ],
  },
  {
    slug: "production",
    title: "Production",
    ledBy: "Samuel",
    summary: "Turning direction into finished, moving content.",
    offerings: [
      "Video Editing",
      "Short-form Content",
      "Promotional Videos",
      "Typography",
      "Basic 2D Motion",
      "Content Production",
    ],
  },
  {
    slug: "social",
    title: "Social",
    ledBy: "Shared",
    summary: "Ongoing content support once a campaign is live.",
    offerings: [
      "Social Content",
      "Content Production",
      "Social Creative",
      "Ongoing Creative Support",
    ],
  },
];
