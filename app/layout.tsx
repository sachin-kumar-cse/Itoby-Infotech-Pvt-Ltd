import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/index.css";
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
    default: "Itoby Infotech - Global Digital Agency & SaaS Lab",
    template: "%s | Itoby Infotech",
  },
  description:
    "Itoby Infotech is a premier global digital agency engineering custom web applications, mobile apps, custom software, and enterprise AI SaaS solutions.",
  keywords: [
    "Itoby Infotech Pvt Ltd",
    "IIPL",
    "Itoby Infotech",
    "IIPL SaaS",
    "web design agency USA Canada Australia Dubai UAE India",
    "custom software development company Dubai UAE",
    "mobile app development agency New York London Sydney Dubai Noida",
    "AI voice calling agents IIPL Calling",
    "B2B lead generation tool IIPL Lead",
    "commercial property leasing CRM IIPL Renting",
    "GST invoicing software IIPL Billing",
    "instant cash memo generator IIPL Cashmemo",
    "generative engine optimization GEO agency",
    "AEO voice search optimization",
    "Microsoft 365 migration agency",
    "enterprise React Next.js agency",
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
    canonical: "https://itobyinfotech.com",
    languages: {
      "en-US": "https://itobyinfotech.com",
      "en-CA": "https://itobyinfotech.com",
      "en-AU": "https://itobyinfotech.com",
      "en-GB": "https://itobyinfotech.com",
      "en-AE": "https://itobyinfotech.com",
      "en-IN": "https://itobyinfotech.com",
      "x-default": "https://itobyinfotech.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://itobyinfotech.com",
    title: "Itoby Infotech - Global Digital Agency & SaaS Lab",
    description:
      "Transforming business growth worldwide across India, USA, Canada, Australia, Dubai (UAE) & UK with custom software, web design, mobile apps & SaaS platforms.",
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
    title: "Itoby Infotech - Global Digital Agency & SaaS Lab",
    description:
      "Transforming business growth worldwide across India, USA, Canada, Australia, Dubai (UAE) & UK with custom software, web design, mobile apps & SaaS platforms.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png",
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/pwa-192x192.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "xGvhsBlP0jK8nOcsUSrBBDy19jI3xN1lQff_vQLkF58",
  },
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
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://itobyinfotech.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdSaasProducts = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Lead",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "url": "https://lead.itobyinfotech.com",
      "description": "AI B2B Lead Generation & Cold Email Automation CRM with Google Maps Scraper and 15-Second AI Site Auditor.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Renting",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "url": "https://rent.itobyinfotech.com",
      "description": "Commercial Office Leasing & Tenant Management CRM for real estate property managers.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Billing",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "url": "https://billing.itobyinfotech.com",
      "description": "Enterprise GST Invoicing & Client Revenue Software with E-Way Bill API sync and retainer billing.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Cashmemo",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "url": "https://cashmemo.itobyinfotech.com",
      "description": "Instant Digital Cash Memo & Retail Receipt Builder with direct WhatsApp PDF sharing.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Calling",
      "applicationCategory": "CommunicationsApplication",
      "operatingSystem": "Web Browser",
      "url": "https://royalblue-ant-234341.hostingersite.com/",
      "description": "Conversational AI Voice Calling Agents for Restaurant Table Bookings & Insurance Renewal Reminders.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark font-sans" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="xGvhsBlP0jK8nOcsUSrBBDy19jI3xN1lQff_vQLkF58" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSaasProducts) }}
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
