import LocationContent from "@/components/LocationContent";
import JsonLd from "@/components/Jsonld";
import { getLocationBySlug, locations } from "@/data/locations";
import { absoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: `Services in ${location.name}`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  return (
    <>
      <JsonLd
        name={`Services in ${location.name}`}
        description={location.description}
        url={absoluteUrl(`/location/${location.slug}`)}
      />
      <LocationContent location={location} />
    </>
  );
}
