import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-12 py-16 md:flex-row md:items-start md:justify-between md:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-paper-dim">
            {siteConfig.tagline} {siteConfig.supportingLine}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
              Site
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-paper-dim transition-colors hover:text-paper"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-paper-dim transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
              Team
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.behance.samuel}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-paper-dim transition-colors hover:text-paper"
                >
                  Samuel — Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} The House Works. All rights reserved.</p>
        <p>Jakarta, Indonesia</p>
      </Container>
    </footer>
  );
}
