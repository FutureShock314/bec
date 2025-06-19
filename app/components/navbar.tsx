import { NavLink } from "react-router";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src='app/img/logo.png' />
      <div className={styles.links}>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/quote'>Get a Quote</NavLink>
      </div>
    </nav>
  )
}