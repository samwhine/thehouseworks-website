import type { ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "between";
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6",
        align === "between" && "md:flex-row md:items-end md:justify-between",
      )}
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-paper-dim">{description}</p>
      )}
    </div>
  );
}
