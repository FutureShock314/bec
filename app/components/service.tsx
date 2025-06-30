import styles from "app/styles/components/service.module.css";
import { motion, useSpring } from "motion/react";

const cardScale = 1.07;

interface Props {
  children?: React.ReactNode;
  className?: string;
  imgSrc?: string;
  header?: string;
}

export default function Service({
  children,
  className,
  imgSrc,
  header,
}: Props) {
  const scale = useSpring(1, { bounce: 0 });

  const handleMouseEnter = () => {
    scale.set(cardScale);
  };

  const handleMouseLeave = () => {
    scale.set(1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ scale }}
      className={`${styles.service} ${className ? className : ""}`}
    >
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className={styles.textContainer}>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
        <div className={styles.text}>
          <h1>{header ? header : "Header"}</h1>
          <p>{children ? children : "hello!"}</p>
        </div>
      </div>
    </motion.div>
  );
}
