import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <h2 className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Have a
            <br />
            project?
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-6">
          <p className="max-w-xs text-paper-dim">
            Tell us what you&rsquo;re working on. We&rsquo;ll figure out the
            creative.
          </p>
          <Link
            href="/contact"
            className="flex min-h-[52px] items-center justify-center bg-paper px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-brass-bright"
            data-cursor-active
          >
            Start a Project →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
