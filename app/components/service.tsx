import styles from "app/styles/components/service.module.css";
import { motion, useSpring } from "motion/react";

const cardScale = 1.04;

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
  const bgScale = useSpring(1, { bounce: 0 });

  const handleMouseEnter = () => {
    scale.set(cardScale);
    bgScale.set(1.2);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    bgScale.set(1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ scale }}
      className={`${styles.service} ${className ? className : ""}`}
    >
      <motion.div
        className={styles.img}
        style={{
          backgroundImage: `url(${imgSrc})`,
          scale: bgScale,
        }}
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
