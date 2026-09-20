import type { Metadata } from "next";
import { fontInter, fontSpaceGrotesk } from "@/lib/fonts";
import { site, SITE_URL } from "@/data/site";
import { organizationJsonLd, websiteJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CustomCursor } from "@/components/layout/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Velorah", template: "%s" },
  description: "Digital spaces for sharp focus and inspired work.",
  keywords: ["Velorah", "digital studio", "creative tools", "inspired work"],
  authors: [{ name: site.name }],
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", siteName: "Velorah", locale: "en_US", url: SITE_URL },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontInter.variable} ${fontSpaceGrotesk.variable}`}>
      <body className="min-h-dvh antialiased">
        <script {...jsonLdScriptProps(organizationJsonLd())} />
        <script {...jsonLdScriptProps(websiteJsonLd())} />
        <CustomCursor />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
