"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";

const headlineLines = ["WE MAKE", "BRANDS", "WORTH", "WATCHING."];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(199,154,75,0.16),transparent_55%)]"
      />

      <Container className="relative">
        <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
          Creative production partner for brands
        </p>

        <h1 className="text-[15vw] font-medium leading-[0.92] tracking-tight sm:text-[11vw] md:text-[7.5rem] lg:text-[8.5rem]">
          {headlineLines.map((line, index) =>
            reduceMotion ? (
              <span key={line} className="block">
                {line}
              </span>
            ) : (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg text-paper-dim">
            Creative production partner for brands, from brief to final frame.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              className="flex min-h-[52px] items-center justify-center bg-paper px-7 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-brass-bright"
              data-cursor-active
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="flex min-h-[52px] items-center justify-center border border-paper/25 px-7 text-[13px] font-medium uppercase tracking-[0.08em] text-paper transition-colors hover:border-brass hover:text-brass-bright"
              data-cursor-active
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
