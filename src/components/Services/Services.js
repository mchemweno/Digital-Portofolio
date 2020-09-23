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
            image: img9,
            details: "My goals are to focus on user interfaces and design in order to display your message in the most efficient and good looking way. I design and develop from scratch high-quality user-interfaces to promote your business ideas using the latest technologies"

        },
        {
            title: "Fullstack Development",
            body: "Development of dynamic web apps using modern javascript technologies and APIs with the best backend technologies.",
            image: img8,
            details: "I develop and design fullstack dynamic web apps. This is done by use of the latest frontend and backend technologies yielding very efficient and secure APIs as well as a beautiful frontend design."

        },
        {
            title: "Mobile App Development",
            body: "Developing efficient dynamic mobile apps for both android and IOS using React Native.",
            image: img7,
            details: "Development of dynamic and efficient mobile apps for both IOS and Android. Mainly done by a framework for building native apps called React Native. This ensures availability of your app to a large proportion of users. "

        },
    ]
    return <div className={[props.className, classes.Services].join(' ')}>
        <div className={classes.Heading}>
            <p className={classes.ServicesP}>MY SERVICES</p>
            <p className={classes.ServicesH}><strong>WHAT I CAN DO</strong></p>
        </div>
        <div className={classes.ServiceDivContainer}>
            <div className={classes.ServiceDiv}>
                {services.map((service, index) => {
                    return <Service  serviceCardToggleHandler={props.serviceCardToggleHandler} key={index} service={service}/>
                })}
            </div>
        </div>
    </div>
};
export default Services;
