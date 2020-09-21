import React from "react";
import classes from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faAt} from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {

    return <div className={[props.className, classes.Footer].join(' ')}>
        <p className={classes.GetInTouchP}>GET IN TOUCH</p>
        <p className={classes.WorkTogetherP}>LET'S WORK TOGETHER</p>
        <p className={classes.Icon}>
            <a href={"https://www.facebook.com/mbchemweno"}><FontAwesomeIcon icon={faFacebookF} color={'rgba(1, 92, 103, 1)'} /></a>
            <a href={"https://www.instagram.com/canary_._/"}><FontAwesomeIcon icon={faInstagram} color={'rgba(1, 92, 103, 1)'} /></a>
            <a href={"mailto:mchemweno27@gmail.com?subject=Let%20us%20work%20together."}><FontAwesomeIcon icon={faAt} color={'rgba(1, 92, 103, 1)'} /></a>
            <a href={"https://twitter.com/_canary69"}><FontAwesomeIcon icon={faTwitter} color={'rgba(1, 92, 103, 1)'}/></a>
            <a href={'https://wa.me/254726990002'}><FontAwesomeIcon icon={faWhatsapp} color={'rgba(1, 92, 103, 1)'}/></a>
        </p>
        <p className={classes.IncP}>Powered by CANARY&trade; and React.</p>
    </div>
};
export default Footer;
