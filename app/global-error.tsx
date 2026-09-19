"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          background: "#14120f",
          color: "#f5f1e8",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 13, letterSpacing: "0.08em", color: "#8a8377" }}>
            ERROR
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 500, marginTop: 16 }}>
            The house lost power for a second.
          </h1>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
              minHeight: 52,
              padding: "0 28px",
              border: "1px solid rgba(245,241,232,0.25)",
              background: "transparent",
              color: "#f5f1e8",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
