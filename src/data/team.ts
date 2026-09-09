export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  capabilities: string[];
};

export const team: TeamMember[] = [
  {
    name: "Samuel",
    role: "Editing / Production",
    bio: "Turns creative direction into finished moving content.",
    capabilities: [
      "Video Editing",
      "Short-form Editing",
      "Social Media Editing",
      "Promotional Video Editing",
      "Typography",
      "Dynamic Text",
      "Basic 2D Motion",
      "Content Production",
      "Social Content Execution",
    ],
  },
  {
    name: "Fanny",
    role: "Creative / Design / Pitching",
    bio: "Turns briefs into creative directions, visual ideas and pitches.",
    capabilities: [
      "Creative Direction",
      "Pitching",
      "Creative Briefs",
      "Content Ideas",
      "Campaign Concepts",
      "Pitch Development",
      "Presentation Decks",
      "Visual Direction",
      "Social Design",
      "Campaign Assets",
      "Presentation Design",
    ],
  },
];
