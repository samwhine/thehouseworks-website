import { ArrowRight } from "lucide-react";
import { workflowStages } from "@/data/process";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Statement() {
  return (
    <section className="border-y border-paper/10 bg-ink-2 py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-h1 max-w-3xl text-balance">
            You bring the brief. We handle the creative.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-4 text-sm text-stone sm:text-base">
            {workflowStages.map((stage, i) => (
              <span key={stage} className="flex items-center gap-3">
                <span className="text-paper/80">{stage}</span>
                {i < workflowStages.length - 1 && (
                  <ArrowRight className="size-4 text-stone" aria-hidden />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
