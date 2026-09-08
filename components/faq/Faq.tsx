"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32" id="faq">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions." />
        </Reveal>

        <div className="mt-12 max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div className="border-t border-line first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    data-cursor-active
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center border border-paper/20 text-base transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 text-paper-dim">
                          {faq.answer}
                        </p>
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
