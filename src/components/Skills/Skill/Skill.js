import React from "react";
import classes from './Skill.module.css';

const Skill = (props) => {
    const skill = props.skill;
    return (
        <div className={classes.Skill}>
            <a href={skill.link} className={classes.SkillP}>{skill.name}</a>
        </div>
    )

}

export default Skill;
