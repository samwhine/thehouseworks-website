"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#121011",
          color: "#F0EEE9",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
          Something went wrong.
        </h1>
        <p style={{ color: "#9C978D", maxWidth: "32rem", margin: 0 }}>
          The House Works hit an unexpected error. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            borderRadius: "9999px",
            background: "#F0EEE9",
            color: "#121011",
            padding: "0.75rem 1.75rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
