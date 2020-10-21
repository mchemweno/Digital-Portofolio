import React from "react";
import classes from './Projects.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Project from "./Project/Project";
import {useHistory} from 'react-router-dom';
import Spinner from "../../UI/Spinner/Spinner";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
    const projects = props.projects;
    const error = props.error;
    const history = useHistory();
    const navigate = () => {
        window.location = "https://github.com/mchemweno";
    }
    const navigate1 = () => {
        history.push({
            pathname: '/projects'
        })
    }
    return (
        <div className={classes.Projects}>
            <div>
                <p className={classes.Subtitle}>PROJECTS UNDERTAKEN</p>
                <p className={classes.Title}><strong>RECENT WORK</strong></p>
            </div>
            <div className={classes.ProjectDivContainer}>
                {
                    projects ?
                        <div className={classes.ProjectDiv}>
                            {projects.slice(0,4).map((project, index) => {
                                return <Project key={index} project={project}/>
                            })}
                        </div> : error ? <div><p>{error}</p></div> : <Spinner/>
                }
            </div>
            <div  className={classes.MoreDiv}>
                <p onClick={navigate1} className={classes.MoreDivP}><FontAwesomeIcon icon={faArrowAltCircleRight} color={'#670C01'} size={"1x"}/>more</p>
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
