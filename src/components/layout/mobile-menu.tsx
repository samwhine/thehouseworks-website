"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/work" },
  { label: "Reach Us", href: "/contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void; closeButtonRef?: React.RefObject<HTMLButtonElement | null> }) {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#002b43] px-8 py-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} className="font-display text-3xl text-white">Velorah<sup className="text-xs">®</sup></Link>
            <button type="button" onClick={onClose} className="liquid-glass inline-flex size-11 items-center justify-center rounded-full text-white" aria-label="Close menu">
              <X className="relative z-10 size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
            {links.map((link, index) => (
              <motion.div key={`${link.label}-${index}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Link href={link.href} onClick={onClose} className="block py-3 font-display text-5xl text-white">{link.label}</Link>
              </motion.div>
            ))}
          </nav>
          <Link href="/contact" onClick={onClose} className="liquid-glass inline-flex w-fit rounded-full px-8 py-4 text-sm text-white"><span className="relative z-10">Begin Journey</span></Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
