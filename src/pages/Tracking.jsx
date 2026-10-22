import { useEffect, useState } from "react";

export default function Tracking() {
  const [id, setId] = useState("");
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    document.title = "Tracking | Flash Courier & Cargo";
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect this to your tracking API.
    setSubmitted(id.trim());
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Tracking</h1>
        </div>
      </section>
      <section className="container section narrow">
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="docket">Docket / Consignment No.</label>
          <input
            id="docket"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your tracking number"
            required
          />
          <button className="btn" type="submit">Track</button>
        </form>
        {submitted && (
          <p className="notice">
            Tracking is not connected yet. Hook this form up to your tracking backend to show the status of{" "}
            <strong>{submitted}</strong>.
          </p>
        )}
      </section>
    </>
  );
}
