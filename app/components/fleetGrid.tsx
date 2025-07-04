import Vehicle from "app/components/vehicle";

import styles from "app/styles/components/fleetGrid.module.css";

export default function FleetGrid() {
  return (
    <div className={styles.grid}>
      <Vehicle></Vehicle>
      <Vehicle></Vehicle>
      <Vehicle></Vehicle>
      <Vehicle></Vehicle>
      <Vehicle className={styles.sprinter}></Vehicle>
    </div>
  )
}