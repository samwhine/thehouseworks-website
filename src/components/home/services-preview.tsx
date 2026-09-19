import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ServicesList } from "@/components/services/services-list";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28" aria-label="Services">
      <Container>
        <SectionHeading
          title="What we do"
          supporting="Four capabilities, one team — brought together depending on what a brief actually needs."
        />

        <div className="mt-14">
          <ServicesList defaultOpen={false} />
        </div>

        <div className="mt-10">
          <ButtonLink href="/services" arrow>
            All Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
