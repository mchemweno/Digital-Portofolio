import React from "react";
import classes from './Projects.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Project from "./Project/Project";
import Spinner from "../../UI/Spinner/Spinner";

const Projects = (props) => {
    const projects = props.projects;
    const error = props.error;
    const navigate = () => {
        window.location = "https://github.com/mchemweno";
    }
    return (
        <div className={classes.Projects}>
            <div>
                <p className={classes.Subtitle}>MY PROJECTS</p>
                <p className={classes.Title}><strong>RECENT WORK</strong></p>
            </div>
            <div className={classes.ProjectDivContainer}>
                {
                    projects ?
                        <div className={classes.ProjectDiv}>
                            {projects.splice(0, 5).map((project, index) => {
                                return <Project key={index} project={project}/>
                            })}
                        </div> : error ? <div><p>{error.message}</p></div> : <Spinner/>
                }
            </div>
            <div className={classes.GithubContainer}
                 onClick={navigate}
            >
                <p onClick={navigate}
                ><FontAwesomeIcon icon={faGithub} color={'white'}/>GitHub
                </p>
            </div>

        </div>)
};
export default Projects;
