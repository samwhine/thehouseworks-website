import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  arrow?: boolean;
  className?: string;
};

const BASE =
  "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-sm";

const VARIANTS = {
  solid: "bg-paper text-ink hover:bg-brass",
  outline: "border border-paper/25 text-paper hover:border-brass hover:text-brass",
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  arrow = false,
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const isMail = href.startsWith("mailto:");
  const classes = cn(BASE, VARIANTS[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (isExternal || isMail) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
