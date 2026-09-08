import clsx from "clsx";

/**
 * Temporary wordmark (spec section 47). Replace with the official THW
 * logo assets under /public/brand once supplied — see spec section 48.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "flex items-center gap-2 text-[15px] font-medium tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-6 items-center justify-center rounded-[3px] border border-current text-[10px] font-semibold"
      >
        H
      </span>
      The House Works
    </span>
  );
}
