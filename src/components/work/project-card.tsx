import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/work/project-media";
import { Reveal } from "@/components/ui/reveal";

export function ProjectCard({
  project,
  index,
  priority,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        data-cursor-hover
        className="group block border-b border-paper/10 py-8 first:pt-0 last:border-b-0 sm:py-10"
      >
        <ProjectMedia
          thumbnail={project.thumbnail}
          previewVideo={project.previewVideo}
          alt={`${project.title} — ${project.category} by ${project.creator}`}
          priority={priority}
        />
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm text-stone">{indexLabel}</span>
            <div>
              <h3 className="text-h2 text-[1.5rem] transition-colors duration-300 group-hover:text-brass sm:text-[1.85rem]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-stone">{project.category}</p>
            </div>
          </div>
          <div className="pl-9 sm:pl-0 sm:text-right">
            <p className="text-sm text-paper/70">{project.services.join(" · ")}</p>
            <p className="mt-1 text-sm text-stone">By {project.creator}</p>
          </div>
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-paper/80 sm:hidden">
          View Project <span aria-hidden>→</span>
        </span>
      </Link>
    </Reveal>
  );
}
