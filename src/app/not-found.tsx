import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center pt-32">
      <Container>
        <p className="font-display text-sm text-stone">404</p>
        <h1 className="text-display mt-4 max-w-2xl uppercase text-balance">
          This frame doesn&rsquo;t exist.
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-lg text-paper transition-colors hover:text-brass"
        >
          Back to the House <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}
