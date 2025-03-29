import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out to me!!!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="assets/Contact/email.png" alt="Email Icon" />
                <a href="mailto:banuprabha6464@gmail.com">banuprabha6464@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="assets/Contact/linkedin.png" alt="Linkedin Icon" />
                <a href="- https://www.linkedin.com/in/prabha-m-219351218">LinkedIn.com</a>
            </li>
            <li className={styles.link}>
                <img src="assets/Contact/github.png" alt="Github Icon" />
                <a href="https://github.com/Prabha-1802/">Github.com/Prabha</a>
            </li>
        </ul>
    </footer>;
}