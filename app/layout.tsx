import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD

const siteUrl = "https://thehouseworks.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The House Works — Creative Production Partner",
    template: "%s | The House Works",
  },
  description: "The House Works is a Jakarta-based creative production partner for brands and teams that want good content without the production headache.",
  applicationName: "The House Works",
  keywords: ["creative production house", "content production", "video production Jakarta", "editing and motion", "social content", "The House Works"],
  authors: [{ name: "Samuel Extehines Heydemans" }],
  creator: "Samuel Extehines Heydemans",
  publisher: "The House Works",
  alternates: { canonical: siteUrl },
  category: "creative services",
  openGraph: {
    title: "The House Works — Creative Production Partner",
    description: "Planning, production, editing, and motion for teams that move.",
    url: siteUrl,
    siteName: "The House Works",
    locale: "en_US",
    type: "website",
    images: [{ url: "/brand/thehouseworks-logo.webp", width: 2048, height: 2048, alt: "The House Works logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The House Works — Creative Production Partner",
    description: "Planning, production, editing, and motion for teams that move.",
    images: ["/brand/thehouseworks-logo.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/brand/thehouseworks-logo.webp", apple: "/brand/thehouseworks-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The House Works",
    url: siteUrl,
    logo: `${siteUrl}/brand/thehouseworks-logo.webp`,
    description: "Creative production partner for brands and teams that move.",
    founder: [
      { "@type": "Person", name: "Samuel Extehines Heydemans" },
      { "@type": "Person", name: "Stefanny Simanjuntak" },
    ],
    email: "hello@thehouseworks.id",
    areaServed: "Jakarta, Indonesia",
  };

  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
=======
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Creative Production Partner`,
    template: `%s`,
  },
  description:
    "The House Works is a creative production partner helping brands turn briefs into content through creative direction, design, video editing and social production.",
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-ink text-paper">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
>>>>>>> parent of 44f0ac6 (update1.2)
}
