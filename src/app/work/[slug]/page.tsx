import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, creativeWorkJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { getAdjacentProject, getProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectMedia } from "@/components/work/project-media";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} — ${project.category} | The House Works`,
    description:
      project.description ??
      `${project.category} by ${project.creator} for The House Works.`,
    path: `/work/${project.slug}`,
    keywords: [
      project.title,
      project.category,
      "The House Works",
      ...project.services,
    ],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
        )}
      />
      <script {...jsonLdScriptProps(creativeWorkJsonLd(project))} />

      <article className="pb-24 pt-36 sm:pb-32 sm:pt-40">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to work
          </Link>

          <Reveal className="mt-8">
            <h1 className="text-display max-w-3xl uppercase">{project.title}</h1>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone">
              <span>{project.category}</span>
              <span aria-hidden>·</span>
              <span>{project.services.join(" · ")}</span>
              <span aria-hidden>·</span>
              <span>By {project.creator}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ProjectMedia
              thumbnail={project.thumbnail}
              previewVideo={project.heroMedia ?? project.previewVideo}
              alt={`${project.title} — ${project.category} by ${project.creator}`}
              priority
              className="aspect-video sm:aspect-[16/8]"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
            {project.description && (
              <Reveal>
                <p className="max-w-[55ch] text-xl text-paper/90">{project.description}</p>
              </Reveal>
            )}

            <Reveal delay={0.06} className="flex flex-col gap-4">
              {project.externalUrl && (
                <ButtonLink href={project.externalUrl} variant="outline" arrow>
                  View Full Case Study
                </ButtonLink>
              )}
              <p className="text-sm text-stone">
                More production work like this lives on{" "}
                <a
                  href="https://www.behance.net/samuel-e-heydemans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-brass"
                >
                  Samuel&rsquo;s Behance
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-paper/10 pt-10">
            <div>
              <p className="text-sm text-stone">Next project</p>
              <Link
                href={`/work/${next.slug}`}
                className="text-h2 mt-1 block transition-colors hover:text-brass"
              >
                {next.title}
              </Link>
            </div>
            <ButtonLink href="/contact" arrow>
              Start a Project
            </ButtonLink>
          </div>
        </Container>
      </article>
    </>
  );
}
