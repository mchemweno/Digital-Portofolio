import React from "react";
import classes from './Services.module.css';
import Service from "./Service/Service";
import img9 from '../../assets/Images/img9.jpg';
import img8 from '../../assets/Images/img8.jpg';
import img7 from '../../assets/Images/img7.jpg';

const Services = (props) => {
    const services = [
        {
            title: "Web Design",
            body: "Designing user interfaces in the most efficient way",
            image: img9

        },
        {
            title: "Fullstack Development",
            body: "Development of dynamic web apps using modern javascript technologies and APIs with the best backend technologies.",
            image: img8

        },
        {
            title: "Mobile App Development",
            body: "Developing efficient dynamic mobile apps for both android and IOS using React Native.",
            image: img7

        },
    ]
    return <div className={[props.className, classes.Services].join(' ')}>
        <div className={classes.Heading}>
            <p className={classes.ServicesP}>MY SERVICES</p>
            <p className={classes.ServicesH}><strong>WHAT I CAN DO</strong></p>
        </div>
        <div className={classes.ServiceDivContainer}>
            <div className={classes.ServiceDiv}>
                {services.map((service, index)=> {
                    return <Service key={index} service={service}/>
                })}
            </div>
        </div>
    </div>
};
export default Services;
