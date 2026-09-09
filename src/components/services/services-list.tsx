"use client";

import { serviceGroups } from "@/data/services";
import { Accordion } from "@/components/ui/accordion";
import { Magnetic } from "@/components/ui/magnetic";

export function ServicesList({ defaultOpen = true }: { defaultOpen?: boolean }) {
  const items = serviceGroups.map((group) => ({
    id: group.slug,
    header: (
      <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pr-6">
        <Magnetic strength={8}>
          <span className="text-h2 text-[1.6rem] sm:text-[2.1rem]">{group.title}</span>
        </Magnetic>
        <span className="text-sm text-stone">
          {group.ledBy === "Shared" ? "Shared" : `Led by ${group.ledBy}`}
        </span>
      </div>
    ),
    content: (
      <div className="grid gap-6 sm:grid-cols-[1fr_1.4fr]">
        <p className="max-w-[36ch] text-stone">{group.summary}</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-paper/80">
          {group.offerings.map((offering) => (
            <li key={offering} className="rounded-full border border-paper/15 px-3.5 py-1.5">
              {offering}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <Accordion items={items} defaultOpenId={defaultOpen ? serviceGroups[0]?.slug : undefined} />
  );
}
