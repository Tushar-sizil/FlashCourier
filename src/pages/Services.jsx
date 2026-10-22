import { useEffect } from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data.js";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Flash Courier & Cargo";
  }, []);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Services</h1>
        </div>
      </section>
      <section className="container section">
        <div className="grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
