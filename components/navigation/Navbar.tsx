"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { navLinks } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-line bg-ink/90 backdrop-blur" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="text-paper" data-cursor-active>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-paper-dim transition-colors hover:text-paper"
              data-cursor-active
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center border border-paper/25 px-5 text-[13px] font-medium uppercase tracking-[0.08em] text-paper transition-colors hover:border-brass hover:text-brass-bright md:flex"
            data-cursor-active
          >
            Start a Project
          </Link>

          <button
            type="button"
            className="flex size-11 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="h-px w-6 bg-paper" />
            <span className="h-px w-6 bg-paper" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
