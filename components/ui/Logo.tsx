import Image from "next/image";
import clsx from "clsx";

export function Logo({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={clsx(
        "flex items-center gap-2.5 text-[15px] font-medium tracking-tight",
        className,
      )}
    >
      <span
        className={clsx(
          "relative block size-6 overflow-hidden rounded-[3px]",
          iconClassName,
        )}
      >
        <Image
          src="/brand/thw-logo-mark.png"
          alt=""
          fill
          sizes="24px"
          className="object-cover"
          priority
        />
      </span>
      The House Works
    </span>
  );
}
