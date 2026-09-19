"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { primaryNav, navCta } from "@/data/site";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-500 ease-premium",
          scrolled
            ? "border-b border-paper/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="shrink-0" aria-label="The House Works — home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-paper/80 transition-colors duration-300 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Magnetic>
              <Link
                href={navCta.href}
                className="inline-flex items-center rounded-full border border-paper/25 px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                {navCta.label}
              </Link>
            </Magnetic>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-paper lg:hidden"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            Menu
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} closeButtonRef={menuButtonRef} />
    </>
  );
}
