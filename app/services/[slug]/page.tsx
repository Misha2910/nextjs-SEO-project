import ServiceContent from "@/components/ServiceContent";
import JsonLd from "@/components/Jsonld";
import { getServiceBySlug, services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd
        name={service.name}
        description={service.description}
        url={absoluteUrl(`/services/${service.slug}`)}
      />
      <ServiceContent service={service} />
    </>
  );
}