import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Process() {
  return (
    <section className="border-y border-line py-24 md:py-32" id="process">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            You bring the brief. We build the creative.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="border-t border-line pt-6">
                <span className="text-sm text-stone">{step.number}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-paper-dim">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <p className="text-lg text-paper-dim">
            You run the business. We handle the creative.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
