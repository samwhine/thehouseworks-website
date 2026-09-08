import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center pt-32 md:pt-40">
      <Container>
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
          404
        </p>
        <h1 className="mt-4 text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl">
          This frame
          <br />
          doesn&rsquo;t exist.
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-[52px] items-center border border-paper/25 px-7 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:border-brass hover:text-brass-bright"
        >
          Back to The House →
        </Link>
      </Container>
    </div>
  );
}
