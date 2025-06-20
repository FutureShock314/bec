import type { Route } from "./+types/home";
import { Link } from "react-router";

import styles from "app/styles/home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className={styles.section} style={{ backgroundColor: 'var(--bg-col)' }}>
        <h1 className={styles.title}>
          <span className={styles.hl}>Premium </span>
          Transport For Your Business and Personal Needs
        </h1>
      </div>
      
      <div className={styles.section} style={{ backgroundColor: 'black' }} />
    </>
  )
}
