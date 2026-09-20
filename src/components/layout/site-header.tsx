"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "@/components/layout/mobile-menu";

const links = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/work" },
  { label: "Reach Us", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#06131c]"
      >
        Skip to content
      </a>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
          <Link href="/" className="font-display text-3xl tracking-tight text-white" aria-label="Velorah home">
            Velorah<sup className="text-xs">®</sup>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={`text-sm transition-colors duration-300 ${index === 0 ? "text-white" : "text-white/55 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03] md:inline-flex">
            <span className="relative z-10">Begin Journey</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="liquid-glass inline-flex rounded-full px-4 py-2 text-sm text-white md:hidden"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            <span className="relative z-10 flex items-center gap-2">Menu <Menu className="size-4" aria-hidden /></span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} closeButtonRef={{ current: null }} />
    </>
  );
}
