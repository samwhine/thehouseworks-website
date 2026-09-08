import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Services } from "@/components/services/Services";
import { FinalCta } from "@/components/cta/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Creative Production Services — The House Works",
  description:
    "Creative direction, design, video editing, social content and production support for brands.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="From brief to final frame."
            description="Four disciplines that combine depending on what a project actually needs."
          />
        </Reveal>
      </Container>

      <Services compact />
      <FinalCta />
    </div>
  );
}
