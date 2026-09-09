import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28" id="work" aria-label="Selected work">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Selected work"
            supporting="A shared body of work — creative direction, design, editing and production, credited honestly to whoever led it."
          />
          <ButtonLink href="/work" arrow className="shrink-0">
            View All Work
          </ButtonLink>
        </div>

        <div className="mt-14">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
