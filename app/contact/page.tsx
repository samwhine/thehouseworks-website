import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Start a Project — The House Works",
  description:
    "Have a brief or project in mind? Contact The House Works for creative production, design, editing and social content support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Have a project?"
            description="Tell us what you're working on. We'll figure out the creative."
          />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.05} className="flex flex-col gap-8">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-2xl font-medium tracking-tight transition-colors hover:text-brass-bright"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
                Instagram
              </p>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 block text-2xl font-medium tracking-tight transition-colors hover:text-brass-bright"
              >
                {siteConfig.instagram.handle}
              </a>
            </div>

            <p className="max-w-sm text-paper-dim">
              Send what you&rsquo;re working on, what you need, and your
              timeline — we&rsquo;ll reply from there.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
