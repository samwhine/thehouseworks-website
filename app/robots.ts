import type { MetadataRoute } from "next";
<<<<<<< HEAD
<<<<<<< HEAD

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://thehouseworks.vercel.app/sitemap.xml" };
=======
=======
>>>>>>> parent of 44f0ac6 (update1.2)
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
<<<<<<< HEAD
>>>>>>> parent of 44f0ac6 (update1.2)
=======
>>>>>>> parent of 44f0ac6 (update1.2)
}
