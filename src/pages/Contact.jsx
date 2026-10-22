import { useEffect, useState } from "react";
import { company } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    document.title = "Contact Us | Flash Courier & Cargo";
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend yet: this opens the visitor's email client with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Website enquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="container section contact-grid">
        <div>
          <h2>Get in touch</h2>
          <p>{company.address}</p>
          <p>
            <a href={`tel:${company.phone.replace(/-/g, "")}`}>{company.phone}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input value={form.name} onChange={update("name")} required />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={update("email")} required />
          </label>
          <label>
            Phone
            <input value={form.phone} onChange={update("phone")} />
          </label>
          <label>
            Message
            <textarea rows="5" value={form.message} onChange={update("message")} required />
          </label>
          <button className="btn" type="submit">Send</button>
        </form>
      </section>
      <section className="map-section">
        <iframe
          title="Flash Courier & Cargo location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            "Naurang House, 21 Kasturba Gandhi Marg, Connaught Place, New Delhi"
          )}&output=embed`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
