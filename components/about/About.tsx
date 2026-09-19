import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const team = [
  {
    name: "Samuel",
    role: "Editing / Production",
    description: "Turns creative direction into finished moving content.",
  },
  {
    name: "Fanny",
    role: "Creative / Design / Pitching",
    description: "Turns briefs into creative directions, visual ideas and pitches.",
  },
];

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32" id="about">
      <Container>
        {!compact && (
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Two people. One house."
              description="The House Works is an independent creative team built to help brands turn ideas into content people actually want to see."
              align="between"
            />
          </Reveal>
        )}

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <div className="border-t border-line pt-6">
                <h3 className="text-3xl font-medium tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.08em] text-brass-bright">
                  {member.role}
                </p>
                <p className="mt-4 max-w-sm text-paper-dim">
                  {member.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
