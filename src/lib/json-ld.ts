import { site, SITE_URL } from "@/data/site";
import type { Project } from "@/data/projects";
import { team } from "@/data/team";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/the-house-works-logo.png`,
    image: `${SITE_URL}/brand/the-house-works-logo.png`,
    description: site.description,
    email: site.email,
    areaServed: { "@type": "Country", name: "Indonesia" },
    founder: [
      {
        "@type": "Person",
        name: "Samuel Extehines Heydemans",
        url: "https://samuel-extehines-heydemans-portofolio.vercel.app",
        jobTitle: "Co-founder & Creative Partner",
      },
      {
        "@type": "Person",
        name: "Stefanny Simanjuntak",
        jobTitle: "Co-founder & Creative Partner",
      },
    ],
    knowsAbout: ["Creative Direction", "Video Editing", "Motion Graphics", "Brand Content", "Social Media Production"],
    employee: team.map((member) => ({ "@type": "Person", name: member.name, jobTitle: member.role })),
    sameAs: [site.instagramUrl, site.behanceUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name, url: SITE_URL },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}` })),
  };
}

export function creativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    about: project.category,
    image: `${SITE_URL}${project.thumbnail}`,
    creator: { "@type": project.creator === "THW" ? "Organization" : "Person", name: project.creator === "Samuel" ? "Samuel Extehines Heydemans" : project.creator === "Fanny" ? "Stefanny Simanjuntak" : site.name },
    url: `${SITE_URL}/work/${project.slug}`,
    ...(project.externalUrl ? { sameAs: [project.externalUrl] } : {}),
  };
}

export function jsonLdScriptProps(data: Record<string, unknown>) {
  return { type: "application/ld+json" as const, dangerouslySetInnerHTML: { __html: JSON.stringify(data) } };
}
