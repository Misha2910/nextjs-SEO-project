import { Service } from "@/types";
import Link from "next/link";
import FAQSection from "./FAQSection";
import RelatedLinks from "./RelatedLinks";

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <main className="container page-content">
      <nav aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <span>{service.name}</span>
      </nav>

      <section className="hero">
        <p>Service</p>
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <a className="button" href="#benefits">View Benefits</a>
      </section>

      <section id="benefits">
        <h2>Benefits</h2>
        <ul className="benefits-list">
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <FAQSection faqs={service.faq} />

      {service.relatedServices.length > 0 && (
        <section>
          <h2>Related Services</h2>
          <RelatedLinks
            items={service.relatedServices.map((s) => ({
              label: s,
              href: `/services/${s.toLowerCase()}`,
            }))}
          />
        </section>
      )}

      {service.relatedLocations.length > 0 && (
        <section>
          <h2>Available Locations</h2>
          <RelatedLinks
            items={service.relatedLocations.map((l) => ({
              label: l,
              href: `/location/${l.toLowerCase().replace(/\s+/g, "-")}`,
            }))}
          />
        </section>
      )}
    </main>
  );
}