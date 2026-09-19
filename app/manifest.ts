import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#14120f",
    theme_color: "#14120f",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/brand/android-chrome-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/android-chrome-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
