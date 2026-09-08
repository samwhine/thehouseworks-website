import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14120f",
        }}
      >
        <div
          style={{
            width: 108,
            height: 108,
            border: "6px solid #c79a4b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 700,
            color: "#f5f1e8",
            fontFamily: "sans-serif",
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size },
  );
}
