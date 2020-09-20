import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import classes from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
    return (
        <div
            onClick={props.clicked}
            className={classes.DrawerToggle}
        >
            <FontAwesomeIcon icon={faBars} color={'black'} size={"2x"}/>
        </div>
    )
};

export default DrawerToggle;
