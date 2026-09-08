import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14120f",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            color: "#f5f1e8",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: "2px solid #f5f1e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            H
          </div>
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#f5f1e8",
              display: "flex",
            }}
          >
            Creative production
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#c79a4b",
              display: "flex",
            }}
          >
            partner for brands.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#8a8377", display: "flex" }}>
          {siteConfig.supportingLine}
        </div>
      </div>
    ),
    { ...size },
  );
}
