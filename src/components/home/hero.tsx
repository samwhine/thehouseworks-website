"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-paper">
      <video className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`} autoPlay loop muted playsInline preload="auto" aria-hidden="true" onCanPlay={() => setVideoReady(true)}>
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 pt-32 text-center sm:px-8 lg:px-12">
        <div className="mb-8 flex items-center gap-3 text-eyebrow text-[0.65rem] text-paper/65">
          <span className="inline-block size-2 rounded-full bg-brass" />
          Independent creative production team · Indonesia
        </div>
        <motion.h1 className="text-display max-w-6xl" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
          We make <em className="not-italic text-paper/60">brands</em> worth watching.
        </motion.h1>
        <motion.p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18, ease: EASE }}>
          Creative production partner for brands, from brief to final frame.
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap justify-center gap-4" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
          <ButtonLink href="/work" variant="solid">View Our Work</ButtonLink>
          <ButtonLink href="/contact" variant="outline">Start a Project</ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
