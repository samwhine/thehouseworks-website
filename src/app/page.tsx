import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Statement } from "@/components/home/statement";
import { ServicesPreview } from "@/components/home/services-preview";
import { Process } from "@/components/home/process";
import { AboutPreview } from "@/components/home/about-preview";
import { Faq } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "The House Works — Creative Production Partner",
  description: site.description,
  path: "/",
  keywords: [
    "The House Works",
    "creative production partner",
    "creative production Indonesia",
    "creative agency Jakarta",
    "video editing services Indonesia",
    "brand content production",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Statement />
      <ServicesPreview />
      <Process />
      <AboutPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
