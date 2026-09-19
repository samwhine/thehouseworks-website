import localFont from "next/font/local";

// Self-hosted variable fonts (no requests to Google Fonts at build or
// runtime — everything ships from /src/fonts). Inter drives body/UI text,
// Space Grotesk drives display/headline type.

export const fontInter = localFont({
  src: "../fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const fontSpaceGrotesk = localFont({
  src: "../fonts/space-grotesk-variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});
