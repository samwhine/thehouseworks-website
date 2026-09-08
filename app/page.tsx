import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { Statement } from "@/components/hero/Statement";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { About } from "@/components/about/About";
import { Faq } from "@/components/faq/Faq";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = pageMeta({
  title: "The House Works — Creative Production Partner",
  description:
    "The House Works is a creative production partner helping brands turn briefs into content through creative direction, design, video editing and social production.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Statement />
      <Services />
      <Process />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
