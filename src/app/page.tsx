import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";

export const metadata: Metadata = buildMetadata({
  title: "Velorah — Where dreams rise through the silence",
  description: "Digital spaces for sharp focus and inspired work.",
  path: "/",
  keywords: ["Velorah", "digital studio", "creative tools", "focused work"],
});

export default function HomePage() {
  return <Hero />;
}
