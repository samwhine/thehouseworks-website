import { site, SITE_URL } from "@/data/site";
import type { Project } from "@/data/projects";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/icon-512.png`,
    email: site.email,
    // Only THW's own official channel belongs here — never a team member's
    // personal portfolio link (spec §62).
    sameAs: [site.instagramUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function creativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: project.category,
    image: `${SITE_URL}${project.thumbnail}`,
    creator: {
      "@type": project.creator === "THW" ? "Organization" : "Person",
      name: project.creator === "THW" ? site.name : project.creator,
    },
    url: `${SITE_URL}/work/${project.slug}`,
    ...(project.externalUrl ? { sameAs: [project.externalUrl] } : {}),
  };
}

/** Renders a JSON-LD <script> tag from a schema.org object. */
export function jsonLdScriptProps(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
