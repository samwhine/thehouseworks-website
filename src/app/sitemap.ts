import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/services", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
      ...(path === "" ? { images: [`${SITE_URL}/brand/the-house-works-logo.png`] } : {}),
    }),
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [`${SITE_URL}${project.thumbnail}`],
  }));

  return [...staticRoutes, ...projectRoutes];
}
