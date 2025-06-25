interface Props {
  children?: React.ReactNode;
  className?: String;
  imgSrc?: String;
  header?: String;
  // body?: String;
}

import styles from "app/styles/service.module.css";
import { motion, useSpring, useTransform } from "motion/react";
import type { MouseEventHandler } from "react";

const cardRotation = 15;
const cardScale = 1.07;

export default function Service({ children, className, imgSrc, header, }: Props) {
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });

  const rotateX = useTransform(
    yPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const rotateY = useTransform(
    xPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);

    xPcnt.set(currentMouseX / containerWidth - 0.5);
    yPcnt.set(currentMouseY / containerHeight - 0.5);
  };

  const handleMouseEnter: MouseEventHandler = (e) => {
    scale.set(cardScale);
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    scale.set(1);
    xPcnt.set(0);
    yPcnt.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.service} ${className ? className : ""}`}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale,
      }}
    >
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${imgSrc ? imgSrc : "app/img/logo.png"})`,
        }}
      />

      <h1>{header ? header : "Header"}</h1>

      <p>{children ? children : "Body text would go here, but there is none."}</p>
    </motion.div>
  );
}
