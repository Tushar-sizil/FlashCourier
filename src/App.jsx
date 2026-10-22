import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Tracking from "./pages/Tracking.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import { company } from "./data.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="back-color">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Services />} />
        </Routes>
      </main>
      <Footer />
      <a className="whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        WhatsApp
      </a>
      </div>
    </>
  );
}
