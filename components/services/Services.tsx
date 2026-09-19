"use client";

import { useState } from "react";
import { serviceGroups } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, AnimatePresence } from "motion/react";

export function Services({ compact = false }: { compact?: boolean }) {
  const [openId, setOpenId] = useState<string | null>(serviceGroups[0].id);

  return (
    <section className="py-24 md:py-32" id="services">
      <Container>
        {!compact && (
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Four disciplines, one house."
              description="Each project draws on the mix it actually needs — nothing is forced into every brief."
              align="between"
            />
          </Reveal>
        )}

        <div className="mt-12">
          {serviceGroups.map((group, index) => {
            const isOpen = openId === group.id;

            return (
              <Reveal key={group.id} delay={index * 0.04}>
                <div className="border-t border-line first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : group.id)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                    data-cursor-active
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-3xl font-medium tracking-tight sm:text-4xl">
                        {group.title}
                      </span>
                      <span className="hidden text-sm text-stone sm:inline">
                        {group.ledBy}
                      </span>
                    </span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center border border-paper/20 text-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "rotate-45 border-brass text-brass-bright" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_1.4fr]">
                          <p className="text-paper-dim">{group.summary}</p>
                          <ul className="flex flex-wrap gap-x-6 gap-y-3">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="text-[13px] font-medium uppercase tracking-[0.06em] text-paper-dim"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
