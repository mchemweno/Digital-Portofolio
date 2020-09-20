import React from "react";
import classes from './Toolbar.module.css';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../UI/Logo/Logo";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
                <Logo/>
        <DrawerToggle clicked={props.clicked}/>
        </header>
    )
}

export default Toolbar;
