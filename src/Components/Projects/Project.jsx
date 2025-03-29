import React from "react";
import styles from "./Project.module.css";
import Projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
    
    return <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                Projects.map((Projects,id) => {
                    return (
                        <ProjectCard key={id} Projects={Projects}/>
                    )
})
            }
        </div>
    </section>
}