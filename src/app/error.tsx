"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center pt-32">
      <Container>
        <p className="font-display text-sm text-stone">Error</p>
        <h1 className="text-display mt-4 max-w-2xl uppercase text-balance">
          Something cut out.
        </h1>
        <p className="mt-6 max-w-md text-lg text-stone">
          Something went wrong loading this page. You can try again, or head back
          to the House.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-brass"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg text-paper transition-colors hover:text-brass"
          >
            Back to the House <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
