import JsonLd from "@/components/Jsonld";
import ContactForm from "@/components/ContactForm";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <JsonLd
        name="Home Services"
        description="Professional home services across Chandigarh, Panchkula & Mohali. Expert plumbing, electrical, cleaning & repair services."
        url={absoluteUrl("/")}
      />

      <main className="container page-content">
        {/* Hero */}
        <section className="hero">
          <p>Welcome</p>
          <h1>Find the home service you need</h1>
          <p>
            Professional, reliable and affordable home services across Chandigarh,
            Panchkula &amp; Mohali. Expert plumbing, electrical, cleaning &amp; repair services.
          </p>
          <a className="button" href="#services">Explore Services</a>
        </section>

        {/* Services */}
        <section id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <Link href={`/services/${service.slug}`}>
                  <span aria-hidden="true">→</span> Learn more
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Locations */}
        <section id="locations">
          <h2>Our Service Areas</h2>
          <div className="locations-grid">
            {locations.map((location) => (
              <article className="location-card" key={location.slug}>
                <h3 className="location-title">{location.name}</h3>
                <p className="location-description">{location.description}</p>
                <Link href={`/location/${location.slug}`}>
                  <span aria-hidden="true">→</span> Learn more
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
