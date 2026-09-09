import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Start a Project — The House Works",
  description:
    "Have a brief or project in mind? Contact The House Works for creative production, design, editing and social content support.",
  path: "/contact",
  keywords: [
    "contact The House Works",
    "hire creative production Indonesia",
    "start a creative project",
    "The House Works email",
  ],
});

const CHECKLIST = [
  "What you're working on",
  "What you need from us",
  "Your timeline",
];

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />
      <section className="flex min-h-[80svh] flex-col justify-center pb-20 pt-36 sm:pb-28 sm:pt-40">
        <Container>
          <Reveal>
            <h1 className="text-display max-w-2xl uppercase">Start a project</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[52ch] text-lg text-stone">
              Send what you&rsquo;re working on, what you need and your timeline —
              we&rsquo;ll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-12">
            <a
              href={`mailto:${site.email}`}
              data-cursor-hover
              className="group inline-flex flex-wrap items-center gap-3 text-3xl font-medium text-paper transition-colors hover:text-brass sm:text-5xl"
            >
              {site.email}
              <ArrowUpRight className="size-8 shrink-0 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-10" />
            </a>
          </Reveal>

          <Reveal delay={0.22} className="mt-14 flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="text-sm text-stone">A good first message includes</p>
              <ul className="mt-3 space-y-1.5 text-paper/80">
                {CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-stone">Or find us on</p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-paper"
              >
                Instagram — {site.instagramHandle}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
