import React from "react";
import classes from './Skill.module.css';

const Skill = (props) => {
    const skill = props.skill;
    return (
        <div className={classes.Skill}>
            <p className={classes.SkillP}>{skill.name}</p>
        </div>
    )

}

export default Skill;
