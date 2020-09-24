import React from "react";
import Skill from "../Skills/Skill/Skill";
import classes from  "./SkillsContainer.module.css";

const SkillsContainer = (props) => {
    const skills = props.skills;
    return (
        <div className={classes.SkillsContainer}>
            <div className={classes.TitleContainer}>
                <p><strong>More Skills</strong></p>
            </div>
            <div className={classes.SkillsWrapper}>
                {skills.map((skill, index) => {
                    return <Skill key={index} skill={skill}/>
                })}
            </div>
        </div>
    )
}

export default SkillsContainer;
