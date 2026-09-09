import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/work/project-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work — The House Works",
  description:
    "Explore selected creative, design, video editing and production work by The House Works.",
  path: "/work",
  keywords: [
    "The House Works portfolio",
    "creative production portfolio Indonesia",
    "video editing portfolio",
    "brand content case studies",
  ],
});

export default function WorkPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        )}
      />
      <section className="pb-20 pt-36 sm:pb-28 sm:pt-40">
        <Container>
          <Reveal>
            <h1 className="text-display max-w-3xl uppercase">Selected work</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[52ch] text-lg text-stone">
              One unified body of work from The House Works — creative direction,
              design, video editing and production, credited to whoever led it.
            </p>
          </Reveal>

          <div className="mt-16">
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
    </>
  );
}
