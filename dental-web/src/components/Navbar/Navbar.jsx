import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Logo</a>
       <div className={styles.navLinks}>
        <ul className={styles.navItems}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
       </div>
    </nav>;
};