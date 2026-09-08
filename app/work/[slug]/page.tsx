import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProject, getProjectBySlug, projects } from "@/data/projects";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMeta({
    title: project.seoTitle ?? `${project.title} — The House Works`,
    description:
      project.seoDescription ??
      `${project.category} by The House Works, credited to ${project.creator}.`,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          creator: { "@type": "Person", name: project.creator },
          about: project.category,
          description: project.description,
        }}
      />

      <Container>
        <Link
          href="/work"
          className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone transition-colors hover:text-paper"
        >
          ← All Work
        </Link>

        <header className="mt-8 flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-paper-dim">
              {project.category}
            </p>
          </div>
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-brass-bright">
            By {project.creator === "THW" ? "THW" : project.creator}
          </span>
        </header>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.category} by ${project.creator}`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
              Services
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {project.services.map((service) => (
                <li key={service} className="text-paper-dim">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {project.description && (
            <p className="max-w-xl text-lg text-paper-dim">
              {project.description}
            </p>
          )}
        </div>

        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex min-h-[52px] items-center border border-paper/25 px-7 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:border-brass hover:text-brass-bright"
            data-cursor-active
          >
            {project.externalLabel ?? "View Project"}
          </a>
        )}

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-1"
            data-cursor-active
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
              Next Project
            </span>
            <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-brass-bright">
              {next.title}
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex min-h-[52px] items-center justify-center bg-paper px-7 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-brass-bright"
            data-cursor-active
          >
            Start a Project
          </Link>
        </div>
      </Container>
    </article>
  );
}
