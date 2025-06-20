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
          <span className={styles.hl}>Premium</span> Transport For Your<br />
          Business and Personal Needs
        </h1>
        
        <div className={styles.gradientFill} />
      </div>
      
      <div className={`${styles.section} ${styles.fleet}`} id='fleet' style={{ backgroundColor: 'black' }}>
        <h1>Brunel Executive Cars</h1>
        <p>
          We are a dynamic taxi company with over a decade of experience of delivering nothing but
          high quality transfer service to clients of all walks of life. We serve all airports, stations,
          and local destinations. All our personnels are exceptionally trained, and our drivers are fully
          vetted to offer you world-class experience and utmost safety.
        </p>
      </div>
    </>
  )
}
