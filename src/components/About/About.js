import React from "react";
import classes from './About.module.css'
import mark1 from '../../assets/Images/mark1.jpg';
import mark2 from '../../assets/Images/mark2.jpg';

const About = (props) => {
    return (
        <div className={classes.About}>
            <div className={classes.header}>
                <p className={classes.servicesP}>WHO I AM</p>
                <p className={classes.servicesH}><strong>ABOUT ME</strong></p>
            </div>
            <div className={classes.aboutContainer}>
                <div className={classes.mark}>
                    <img src={mark1} alt={"Mark"}/>
                </div>
                <div className={classes.mark} style={{
                    resize: 'contain'
                }}>
                    <img src={mark2} alt={"Mark"}/>
                </div>
                <div className={classes.aboutMe}>
                    <p className={classes.aboutMeP}>Freelance Web and Mobile App Developer based in Kenya. I enjoy everything from small business sites
                        to rich interactive web apps to native mobile apps.
                    </p>
                </div>

            </div>
        </div>
    )
};
export default About;
