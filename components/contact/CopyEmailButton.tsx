"use client";

import { useState } from "react";
import clsx from "clsx";

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the email is still selectable text.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={clsx(
        "inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-stone transition-colors hover:text-brass-bright",
        className,
      )}
      aria-label={`Copy email address ${email}`}
      data-cursor-active
    >
      <CopyIcon copied={copied} />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8.5L6.5 12L13 4.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect
        x="5.5"
        y="5.5"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M3 10.5V3.5C3 2.94772 3.44772 2.5 4 2.5H10.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
