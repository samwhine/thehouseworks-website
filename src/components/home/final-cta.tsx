import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32" aria-label="Start a project">
      <Container className="text-center">
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
