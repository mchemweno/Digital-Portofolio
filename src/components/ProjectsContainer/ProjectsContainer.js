import React from "react";
import classes from "./ProjectsContainer.module.css"
import Project from "../Projects/Project/Project";

const ProjectsContainer = (props) => {
    const projects = props.projects;
    return (
        <div className={classes.ProjectsContainer}>
            <div className={classes.TitleContainer}>
                <p><strong>More Projects</strong></p>
            </div>
            <div className={classes.ProjectsWrapper}>
                {projects.map((project, index) => {
                    return <Project key={index} project={project}/>
                })}
            </div>
        </div>
    )
}


export default ProjectsContainer;
