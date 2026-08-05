import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/index.css";
import "@/App.css";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#0a0a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itobyinfotech.com"),
  title: {
    default: "Itoby Infotech - Global Digital Agency | Web Design, App & Software Solutions",
    template: "%s | Itoby Infotech",
  },
  description:
    "Itoby Infotech is a leading digital agency offering web design, mobile app development, digital marketing & custom software. Transform your business today.",
  keywords: [
    "web design company Noida",
    "app development agency India",
    "digital marketing services",
    "SEO company",
    "custom software development",
    "Microsoft 365 solutions",
    "UI/UX design",
    "e-commerce development",
    "Itoby Infotech",
  ],
  authors: [{ name: "Itoby Infotech Pvt. Ltd." }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://itobyinfotech.com/",
    languages: {
      "en-US": "https://itobyinfotech.com/",
      "en-CA": "https://itobyinfotech.com/",
      "en-AU": "https://itobyinfotech.com/",
      "x-default": "https://itobyinfotech.com/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://itobyinfotech.com/",
    title: "Itoby Infotech - A Group of Services",
    description:
      "Transform your vision into digital reality with premium web design, app development, and marketing solutions.",
    siteName: "Itoby Infotech",
    images: [
      {
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png",
        width: 1200,
        height: 630,
        alt: "Itoby Infotech Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@itobyinfotech",
    title: "Itoby Infotech - A Group of Services",
    description:
      "Transform your vision into digital reality with premium web design, app development, and marketing solutions.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png",
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/pwa-192x192.png",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Itoby Infotech Pvt. Ltd.",
  alternateName: "IIPL",
  url: "https://itobyinfotech.com",
  logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-91427-73500",
    contactType: "customer service",
    areaServed: ["US", "CA", "AU", "IN"],
    availableLanguage: "en",
  },
  sameAs: [
    "https://linkedin.com/company/itobyinfotech",
    "https://twitter.com/itobyinfotech",
    "https://instagram.com/itobyinfotech",
    "https://facebook.com/itobyinfotech",
    "https://youtube.com/@itobyinfotech",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Itoby Infotech",
  url: "https://itobyinfotech.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://itobyinfotech.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link rel="preconnect" href="https://uvpxfbucgcpsjwahmvjy.supabase.co" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Organization & Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M5G3MH5KZK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M5G3MH5KZK', { send_page_view: false });
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="s4fMLQyoVzP9NLSXPjog5Q"
          strategy="afterInteractive"
        />

        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
