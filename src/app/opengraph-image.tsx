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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src={logo} width={48} height={44} alt="" />
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
            The House Works
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1 }}>
              Creative production
            </span>
            <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1 }}>
              partner for brands.
            </span>
          </div>
          <span style={{ fontSize: 28, color: "#9C978D", display: "flex" }}>
            From brief to final frame.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
