import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary placeholder covers are SVG; safe here since all image
    // sources are local, first-party assets under /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
