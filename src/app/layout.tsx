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
  title: { default: "The House Works — Creative Production Partner", template: "%s" },
  description: site.description,
  keywords: ["The House Works", "creative production Indonesia", "creative agency Indonesia", "video editing", "brand content production"],
  authors: [{ name: site.name }],
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", siteName: site.name, locale: site.locale, url: SITE_URL },
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
