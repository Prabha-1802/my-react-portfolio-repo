import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img className={styles.aboutimg} src="assets/Hero/SittingWithLap.png" alt="SittingWithLap"/>
            <ul className={styles.aboutitems}>
                <li className={styles.aboutitem}>
                    <img className={styles.aboutimageicon} src="assets/Hero/Mouse.png" alt="Cursor"/>
                    <div className={styles.aboutitemtxt}>
                        <h3>
                            Front-End Developer
                        </h3>
                        <p>
                            I am a Front-End Developer with 2.5+ years of experience in React.Js
                        </p>
                    </div>
                    
                </li>
                <li className={styles.aboutitem}>
                    <img className={styles.aboutimageicon} src="assets/Hero/Desktop.png" alt="Backend"/>
                    <div className={styles.aboutitemtxt}>
                        <h3>
                            Back-End Developer
                        </h3>
                        <p>
                            I am a Back-End Developer with 2.5+ years of experience in React.Js
                        </p>
                    </div>
                    
                </li>
                <li className={styles.aboutitem}>
                    <img className={styles.aboutimageicon3} src="assets/Hero/UI.png" alt="UI/UX"/>
                    <div className={styles.aboutitemtxt}> 
                        <h3>
                            UI/UX Designer
                        </h3>
                        <p>
                            I am a UI/UX Developer with 2.5+ years of experience in React.Js
                        </p>
                    </div>
                    
                </li>
            </ul>
            </div>
        </section>
    )
}