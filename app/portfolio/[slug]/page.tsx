import type { Metadata } from "next";
import PortfolioSlugClient from "./PortfolioSlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const metadataMap: Record<string, { title: string; description: string }> = {
  "b2b-saas": {
    title: "B2B SaaS Growth & Marketing Case Study | Itoby Infotech",
    description: "Case study detailing Itoby Infotech's B2B SaaS growth campaign, lead generation funnels, and digital marketing architecture.",
  },
  easy2buy: {
    title: "Easy2Buy Retail POS & E-Commerce Case Study | Itoby Infotech",
    description: "Case study on building Easy2Buy omnichannel e-commerce platform and cloud POS integration using Next.js and Stripe.",
  },
  fittrack: {
    title: "FitTrack Health & Fitness Mobile App Case Study | Itoby Infotech",
    description: "Explore how Itoby Infotech built FitTrack mobile application using Flutter, Dart, Firebase, and HealthKit for fitness tracking.",
  },
  freightxpress: {
    title: "FreightXpress Logistics & Fleet Tracking Case Study | Itoby Infotech",
    description: "Case study on engineering FreightXpress real-time GPS fleet tracking, dispatch optimization, and electronic Proof of Delivery.",
  },
  "healthcare-portal": {
    title: "Healthcare Patient Portal & Intake System Case Study | Itoby Infotech",
    description: "Case study on custom healthcare patient portal engineering, doctor appointment scheduling, and administrative workflows.",
  },
  juxtudio: {
    title: "Juxtudio Architecture Design Portfolio Case Study | Itoby Infotech",
    description: "Case study on Juxtudio architecture portfolio web application built with React, 3D rendering, and booking automation.",
  },
  "kaspereye-security": {
    title: "Kaspereye AI Security & Anomaly Telemetry Case Study | Itoby Infotech",
    description: "Case study on building Kaspereye AI security platform with Python, real-time threat detection, and automated alerting.",
  },
  "law-firm-m365": {
    title: "Law Firm Microsoft 365 Cloud Migration Case Study | Itoby Infotech",
    description: "Case study on legal practice cloud migration, SharePoint document management, and Microsoft 365 security policies.",
  },
  "lead-itoby": {
    title: "Lead Itoby B2B Sales CRM Software Case Study | Itoby Infotech",
    description: "Case study on building Lead Itoby CRM software for automated B2B sales deal pipelines, lead scoring, and WhatsApp messaging.",
  },
  "luxe-fashion": {
    title: "Luxe Fashion Headless E-Commerce Case Study | Itoby Infotech",
    description: "Case study on engineering Luxe Fashion headless e-commerce storefront with Next.js 15, Shopify API, and sub-second rendering.",
  },
  "manufacturing-erp": {
    title: "Industrial Manufacturing ERP System Case Study | Itoby Infotech",
    description: "Case study on Apex multi-warehouse manufacturing ERP system built with Node.js, PostgreSQL, and IoT sensor telemetry.",
  },
  quickpay: {
    title: "QuickPay FinTech Payment Wallet App Case Study | Itoby Infotech",
    description: "Case study on QuickPay digital payment wallet app development featuring PCI-DSS security and instant ledger settlements.",
  },
  "rainfra-studio": {
    title: "Rainfra Studio Architecture Web App Case Study | Itoby Infotech",
    description: "Case study on building Rainfra Studio modern architectural web portal with high-conversion lead intake.",
  },
  "rent-itoby": {
    title: "Rent Itoby PropTech Commercial Leasing CRM Case Study | Itoby Infotech",
    description: "Case study on Rent Itoby commercial property leasing CRM and tenant portal built with Next.js and Supabase RLS.",
  },
  "restaurant-chain": {
    title: "Restaurant Chain Cloud POS & Inventory Case Study | Itoby Infotech",
    description: "Case study on building multi-branch restaurant Point of Sale (POS), kitchen order display, and inventory tracking.",
  },
  "retail-m365": {
    title: "Multi-Store Retail Microsoft 365 Integration Case Study | Itoby Infotech",
    description: "Case study on multi-store retail chain Microsoft 365 enterprise setup, SharePoint communication, and cloud security.",
  },
  solidedgeconstructions: {
    title: "SolidEdge Construction Web Portal Case Study | Itoby Infotech",
    description: "Case study on SolidEdge Construction project tracking portal, interactive site portfolios, and client lead management.",
  },
  techflow: {
    title: "TechFlow SaaS Workflow & Analytics Platform Case Study | Itoby Infotech",
    description: "Case study on engineering TechFlow B2B SaaS workflow automation platform with Next.js, Node.js, and PostgreSQL.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = metadataMap[slug];

  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = item?.title || `${formattedTitle} Case Study | Itoby Infotech`;
  const description =
    item?.description ||
    `Explore the ${formattedTitle} case study and see how Itoby Infotech delivered digital transformation and measurable business results.`;

  const canonicalUrl = `https://www.itobyinfotech.com/portfolio/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Itoby Infotech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(metadataMap).map((slug) => ({ slug }));
}

export default async function PortfolioSlugPage({ params }: Props) {
  const { slug } = await params;
  return <PortfolioSlugClient slug={slug} />;
}
