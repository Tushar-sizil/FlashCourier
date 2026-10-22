import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { company, services } from "../data.js";
import Clients from "../components/Clients.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "Flash Courier & Cargo | Logistics Services in New Delhi India";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Courier, Cargo &amp; Logistics in New Delhi</h1>
          <p>{company.about}</p>
          <div className="hero-actions">
            <Link className="btn" to="/services">Our Services</Link>
            <Link className="btn btn-outline" to="/tracking">Track a Shipment</Link>
          </div>
        </div>
      </section>
      <Clients />
      <section className="container section">
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
