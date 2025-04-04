import React from "react";
import styles from "./ProjectCard.module.css";
export const ProjectCard = ({Projects:{title,imageSrc, description,skills,demo,source}}) => {
    
    return (
    <div className={styles.container}>
    <img className={styles.image} src="Projects/coding.jpg" alt={`Image of ${title}`} />
<h3 className={styles.title}>{title}</h3>
<p className={styles.desc}>{description}</p>
<ul className={styles.skills}>
    {
        skills.map((skill,id)=>{
            return(
            <li className={styles.skill} key={id}>{skill}</li>
            );
        })
    }
</ul>
<div className={styles.links}>
    <a className={styles.link} href={demo}>Demo</a>
    <a className={styles.link} href={source}>Source</a>
</div>
</div>
    )
}