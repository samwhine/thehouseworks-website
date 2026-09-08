import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Statement() {
  return (
    <section className="border-y border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="max-w-4xl text-3xl font-medium leading-[1.25] tracking-tight sm:text-4xl md:text-5xl">
            The House Works is a creative production partner — not a
            freelancer&rsquo;s portfolio, not a large agency. A small, capable
            house that companies hire to turn a brief into finished content.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
