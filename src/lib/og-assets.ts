import fs from "node:fs";
import path from "node:path";

function readAsDataUri(relativePublicPath: string, mimeType: string) {
  const filePath = path.join(process.cwd(), "public", relativePublicPath);
  const base64 = fs.readFileSync(filePath).toString("base64");
  return `data:${mimeType};base64,${base64}`;
}

/** The real THW mark (transparent PNG), inlined for use inside ImageResponse. */
export function getLogoMarkDataUri() {
  return readAsDataUri("brand/the-house-works-logo.png", "image/png");
}
