import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/index.css";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#0a0a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itobyinfotech.com"),
  title: {
    default: "Website Development Company | AI, SaaS & Software | Itoby Infotech",
    template: "%s | Itoby Infotech",
  },
  description:
    "Itoby Infotech Pvt. Ltd. is a premier website development company & SaaS lab engineering custom software, mobile apps, digital marketing & AI solutions.",
  keywords: [
    "Website Development Company",
    "Itoby Infotech Pvt Ltd",
    "IIPL",
    "Itoby Infotech",
    "IIPL SaaS",
    "custom software development company",
    "mobile app development agency",
    "web design agency USA Canada Australia Dubai UAE India",
    "AI voice calling agents",
    "B2B lead generation tool",
    "Generative engine optimization GEO agency",
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
  },
  openGraph: {
    type: "website",
    url: "https://itobyinfotech.com",
    title: "Website Development Company | AI, SaaS & Software | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. is a premier website development company & SaaS lab engineering custom software, mobile apps, digital marketing & AI solutions.",
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
    title: "Website Development Company | AI, SaaS & Software | Itoby Infotech",
    description:
      "Itoby Infotech Pvt. Ltd. is a premier website development company & SaaS lab engineering custom software, mobile apps, digital marketing & AI solutions.",
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
  legalName: "Itoby Infotech Private Limited",
  alternateName: ["IIPL", "Itoby Infotech"],
  url: "https://itobyinfotech.com",
  logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-91427-73500",
    contactType: "customer service",
    email: "info@itobyinfotech.com",
    areaServed: ["US", "CA", "AU", "IN", "GB", "AE"],
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://linkedin.com/company/itobyinfotech",
    "https://github.com/sachin-kumar-cse/Itoby-Infotech-Pvt-Ltd",
    "https://twitter.com/itobyinfotech",
    "https://instagram.com/itobyinfotech",
    "https://facebook.com/itobyinfotech",
    "https://youtube.com/@itobyinfotech",
    "https://www.crunchbase.com/organization/itoby-infotech",
  ],
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Itoby Infotech Pvt. Ltd.",
  image: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
  "@id": "https://itobyinfotech.com",
  url: "https://itobyinfotech.com",
  telephone: "+91-91427-73500",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector-4",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.58,
    longitude: 77.33,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
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
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "142",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Sharma" },
        "datePublished": "2026-01-15",
        "reviewBody": "IIPL Lead automated our B2B lead pipelines and quadrupled our sales revenue.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Renting",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "url": "https://rent.itobyinfotech.com",
      "description": "Commercial Office Leasing & Tenant Management CRM for real estate property managers.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "98",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Patel" },
        "datePublished": "2026-02-10",
        "reviewBody": "Reduced tenant onboarding time by 75% across our commercial office towers.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Billing",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "url": "https://billing.itobyinfotech.com",
      "description": "Enterprise GST Invoicing & Client Revenue Software with E-Way Bill API sync and retainer billing.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "115",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Neha Gupta" },
        "datePublished": "2026-01-28",
        "reviewBody": "Simplified GST e-invoicing and automated monthly client billing effortlessly.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Cashmemo",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "url": "https://cashmemo.itobyinfotech.com",
      "description": "Instant Digital Cash Memo & Retail Receipt Builder with direct WhatsApp PDF sharing.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "86",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sanjay Verma" },
        "datePublished": "2026-03-02",
        "reviewBody": "Instant WhatsApp PDF receipt generator saves our billing staff hours every day.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "IIPL Calling",
      "applicationCategory": "CommunicationsApplication",
      "operatingSystem": "Web Browser",
      "url": "https://royalblue-ant-234341.hostingersite.com/",
      "description": "Conversational AI Voice Calling Agents for Restaurant Table Bookings & Insurance Renewal Reminders.",
      "author": { "@type": "Organization", "name": "Itoby Infotech Pvt. Ltd." },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "64",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Mehta" },
        "datePublished": "2026-03-15",
        "reviewBody": "AI calling agents handle appointment scheduling smoothly with human-like conversation.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
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
        
        {/* Organization, LocalBusiness & Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
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
        <AnalyticsScripts />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
