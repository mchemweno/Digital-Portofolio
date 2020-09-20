import React from "react";
import classes from './Skill.module.css';

const Skill = (props) => {
    const skill = props.skill;
    return (
        <div className={classes.skill}>
            <p className={classes.skillP}>{skill.name}</p>
        </div>
    )

}

export default Skill;
