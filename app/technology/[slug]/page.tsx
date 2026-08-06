import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { technologyList } from "@/data/technologyData";
import TechClient from "./TechClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return technologyList.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = technologyList.find((t) => t.slug === slug);

  if (!tech) {
    return {
      title: "Technology Solutions | Itoby Infotech",
    };
  }

  return {
    title: `${tech.name} Development Services | Itoby Infotech`,
    description: tech.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/technology/${slug}`,
    },
    openGraph: {
      title: `${tech.name} Development Services | Itoby Infotech`,
      description: tech.heroDescription,
      url: `https://itobyinfotech.com/technology/${slug}`,
      type: "website",
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { slug } = await params;
  const tech = technologyList.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  return <TechClient tech={tech} />;
}
