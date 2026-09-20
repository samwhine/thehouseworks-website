import type { Metadata } from "next";
import { site, SITE_URL } from "@/data/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  images?: string[];
  keywords?: string[];
};

export function buildMetadata({ title, description, path, noIndex, images, keywords }: BuildMetadataArgs): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImages = images ?? [`${SITE_URL}${path === "/" ? "/opengraph-image" : `${path}/opengraph-image`}`];
  const imageObjects = ogImages.map((image) => ({ url: image, width: 1200, height: 630, alt: `${title} — ${site.name}` }));

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
      images: imageObjects,
    },
    twitter: { card: "summary_large_image", title, description, images: imageObjects },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}
