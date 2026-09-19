import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  title,
  supporting,
  className,
}: {
  title: ReactNode;
  supporting?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <h2 className="text-h1 text-balance">{title}</h2>
      </Reveal>
      {supporting && (
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[46ch] text-lg text-stone">{supporting}</p>
        </Reveal>
      )}
    </div>
  );
}
