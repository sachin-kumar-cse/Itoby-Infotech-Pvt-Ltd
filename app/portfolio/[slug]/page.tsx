import type { Metadata } from "next";
import PortfolioSlugClient from "./PortfolioSlugClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const metadataMap: Record<string, { title: string; description: string }> = {
  easy2buy: {
    title: "Easy2Buy Retail POS & E-Commerce Case Study | Itoby Infotech",
    description: "Case study on building Easy2Buy omnichannel e-commerce platform and cloud POS integration using Next.js and Stripe.",
  },
  juxtudio: {
    title: "Juxtudio Architecture Design Portfolio Case Study | Itoby Infotech",
    description: "Case study on Juxtudio architecture portfolio web application built with React, 3D rendering, and booking automation.",
  },
  "kaspereye-security": {
    title: "Kaspereye AI Security & Anomaly Telemetry Case Study | Itoby Infotech",
    description: "Case study on building Kaspereye AI security platform with Python, real-time threat detection, and automated alerting.",
  },
  "lead-itoby": {
    title: "Lead Itoby B2B Sales CRM Software Case Study | Itoby Infotech",
    description: "Case study on building Lead Itoby CRM software for automated B2B sales deal pipelines, lead scoring, and WhatsApp messaging.",
  },
  "rainfra-studio": {
    title: "Rainfra Studio Architecture Web App Case Study | Itoby Infotech",
    description: "Case study on building Rainfra Studio modern architectural web portal with high-conversion lead intake.",
  },
  "rent-itoby": {
    title: "Rent Itoby PropTech Commercial Leasing CRM Case Study | Itoby Infotech",
    description: "Case study on Rent Itoby commercial property leasing CRM and tenant portal built with Next.js and Supabase RLS.",
  },
  solidedgeconstructions: {
    title: "SolidEdge Construction Web Portal Case Study | Itoby Infotech",
    description: "Case study on SolidEdge Construction project tracking portal, interactive site portfolios, and client lead management.",
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
