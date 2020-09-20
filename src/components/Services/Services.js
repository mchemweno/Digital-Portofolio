import React from "react";
import classes from './Services.module.css';
import Service from "./Service/Service";
import img1 from '../../assets/Images/img1.jpg';
import img2 from '../../assets/Images/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';

const Services = (props) => {
    const services = [
        {
            title: "Web Design",
            body: "Designing user interfaces in the most efficient way",
            image: img1

        },
        {
            title: "Fullstack Development",
            body: "Development of dynamic web apps using modern javascript technologies and APIs with the best backend technologies.",
            image: img2

        },
        {
            title: "Mobile App Development",
            body: "Developing efficient dynamic mobile apps for both android and IOS using React Native.",
            image: img3

        },
    ]
    return <div className={[props.className, classes.Services].join(' ')}>
        <div className={classes.Heading}>
            <p className={classes.servicesP}>MY SERVICES</p>
            <p className={classes.servicesH}><strong>WHAT I CAN DO</strong></p>
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
