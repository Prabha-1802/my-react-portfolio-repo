import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.contanier}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Prabha Murugesan</h1>
                <p className={styles.desc}>I am full stack developer with 2.5+ years of expirence in Java and React.Js</p>
                <a className={styles.cntctdtls} href="mailto:banuprabha6464@gmail.com">Contact Me</a>
            </div>
            <img src="../public/Hero1.png" alt="My Image"className={styles.heroimg}/>
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
        </section>
    );
}
