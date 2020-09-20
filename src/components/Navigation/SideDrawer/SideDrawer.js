import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return(
        <Aux>
            <Backdrop
                toggle={props.toggleSideDrawer}
                clicked={props.setToggleSideDrawer}
            />
            <div className={[classes.SideDrawer, props.toggleSideDrawer ? classes.Open : classes.Close].join(' ')}>

            </div>
        </Aux>
    )
}

export default SideDrawer;
