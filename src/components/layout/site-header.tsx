"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { primaryNav, navCta } from "@/data/site";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink">
        Skip to content
      </a>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="shrink-0" aria-label="The House Works — home">
            <Logo markClassName="h-8" />
          </Link>

          <nav className="liquid-glass hidden items-center gap-8 rounded-full px-6 py-3 md:flex" aria-label="Primary">
            {primaryNav.map((link, index) => (
              <Link key={link.href} href={link.href} className={`text-sm transition-colors duration-300 ${index === 0 ? "text-paper" : "text-paper/60 hover:text-paper"}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href={navCta.href} className="liquid-glass hidden rounded-full px-5 py-2.5 text-sm text-paper transition-transform duration-300 hover:scale-[1.03] md:inline-flex">
            <span className="relative z-10">{navCta.label}</span>
          </Link>

          <button type="button" onClick={() => setMenuOpen(true)} className="liquid-glass inline-flex rounded-full px-4 py-2 text-sm text-paper md:hidden" aria-haspopup="dialog" aria-expanded={menuOpen}>
            <span className="relative z-10 flex items-center gap-2">Menu <Menu className="size-4" aria-hidden /></span>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
