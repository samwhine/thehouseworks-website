import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function Faq() {
  const items = faqItems.map((item, i) => ({
    id: `faq-${i}`,
    header: (
      <span className="text-h2 text-[1.1rem] sm:text-[1.35rem]">{item.question}</span>
    ),
    content: <p className="max-w-[60ch] text-stone">{item.answer}</p>,
  }));

  return (
    <section className="py-20 sm:py-28" aria-label="Frequently asked questions">
      <Container>
        <SectionHeading title="Questions, answered" />
        <div className="mt-14">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
