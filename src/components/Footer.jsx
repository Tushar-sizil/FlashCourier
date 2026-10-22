import { Link } from "react-router-dom";
import { company, services } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{company.name}</h3>
          <p>{company.about}</p>
          <div className="footer-social">
            <a href={company.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={company.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
            <a href={company.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>

        <section>
          <h3>Our Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/tracking">Tracking</Link>
            </li>
          </ul>
        </section>

        <section>
          <h3>Contact Us</h3>
          <p>{company.address}</p>
          <p>
            <a href={`tel:${company.phone.replace(/-/g, "")}`}>{company.phone}</a>
          </p>
        </section>
      </div>
      <div className="copyright">
        <div className="container">
          Copyright © 2019-{new Date().getFullYear()} {company.name}
        </div>
      </div>
    </footer>
  );
}
