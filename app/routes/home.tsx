import type { Route } from "./+types/home";
import { NavLink } from "react-router";

import Service from "app/components/service";

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
        {/* <div className={styles.serviceGrid}>
          <Service header="Airport Transfers" imgSrc="app/img/airport.png">
            Whether your flight is early or unfortunately running late, you
            can rest easy knowing your pick up time has been amended accordingly.
          </Service>
          <Service header="Corporate Travel" imgSrc="">
            We offer a dedicated priority service for corporate clients, ensuring
            reliable, punctual, and professional transport for all your business needs.
          </Service>
          <Service header="Special Events" imgSrc="">
            From weddings to sports games, we provide tailored services to ensure you
            arrive on time and in style, making your special occasions even more memorable.
          </Service>
          <Service header="Tours" imgSrc="">
            Explore the city with our guided tours, designed to showcase the best attractions
            and hidden gems, all while enjoying luxurious transport.
          </Service>
        </div> */}
      </div>
    </>
  );
}
