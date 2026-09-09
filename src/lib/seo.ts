import type { Metadata } from "next";
import { site, SITE_URL } from "@/data/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/", "/work", "/work/ade-govinda"
  noIndex?: boolean;
  images?: string[];
  keywords?: string[];
};

/**
 * Builds a consistent Metadata object (title, description, canonical,
 * Open Graph, Twitter) for a single page. Every call site supplies its own
 * final title/description string per spec §53 — nothing here appends or
 * rewrites what the page already decided to say.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  images,
  keywords,
}: BuildMetadataArgs): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImages = images ?? [`${path === "/" ? "" : path}/opengraph-image`];

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
