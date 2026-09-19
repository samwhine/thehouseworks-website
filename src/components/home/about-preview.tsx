import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { TeamGrid } from "@/components/about/team-grid";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28" aria-label="About">
      <Container>
        <SectionHeading
          title="Two people. One house."
          supporting="The House Works is an independent creative team built to help brands turn ideas into content people actually want to see."
        />
        <div className="mt-14">
          <TeamGrid variant="preview" />
        </div>
        <div className="mt-10">
          <ButtonLink href="/about" arrow>
            More About THW
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
