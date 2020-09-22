import React from "react";
import classes from './Skills.module.css'
import Skill from "./Skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";

const Skills = (props) => {
    const skills = props.skills;
    const error = props.skillError;
    const history = useHistory();
    const navigate = () => {
        history.push({
            pathname: '/skills'
        });
    }
    return <div className={[props.className, classes.Skills].join(' ')}>
        <div>
            <p className={classes.ServicesP}>SKILLS</p>
        </div>
        <div className={classes.SkillDiv}>
            {
                skills ?
                        skills.slice(0,6).map((skill, index) => {
                            return <Skill key={index} skill={skill}/>
                        })
                    : error ? <div><p>{error.message}</p></div> : <div style={{ justifyContent: "center", alignContent: "center" }}><Spinner/></div>
            }
        </div>
        <div  className={classes.MoreDiv}>
            <p onClick={navigate} className={classes.MoreDivP}><FontAwesomeIcon icon={faArrowAltCircleRight} color={'#670C01'} size={"1x"}/>more</p>
        </div>
    </div>
};
export default Skills;
