import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
       <nav className={styles.navbar}>
        <a className={styles.title} href="/">Welcome to My Portfolio!</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} alt="menu-button" src={menuOpen ? "close.png" : "menu.png"} onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#expierence">Expierence</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
       </nav>
    );
    }