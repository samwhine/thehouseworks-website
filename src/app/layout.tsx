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
  applicationName: site.name,
  title: { default: "The House Works — Creative Production Partner in Indonesia", template: "%s" },
  description: site.description,
  keywords: ["The House Works", "creative production Indonesia", "creative agency Indonesia", "video editing Indonesia", "motion graphics", "brand content production", "social media content production"],
  authors: [{ name: "Samuel Extehines Heydemans" }, { name: "Stefanny Simanjuntak" }],
  creator: site.name,
  publisher: site.name,
  category: "creative production",
  alternates: { canonical: SITE_URL },
  icons: { icon: "/favicon.ico", apple: "/icons/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", siteName: site.name, locale: site.locale, url: SITE_URL, title: "The House Works — Creative Production Partner in Indonesia", description: site.description, images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "The House Works — Creative production partner for brands" }] },
  twitter: { card: "summary_large_image", title: "The House Works — Creative Production Partner in Indonesia", description: site.description, images: [`${SITE_URL}/opengraph-image`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
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
