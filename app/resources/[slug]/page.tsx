import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resourcesList } from "@/data/resourcesData";
import ResourceClient from "./ResourceClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcesList.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcesList.find((r) => r.slug === slug);

  if (!resource) {
    return {
      title: "Technical Resources | Itoby Infotech",
    };
  }

  return {
    title: `${resource.title} | Itoby Infotech`,
    description: resource.heroDescription,
    alternates: {
      canonical: `https://itobyinfotech.com/resources/${slug}`,
    },
    openGraph: {
      title: `${resource.title} | Itoby Infotech`,
      description: resource.heroDescription,
      url: `https://itobyinfotech.com/resources/${slug}`,
      type: "website",
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resourcesList.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return <ResourceClient resource={resource} />;
}
