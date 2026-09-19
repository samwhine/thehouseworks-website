import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { About as AboutSection } from "@/components/about/About";
import { FinalCta } from "@/components/cta/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "About The House Works",
  description:
    "Meet The House Works, an independent creative team combining creative direction, design, editing and production.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Two people. One house."
            description="The House Works is an independent creative team built to help brands turn ideas into content people actually want to see."
          />
        </Reveal>
      </Container>

      <AboutSection compact />

      <Container>
        <Reveal className="max-w-2xl border-t border-line pt-10">
          <p className="text-lg text-paper-dim">
            The House Works works with brands, companies, creators and
            organizations that need creative production support — as a
            single project or as ongoing creative and content support.
          </p>
        </Reveal>
      </Container>

      <div className="mt-24 md:mt-32">
        <FinalCta />
      </div>
    </div>
  );
}
