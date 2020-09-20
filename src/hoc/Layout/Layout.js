import React, {useState} from "react";
import Aux from "../Aux/Aux";
import classes from './Layout.module.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


const Layout = (props) => {
     const [toggleSideDrawer, setToggleSideDrawer] = useState(false);

    const sideDrawerToggledHandler = () => {
       setToggleSideDrawer(prevState => !prevState);
       console.log(toggleSideDrawer);
    }
    return (
        <Aux>
            <Toolbar
                clicked={sideDrawerToggledHandler}
            />
            <SideDrawer
                toggleSideDrawer={toggleSideDrawer}
                setToggleSideDrawer={sideDrawerToggledHandler}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}


export default Layout;
