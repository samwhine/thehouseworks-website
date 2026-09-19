import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
=======
  images: {
    // Temporary placeholder covers are SVG; safe here since all image
    // sources are local, first-party assets under /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
>>>>>>> parent of 44f0ac6 (update1.2)
};

export default nextConfig;
