import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section className="py-24 md:py-32" id="work">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="One team. Complementary strengths."
            description="Creative direction, design, and production — credited by who led it, delivered as one portfolio."
            align="between"
          />
        </Reveal>

        <div className="mt-12">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-start">
          <Link
            href="/work"
            className="inline-flex min-h-[52px] items-center border border-paper/25 px-7 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:border-brass hover:text-brass-bright"
            data-cursor-active
          >
            View All Work
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
