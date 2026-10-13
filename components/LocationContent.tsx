import { getServiceBySlug } from "@/data/services";
import { Location } from "@/types";
import Link from "next/link";
import FAQSection from "./FAQSection";
import RelatedLinks from "./RelatedLinks";

interface LocationContentProps {
  location: Location;
}

export default function LocationContent({ location }: LocationContentProps) {
  const availableServices = location.availableServices
    .map((slug) => getServiceBySlug(slug.toLowerCase().replace(/\s+/g, "-")))
    .filter((service) => service !== undefined);

  return (
    <main className="container page-content">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <Link href="/location">Locations</Link>
        <span>{location.name}</span>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p>Service Location</p>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <a className="button" href="#available-services">Explore Services</a>
      </section>

      {/* Available Services */}
      <section className="available-services" id="available-services">
        <h2>Services Available in {location.name}</h2>
        {availableServices.length > 0 ? (
          <div className="services-grid">
            {availableServices.map((service) => (
              <article className="service-card" key={service!.slug}>
                <h3 className="service-title">{service!.name}</h3>
                <p className="service-description">{service!.description}</p>
                <Link href={`/services/${service!.slug}`}>
                  <span aria-hidden="true">→</span> Learn more
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>All home services are available in {location.name}.</p>
        )}
      </section>

      {/* Benefits */}
      <section>
        <h2>Why Choose Us in {location.name}</h2>
        <ul className="benefits-list">
          {location.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <FAQSection faqs={location.faq} />

      {/* Related Locations */}
      {location.relatedLocations.length > 0 && (
        <section>
          <h2>Other Locations</h2>
          <RelatedLinks
            items={location.relatedLocations.map((l) => ({
              label: l.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/location/${l}`,
            }))}
          />
        </section>
      )}
    </main>
  );
}