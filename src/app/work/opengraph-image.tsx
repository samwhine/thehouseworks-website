import { ImageResponse } from "next/og";
import { getLogoMarkDataUri } from "@/lib/og-assets";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logo = getLogoMarkDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121011",
          color: "#F0EEE9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={logo} width={36} height={33} alt="" />
          <span style={{ fontSize: 24, color: "#9C978D" }}>The House Works</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: -1, display: "flex" }}>
            Selected work
          </span>
          <span style={{ fontSize: 28, color: "#9C978D", display: "flex" }}>
            Creative, design, editing and production — one unified body of work.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
