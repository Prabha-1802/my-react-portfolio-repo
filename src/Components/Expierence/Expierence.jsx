import React from 'react';
import styles from "./Exp.module.css";
import skills from '../../data/skills.json';
import history from '../../data/History.json';


export const Expierence = () => {
    return (
       <section className={styles.container} id="expierence">
        <h2 className={styles.title}>Expierence</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill,id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                    <img className={styles.ImageSrc} src={skill.imageSrc} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>

                            </div>
                        )                    }
                        )
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyitem, id)=>{
                        return <li className={styles.historyItem} key={id}>
                            <img src="Skills/hcl1.png" alt={historyitem.organisation} />
                            <div className={styles.historyitemdtls}>
                                <h3>{`${historyitem.role},${historyitem.organisation}`}</h3>
                                <p>{`${historyitem.startDate}/${historyitem.endDate}`}</p>
                                <p>{`${historyitem.expierence}`}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
       </section>
    );
}