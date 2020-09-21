import React from "react";
import classes from "./Project.module.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Project = (props) => {
    const project = props.project;

    const navigate = () => {
        window.location = project.link;
    }
    return (
        <div className={classes.Project}
             onClick={navigate}
        >

            <div className={classes.HeaderContainer}
                 style={{
                     backgroundImage: `url(${project.image})`
                 }}
            >
                <div className={classes.Overlay}>
                    <div className={classes.GitContainer}>
                        <a href={project.link}><FontAwesomeIcon icon={faGithub} color={'black'}/></a>
                    </div>
                </div>
            </div>

            <div className={classes.DetailsContainer}>
                <div className={classes.Title}>
                    <p><strong>{project.name}</strong></p>
                </div>
            </div>
        </div>
    )
}


export default Project;
