import type { Route } from "./+types/home";
import { NavLink } from "react-router";
// import dotenv from 'dotenv';
// dotenv.config();

import ServiceGrid from "app/components/serviceGrid";
import FleetGrid from "app/components/fleetGrid";

import styles from "app/styles/routes/home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div
        className={styles.section}
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.hl}>Premium</span> Transport For Your
            <br />
            Business and Personal Needs
          </h1>

          <h2>
            Choose Luxury,
            <br />
            <NavLink to="/quote" className={styles.linkHL}>
              Get a Quote
            </NavLink>
          </h2>
        </div>

        <div className={styles.gradientFill} />
      </div>

      <div
        className={`${styles.section} ${styles.services}`}
        id="services"
        style={{ backgroundColor: "black" }}
      >
        <h1>Our Services</h1>
        <p>
          We are a dynamic taxi company with over a decade of experience of
          delivering nothing but high quality transfer service to clients of all
          walks of life. We serve all airports, stations, and local
          destinations. All our personnel is exceptionally trained, and our
          drivers are fully vetted to offer you world-class experience at the
          utmost safety.
        </p>
        <ServiceGrid />
      </div>
      <div
        className={`${styles.section} ${styles.fleet}`}
        id="fleet"
        style={{ backgroundColor: "black" }}
      >
        <h1>Our Fleet</h1>
        <p>
          Our fleet of vehicles is meticulously maintained and regularly
          serviced to ensure reliability and comfort. We offer a range of
          vehicles to suit your needs, from luxury sedans to spacious SUVs, all
          equipped with modern amenities to enhance your travel experience.
          Whether you need transport for a special event, corporate travel, or
          airport transfers, our vehicles are designed to provide the highest
          level of comfort and style. Our professional drivers are trained to
          provide exceptional service, ensuring that you arrive at your
          destination safely and on time. Experience the difference with our
          premium fleet, where luxury meets reliability.
        </p>
        <FleetGrid />
      </div>
    </>
  );
}
