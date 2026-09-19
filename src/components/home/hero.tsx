"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const HEADLINE_LINES = ["We make", "brands", "worth", "watching."];
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-36 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <h1 className="text-display max-w-5xl uppercase">
          {HEADLINE_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReducedMotion ? undefined : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-md text-lg text-stone"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
        >
          Creative production partner for brands, from brief to final frame.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.74, ease: EASE }}
        >
          <ButtonLink href="/work" variant="solid">
            View Our Work
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Start a Project
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
