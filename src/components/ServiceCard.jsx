import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <div className="card-img">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link className="btn" to={`/services/${service.slug}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}
