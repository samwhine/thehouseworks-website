import { team } from "@/data/team";
import { Reveal } from "@/components/ui/reveal";

export function TeamGrid({ variant = "full" }: { variant?: "preview" | "full" }) {
  return (
    <div className="grid gap-12 sm:grid-cols-2 sm:gap-14">
      {team.map((member, i) => (
        <Reveal key={member.name} delay={i * 0.08}>
          <h3 className="text-h2">{member.name}</h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-brass">
            {member.role}
          </p>
          <p className="mt-4 max-w-sm text-lg text-stone">{member.bio}</p>
          {variant === "full" && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {member.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-paper/15 px-3.5 py-1.5 text-sm text-paper/80"
                >
                  {capability}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </div>
  );
}
