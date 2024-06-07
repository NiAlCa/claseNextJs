import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
\import { ActiveLink } from "../active-link/ActiveLink";
import { HomeIcon } from '@primer/octicons-react';

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarLink} href="/">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className={styles.navbarContenedor}></div>

      {navItems.map((navItem) => (
      <ActiveLink  key={navItem.path} {...navItem}/>
      ))}
    </nav>
  );
};
