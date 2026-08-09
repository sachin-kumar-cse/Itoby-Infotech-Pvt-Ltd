import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationsList } from "@/data/locationsData";
import LocationClient from "./LocationClient";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return locationsList.map((loc) => ({
    city: loc.citySlug,
    service: loc.serviceSlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const loc = locationsList.find(
    (l) => l.citySlug === city && l.serviceSlug === service
  );

  if (!loc) {
    return {
      title: "Location Services | Itoby Infotech",
    };
  }

  return {
    title: `${loc.title} | Itoby Infotech`,
    description: loc.heroDescription,
    alternates: {
      canonical: `https://www.itobyinfotech.com/locations/${city}/${service}`,
    },
    openGraph: {
      title: `${loc.title} | Itoby Infotech`,
      description: loc.heroDescription,
      url: `https://www.itobyinfotech.com/locations/${city}/${service}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city, service } = await params;
  const loc = locationsList.find(
    (l) => l.citySlug === city && l.serviceSlug === service
  );

  if (!loc) {
    notFound();
  }

  return <LocationClient data={loc} />;
}
