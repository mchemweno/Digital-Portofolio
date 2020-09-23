import React from "react";
import classes from './Service.module.css';

const Service = (props) => {
    const service = props.service;

    return (
        <div style={{
            backgroundImage: `url(${service.image})`
        }}
             className={classes.Service}
             onClick={() => props.serviceCardToggleHandler(service)}
        >
            <div className={classes.Overlay}>
                <div className={classes.DetailsContainer}>
                    <p className={classes.Title}><strong>{service.title}</strong></p>
                    <p className={classes.Body}>{service.body}</p>
                </div>
            </div>
        </div>
    )
}
export default Service;
