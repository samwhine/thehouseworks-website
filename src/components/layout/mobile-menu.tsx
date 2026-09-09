"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav, navCta, site } from "@/data/site";
import { Logo } from "@/components/layout/logo";

export function MobileMenu({
  open,
  onClose,
  closeButtonRef,
}: {
  open: boolean;
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  // Lock body scroll while open, restore on close/unmount. Escape closes.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, closeButtonRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex size-11 items-center justify-center rounded-full border border-paper/20 text-paper focus-visible:outline-2 focus-visible:outline-brass"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
            {primaryNav.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 font-display text-4xl font-semibold tracking-tight text-paper"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-6 border-t border-paper/10 px-6 py-8">
            <Link
              href={navCta.href}
              onClick={onClose}
              className="inline-flex w-fit items-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
            >
              {navCta.label}
            </Link>
            <div className="flex items-center justify-between text-sm text-stone">
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
