import React from "react";
import {useSelector} from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import classes from './Projects.module.css';
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

const Projects = (props) => {
    const projects = useSelector(state => state.projects.projects);
    const error = props.error;

    return (
        <div className={classes.Projects}>
            {projects ? <ProjectsContainer projects={projects}/> : error ? <div><p>{error}</p></div> : <Spinner/>}
        </div>
    )
};

export default Projects;
