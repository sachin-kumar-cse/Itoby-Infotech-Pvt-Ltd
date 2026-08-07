import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { technologyList } from "@/data/technologyData";
import TechClient from "./TechClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const slugMapping: Record<string, string> = {
  "nextjs-development": "nextjs",
  "react-development": "react",
  "nodejs-development": "nodejs",
  "supabase-development": "supabase-development",
  "postgresql-development": "postgresql-development",
  "openai-integration": "openai-integration",
  "ai-automation": "ai-automation",
};

export async function generateStaticParams() {
  const baseParams = technologyList.map((t) => ({ slug: t.slug }));
  const aliasParams = [
    { slug: "nextjs-development" },
    { slug: "react-development" },
    { slug: "nodejs-development" },
  ];
  return [...baseParams, ...aliasParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = slugMapping[slug] || slug;
  const tech = technologyList.find((t) => t.slug === targetSlug);

  if (!tech) {
    return {
      title: "Technology Solutions | Itoby Infotech",
    };
  }

  return {
    title: `${tech.name} Development Services | Itoby Infotech`,
    description: tech.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/technology/${targetSlug}`,
    },
    openGraph: {
      title: `${tech.name} Development Services | Itoby Infotech`,
      description: tech.heroDescription,
      url: `https://itobyinfotech.com/technology/${targetSlug}`,
      type: "website",
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { slug } = await params;
  const targetSlug = slugMapping[slug] || slug;
  const tech = technologyList.find((t) => t.slug === targetSlug);

  if (!tech) {
    notFound();
  }

  return <TechClient tech={tech} />;
}

