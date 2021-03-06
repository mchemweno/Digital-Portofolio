import React from "react";
import classes from  './ExpandingDiv.module.css';
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExpandingDiv = (props) => {
        return (
            <div className={[props.classname, classes.ExpandingDiv].join(' ')}>
                <div>
                    <p className={classes.Description}>
                        Mobile App Development <br/>Web Development
                    </p>
                </div>
                    <div className={classes.Line}></div>
                    <div
                        className={classes.CaretDiv}

                    >
                           <FontAwesomeIcon    onClick={props.scrollToAbout} icon={faCaretDown} color={'white'} size={"3x"}/>
                </div>
            </div>
        )
}


export default ExpandingDiv;
