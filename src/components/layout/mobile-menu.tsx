"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { primaryNav, navCta, site } from "@/data/site";
import { Logo } from "@/components/layout/logo";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
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
        <motion.div initial={{ opacity: 0, y: 14, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.99 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink/95 px-6 py-5 backdrop-blur-2xl md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} aria-label="The House Works — home"><Logo markClassName="h-8" /></Link>
            <button ref={closeButtonRef} type="button" onClick={onClose} className="liquid-glass inline-flex size-11 min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full text-paper transition-transform duration-200 active:scale-95" aria-label="Close menu"><X className="relative z-10 size-5" /></button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
            {primaryNav.map((link, index) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <motion.div key={link.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link href={link.href} onClick={onClose} aria-current={isActive ? "page" : undefined} className={`block min-h-14 rounded-2xl px-4 py-3 font-display text-5xl transition-[background-color,color,transform] duration-200 active:scale-[0.985] ${isActive ? "bg-white/10 text-paper" : "text-paper/70 hover:bg-white/[0.05] hover:text-paper"}`}>{link.label}</Link>
                </motion.div>
              );
            })}
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
