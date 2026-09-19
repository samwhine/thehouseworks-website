"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function Error({
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
    <div className="flex min-h-[70svh] items-center pt-32 md:pt-40">
      <Container>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
          Error
        </p>
        <h1 className="mt-4 text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl">
          Something
          <br />
          cut out.
        </h1>
        <p className="mt-4 max-w-sm text-paper-dim">
          Try again, or head back to the homepage.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 inline-flex min-h-[52px] items-center border border-paper/25 px-7 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:border-brass hover:text-brass-bright"
        >
          Try Again
        </button>
      </Container>
    </div>
  );
}
