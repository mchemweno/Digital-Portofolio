import React from "react";
import Skill from "../Skills/Skill/Skill";
import classes from  "./SkillsContainer.module.css";

const SkillsContainer = (props) => {
    const skills = props.skills;
    return (
        <div className={classes.SkillsContainer}>
            {skills.map((skill, index) => {
                return <Skill key={index} skill={skill}/>
            })}
        </div>
    )
}

export default SkillsContainer;
