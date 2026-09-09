"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import { useIsDesktop, useReducedMotion } from "@/hooks/use-media-query";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  // Pinned "scroll stack" is a desktop enhancement only — mobile always
  // gets plain vertical cards (spec §31), and reduced motion skips pinning
  // entirely rather than fighting the user's OS preference.
  const useStack = isDesktop && !reducedMotion;

  useLayoutEffect(() => {
    if (!useStack || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      const lastCard = cards[cards.length - 1];

      cards.forEach((card) => {
        if (card === lastCard) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=96",
          endTrigger: lastCard,
          end: "top top+=96",
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [useStack]);

  return (
    <section className="py-20 sm:py-28" aria-label="Process">
      <Container>
        <Reveal>
          <p className="text-h1 max-w-2xl text-balance">
            You bring the brief. We build the creative.
          </p>
        </Reveal>

        <div ref={containerRef} className="mt-16">
          {processSteps.map((step, i) => (
            <div
              key={step.index}
              className="process-card flex min-h-[220px] flex-col justify-center gap-4 border-t border-paper/10 bg-ink py-10 last:border-b sm:min-h-[280px] sm:py-14"
              style={useStack ? { zIndex: i + 1 } : undefined}
            >
              <div className="flex items-start gap-6 sm:gap-10">
                <span className="font-display text-2xl text-brass sm:text-3xl">
                  {step.index}
                </span>
                <div>
                  <h3 className="text-h2">{step.title}</h3>
                  <p className="mt-2 max-w-md text-lg text-stone">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 text-lg text-paper/80">
            You run the business. We handle the creative.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
