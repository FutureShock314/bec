import styles from "app/styles/components/serviceGrid.module.css";
import { motion, useSpring } from "motion/react";
import Service from "app/components/service";

const cardScale = 1.07;

export default function ServiceGrid() {
  const scale = useSpring(1, { bounce: 0 });

  const handleMouseEnter = () => {
    scale.set(cardScale);
  };

  const handleMouseLeave = () => {
    scale.set(1);
  };

  return (
    <div className={styles.grid}>
      <Service
        className={`${styles.large}`}
        header="Airport Transfers"
        imgSrc="app/img/airport.png"
      >
        Enjoy seamless airport transfers with our luxury vehicles, ensuring
        timely arrivals and departures, making your travel experience
        stress-free. Whether your flight is early or unfortunately running late,
        you can rest easy knowing your pick up time has been amended
        accordingly.
      </Service>

      <Service header="Special Events" imgSrc="app/img/events.jpg">
        Make your special occasions unforgettable with our premium transport
        services, tailored to suit weddings, parties, and corporate events,
        ensuring you arrive in style and comfort.
      </Service>

      <Service header="Tours" imgSrc="app/img/tours.jpg">
        Explore the city or countryside with our bespoke tour services, offering
        comfortable and luxurious transport for sightseeing, day trips, and
        excursions, ensuring a memorable experience. Our knowledgeable drivers
        can also provide local insights and recommendations to enhance your
        journey.
      </Service>

      <Service
        className={`${styles.large}`}
        header="Corporate Transport"
        imgSrc="app/img/corporate.jpg"
      >
        Elevate your business travel with our corporate transport services,
        providing punctual and professional drivers, ensuring you arrive at your
        meetings and events on time and in style. We understand the importance
        of punctuality and professionalism in corporate transport, which is why
        we offer tailored services to meet your specific needs, whether it's
        airport transfers, client meetings, or corporate events.
      </Service>
    </div>
  );
}
