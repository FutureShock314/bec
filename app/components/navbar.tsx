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
        <NavLink to='https://www.cdserver1.com/clientportal2/login.aspx?ID=254'>Client Portal</NavLink>
      </div>
    </nav>
  )
}