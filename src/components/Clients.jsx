import { useState } from "react";
import { clients } from "../data.js";

function ClientLogo({ client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="client-item">
      {failed ? (
        <span className="client-name">{client.name}</span>
      ) : (
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Clients() {
  if (!clients || clients.length === 0) return null;

  return (
    <section className="clients">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <ClientLogo key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}