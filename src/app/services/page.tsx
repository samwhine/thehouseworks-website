import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ServicesList } from "@/components/services/services-list";

export const metadata: Metadata = buildMetadata({
  title: "Creative Production Services — The House Works",
  description:
    "Creative direction, design, video editing, social content and production support for brands.",
  path: "/services",
  keywords: [
    "creative production services",
    "video editing services Indonesia",
    "social media content production",
    "creative direction services",
    "brand design services Jakarta",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        )}
      />
      <section className="pb-20 pt-36 sm:pb-28 sm:pt-40">
        <Container>
          <Reveal>
            <h1 className="text-display max-w-2xl uppercase">Services</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[52ch] text-lg text-stone">
              Four capabilities, one team — brought together depending on what a
              brief actually needs. You don&rsquo;t have to know which one you need first.
            </p>
          </Reveal>

          <div className="mt-16">
            <ServicesList />
          </div>

          <Reveal delay={0.1} className="mt-16">
            <ButtonLink href="/contact" variant="solid" arrow>
              Start a Project
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
