import React from "react";
import classes from "./ProjectsContainer.module.css"
import {useSelector} from "react-redux";
import Project from "../Projects/Project/Project";

const ProjectsContainer = (props) => {
    const projects = useSelector(state => state.projects.projects);
    return (
        <div className={classes.ProjectsContainer}>
            {projects.map((project, index) => {
                return <Project key={index} project={project}/>
            })}
        </div>
    )
}


export default ProjectsContainer;
