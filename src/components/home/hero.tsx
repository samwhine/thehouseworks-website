"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const HEADLINE_LINES = ["We make", "brands", "worth", "watching."];
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--color-paper)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-paper)_7%,transparent)_1px,transparent_1px)] [background-size:clamp(72px,11vw,160px)_clamp(72px,11vw,160px)] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_75%,transparent)]" />
      <div className="pointer-events-none absolute -right-48 -top-48 size-[42rem] rounded-full bg-brass/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20 lg:px-12">
        <div>
          <div className="mb-8 flex items-center gap-3 text-eyebrow text-[0.65rem] text-stone">
            <span className="inline-block size-2 rounded-full bg-brass" />
            Independent creative production team · Indonesia
          </div>
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
            <ButtonLink href="/work" variant="solid">View Our Work</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Start a Project</ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-paper/15 bg-ink-2 p-6 sm:min-h-[27rem] sm:p-8"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,color-mix(in_oklab,var(--color-brass)_35%,transparent),transparent_32%),linear-gradient(135deg,#27211a,#121011_58%)]" />
          <div className="absolute -right-12 top-10 size-56 rounded-full border border-brass/40 sm:size-72" />
          <div className="absolute -right-2 top-20 size-40 rounded-full border border-paper/20 sm:size-52" />
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-eyebrow text-[0.65rem] text-brass">The House Works</p>
              <p className="mt-3 max-w-[14ch] font-display text-3xl uppercase leading-[0.9] text-paper sm:text-4xl">From brief to final frame.</p>
            </div>
            <Image src="/brand/the-house-works-logo.png" alt="The House Works mark" width={120} height={112} className="w-20 object-contain sm:w-28" />
          </div>
          <div className="absolute right-6 top-6 flex items-center gap-2 text-xs text-paper/55 sm:right-8 sm:top-8">
            Scroll to explore <ArrowDownRight className="size-4 text-brass" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
