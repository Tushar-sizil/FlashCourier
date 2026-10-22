import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../data.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/tracking", label: "Tracking" },
  { to: "/contact", label: "Contact Us" },
  { to: "/about", label: "About Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <a href={`tel:${company.phone.replace(/-/g, "")}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>GST IN: {company.gst}</span>
          </div>
          <div className="topbar-social">
            <a href={company.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={company.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
            <a href={company.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container navbar">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={company.logo} alt={company.name} />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
