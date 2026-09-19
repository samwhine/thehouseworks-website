import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Phase 1 placeholder covers are SVG. Safe here because every SVG is
    // our own bundled asset (never user-uploaded/remote), and the strict
    // CSP below neutralises script execution in the served image response.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
