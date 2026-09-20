"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav, navCta, site } from "@/data/site";
import { Logo } from "@/components/layout/logo";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-5 md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} aria-label="The House Works — home"><Logo markClassName="h-8" /></Link>
            <button type="button" onClick={onClose} className="liquid-glass inline-flex size-11 items-center justify-center rounded-full text-paper" aria-label="Close menu"><X className="relative z-10 size-5" /></button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
            {primaryNav.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Link href={link.href} onClick={onClose} className="block py-3 font-display text-5xl text-paper">{link.label}</Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex flex-col gap-5 border-t border-paper/10 pt-6">
            <Link href={navCta.href} onClick={onClose} className="liquid-glass inline-flex w-fit rounded-full px-8 py-4 text-sm text-paper"><span className="relative z-10">{navCta.label}</span></Link>
            <a href={`mailto:${site.email}`} className="text-sm text-stone">{site.email}</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
