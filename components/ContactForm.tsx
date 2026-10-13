"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form" style={{ alignItems: "center", textAlign: "center" }}>
        <p style={{ fontSize: "2.5rem" }}>✅</p>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3 style={{ color: "var(--clr-white)", marginBottom: "0.25rem" }}>Get in Touch</h3>
      <p style={{ marginBottom: "0.5rem", fontSize: "0.88rem" }}>
        Fill in the form and our team will contact you shortly.
      </p>

      <div className="form-group">
        <label htmlFor="cf-name">Full Name</label>
        <input id="cf-name" type="text" name="name" placeholder="enter you name" required />
      </div>

      <div className="form-group">
        <label htmlFor="cf-email">Email Address</label>
        <input id="cf-email" type="email" name="email" placeholder="abc@example.com" required />
      </div>

      <div className="form-group">
        <label htmlFor="cf-phone">Phone Number</label>
        <input id="cf-phone" type="tel" name="phone" placeholder="+91123456789" />
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Describe the service you need..."
          required
        />
      </div>

      <button type="submit" className="button">
        Send Message →
      </button>
    </form>
  );
}
