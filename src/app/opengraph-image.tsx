import { ImageResponse } from "next/og";
import { getLogoMarkDataUri } from "@/lib/og-assets";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The House Works — Creative production partner for brands";

export default function Image() {
  const logo = getLogoMarkDataUri();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#002b43", color: "#ffffff", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img src={logo} width={52} height={48} alt="" />
        <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>The House Works</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 68, fontWeight: 400, lineHeight: 1.02, letterSpacing: -2 }}>We make brands</span>
          <span style={{ fontSize: 68, fontWeight: 400, lineHeight: 1.02, letterSpacing: -2 }}>worth watching.</span>
        </div>
        <span style={{ fontSize: 27, color: "#b9c5ca", display: "flex" }}>Creative production partner for brands, from brief to final frame.</span>
      </div>
    </div>,
    { ...size },
  );
}
