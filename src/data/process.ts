export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Brief",
    description: "You tell us what you need.",
  },
  {
    index: "02",
    title: "Think",
    description: "We develop creative direction, ideas and visual approach.",
  },
  {
    index: "03",
    title: "Create",
    description: "We design, produce, edit and refine the content.",
  },
  {
    index: "04",
    title: "Deliver",
    description: "You receive content ready for your channels.",
  },
];

// The end-to-end workflow shown in the Statement section (spec §09).
export const workflowStages = [
  "Client Brief",
  "Creative Thinking",
  "Pitch / Direction",
  "Design",
  "Production",
  "Editing / Motion",
  "Final Content",
];
