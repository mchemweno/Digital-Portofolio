import React from "react";
import classes from './Toolbar.module.css';
import Logo from "../../../UI/Logo/Logo";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
                <Logo/>
        </header>
    )
}

export default Toolbar;
