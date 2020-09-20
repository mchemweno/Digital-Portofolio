import React from "react";
import classes from './Skills.module.css'
import Skill from "./Skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

const Skills = (props) => {
    const skills = [
        {
            name: 'ES6'
        },
        {
            name: 'PYTHON'
        },
        {
            name: 'REACT.js'
        },
        {
            name: 'REACT NATIVE'
        },
        {
            name: 'DJANGO'
        },
        {
            name: 'HTML'
        }
    ]
    return <div className={[props.className, classes.Skills].join(' ')}>
        <div>
            <p className={classes.servicesP}>SKILLS</p>
        </div>
        <div className={classes.skillDiv}>
            {skills.map((skill, index) => {
                return (
                    <Skill key={index} skill={skill}/>
                )
            })}
        </div>
        <div className={classes.moreDiv}>
            <p className={classes.moreDivP}><FontAwesomeIcon icon={faArrowAltCircleRight} color={'#670C01'} size={"1x"}/>more</p>
        </div>
    </div>
};
export default Skills;