import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Flash Courier & Cargo";
  }, []);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="container section about">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1664268308876-f12dc7779153?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Flash Courier & Cargo vehicle" />
        </div>

        <div className="about-text">
          <p>
            Established since 17 years ago, we are operational with government
            organization also through tender. We are MSME registered.
          </p>
          <p>
            Our Courier, Cargo and logistics services provide the transportation
            and delivery of goods, packages, mail and also involves various
            processes such as pick-up, transportation, storage, and delivery.
          </p>
          <p>
            Our Courier services typically handle small packages and documents
            for individuals or businesses and aim for quick delivery times. Cargo
            and Logistics, on the other hand, involves the planning and
            management of the flow of goods and products from the point of origin
            to the point of consumption.
          </p>
          <p>
            There are various modes of transportation used in our courier, Cargo
            and logistics services, including air, ground, and sea
            transportation. We use of GPS tracking and automation systems to
            improve the accuracy and efficiency of delivery.
          </p>
          <p>Benefits of our services :</p>
          <p>
            1. Reliability: These services use advanced technology and
            transportation systems to ensure that packages are delivered on time
            and in good condition. They also offer real-time tracking, allowing
            customers to monitor the progress of their delivery and receive
            updates on its location.
          </p>
          <p>
            2. Convenience: Customers can schedule pickups and deliveries at
            their convenience, and choose from a variety of delivery options,
            such as next-day delivery, express delivery, and same-day delivery.
          </p>
          <p>
            3. Value-added services: It includes insurance for packages, custom
            clearance for international deliveries, and special handling for
            fragile and oversized packages.
          </p>
        </div>
      </section>
    </>
  );
}