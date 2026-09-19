import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { TeamGrid } from "@/components/about/team-grid";

export const metadata: Metadata = buildMetadata({
  title: "About The House Works",
  description:
    "Meet The House Works, an independent creative team combining creative direction, design, editing and production.",
  path: "/about",
  keywords: [
    "The House Works team",
    "Samuel and Fanny",
    "creative production team Indonesia",
    "about The House Works",
  ],
});

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <section className="pb-20 pt-36 sm:pb-28 sm:pt-40">
        <Container>
          <Reveal>
            <h1 className="text-display max-w-2xl uppercase">
              Two people. One house.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[56ch] text-lg text-stone">
              The House Works is an independent creative team built to help brands
              turn ideas into content people actually want to see.
            </p>
          </Reveal>

          <div className="mt-20">
            <TeamGrid variant="full" />
          </div>

          <Reveal delay={0.1} className="mt-20 border-t border-paper/10 pt-16">
            <p className="text-h2 max-w-2xl text-balance">
              You bring the brief. We handle the creative.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/work" arrow>
                See the Work
              </ButtonLink>
              <ButtonLink href="/contact" variant="solid" arrow>
                Start a Project
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
