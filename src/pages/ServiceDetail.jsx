import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    document.title = `${service ? service.title : "Service"} | Flash Courier & Cargo`;
  }, [service]);

  if (!service) {
    return (
      <section className="container section">
        <h1>Service not found</h1>
        <Link className="btn" to="/services">Back to Services</Link>
      </section>
    );
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>{service.title}</h1>
        </div>
      </section>
      <section className="container section detail">
        <img src={service.detail_image} alt={service.title} />
        <div>
          <p style={{ whiteSpace: "pre-line", fontFamily: '"Barlow", sans-serif' }}>{service.detail_summary}</p>
          {/* Add the full service description here. */}
          <Link className="btn" to="/contact">Contact Now</Link>
        </div>
      </section>
      {service.miniServices?.length > 1 && (
        <section className="container section">
          <h2 className="section-title">{service.title}</h2>
          <div className="grid">
            {service.miniServices.map((m) => (
              <article key={m.title} className="mini-card">
                <img src={m.image} alt={m.title} />
                <div className="mini-body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <Link className="btn" to={m.link}>Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}{service.miniServices?.length === 1 && (
        <section className="container section">
          <h2 className="section-title">{service.title}</h2>
          <div className="mini-grid">
            {service.miniServices.map((m) => (
              <article key={m.title} className="mini-card">
                <img src={m.image} alt={m.title} />
                <div className="mini-body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <Link className="btn" to={m.link}>Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
