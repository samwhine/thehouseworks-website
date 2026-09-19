export type ServiceGroup = {
  id: string;
  title: string;
  ledBy: string;
  summary: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "creative",
    title: "Creative",
    ledBy: "Fanny-led",
    summary:
      "Turning a brief into a direction — the ideas, the angle, the pitch.",
    items: [
      "Creative Direction",
      "Content Ideas",
      "Campaign Concepts",
      "Creative Briefs",
      "Pitch Development",
      "Presentation Decks",
    ],
  },
  {
    id: "design",
    title: "Design",
    ledBy: "Fanny-led",
    summary: "Giving the direction a visual language it can travel in.",
    items: [
      "Visual Direction",
      "Social Design",
      "Campaign Assets",
      "Presentation Design",
      "Brand Visuals",
    ],
  },
  {
    id: "production",
    title: "Production",
    ledBy: "Samuel-led",
    summary: "Turning direction into finished, moving content.",
    items: [
      "Video Editing",
      "Short-form Content",
      "Promotional Videos",
      "Typography",
      "Basic 2D Motion",
      "Content Production",
    ],
  },
  {
    id: "social",
    title: "Social",
    ledBy: "Shared, project dependent",
    summary: "Keeping the channels fed once the campaign is live.",
    items: [
      "Social Content",
      "Content Production",
      "Social Creative",
      "Ongoing Creative Support",
    ],
  },
];
