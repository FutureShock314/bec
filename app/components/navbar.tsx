import { NavLink } from "react-router";

import styles from "app/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'><img className={styles.logo} src='app/img/logo.png' /></NavLink>
      <div className={styles.links}>
        <NavLink to='/quote'>Get a Quote</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/#fleet'>Our Fleet</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/client-portal'>Client Portal</NavLink>
      </div>
    </nav>
  )
}