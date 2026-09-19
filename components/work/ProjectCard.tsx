"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-line py-8 first:border-t-0 md:py-10"
      data-cursor-active
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden md:w-[38%]">
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.category} by ${
              project.creator === "THW" ? "The House Works" : project.creator
            }`}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <span className="text-sm text-stone">{indexLabel}</span>

          <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {project.title}
          </h3>

          <p className="text-paper-dim">{project.category}</p>

          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
            {project.services.join(" · ")}
          </p>

          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-brass-bright">
            By {project.creator === "THW" ? "THW" : project.creator}
          </span>

          <motion.span
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-paper md:hidden"
            aria-hidden="true"
          >
            View Project →
          </motion.span>
        </div>
      </div>
    </Link>
  );
}
