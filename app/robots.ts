import type { MetadataRoute } from "next";
<<<<<<< HEAD

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://thehouseworks.vercel.app/sitemap.xml" };
=======
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
>>>>>>> parent of 44f0ac6 (update1.2)
}
