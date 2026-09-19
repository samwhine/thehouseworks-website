import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Real THW brand mark (public/brand/the-house-works-logo.png — transparent
 * cutout of the supplied logo). alt="" is intentional: every usage below pairs it
 * with the "The House Works" text, so the image is decorative to avoid
 * screen readers announcing the name twice.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/the-house-works-logo.png"
      alt=""
      width={800}
      height={741}
      priority
      className={cn("h-7 w-auto", className)}
    />
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-paper", className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        The House Works
      </span>
    </span>
  );
}
