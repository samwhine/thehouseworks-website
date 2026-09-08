import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Selected Work — The House Works",
  description:
    "Explore selected creative, design, video editing and production work by The House Works.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="One unified portfolio."
            description="Every project below is real, delivered work — credited by who led it."
          />
        </Reveal>

        <div className="mt-14">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.3)}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
