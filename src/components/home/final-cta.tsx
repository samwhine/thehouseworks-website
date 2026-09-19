import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32" aria-label="Start a project">
      <Container className="text-center">
        <Reveal>
          <div className="relative mx-auto mb-14 aspect-[16/7] max-w-5xl overflow-hidden rounded-[2rem] border border-paper/10 bg-paper">
            <Image
              src="/brand/thehouseworks-banner.webp"
              alt="The House Works — creative and social production"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-display uppercase text-balance">Have a project?</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-md text-lg text-stone">
            Tell us what you&rsquo;re working on. We&rsquo;ll figure out the creative.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" variant="solid" arrow>
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
