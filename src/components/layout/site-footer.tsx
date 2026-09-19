import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { primaryNav, site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <p className="text-display text-balance">{site.supportingLine}</p>
        </Reveal>

        <div className="mt-10">
          <Reveal delay={0.05}>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-lg text-paper/90 transition-colors hover:text-brass sm:text-xl"
            >
              {site.email}
              <ArrowUpRight className="size-5" aria-hidden />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-paper/10 pt-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-sm font-semibold tracking-tight text-paper">
              The House Works
            </p>
            <p className="mt-2 text-sm text-stone">{site.supportingLine}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-eyebrow text-xs text-stone">Sitemap</p>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow text-xs text-stone">Connect</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} The House Works. All rights reserved.</p>
          <p>Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
