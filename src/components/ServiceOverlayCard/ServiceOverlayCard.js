import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from './ServiceOverlayCard.module.css';
import Aux from "../../hoc/Aux/Aux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";


const ServiceOverlayCard = (props) => {
    const activeService = props.activeService;

    return (
        <Aux>
            <Backdrop
                toggle={props.toggleServiceCard}
                clicked={() => props.serviceCardToggleHandler(null)}
            ></Backdrop>
            {activeService &&
            <div
                className={[classes.ServiceOverlayCard, props.toggleServiceCard ? classes.Open : classes.Close].join(' ')}
                style={{
                    backgroundImage: `url(${activeService.image})`
                }}
            >
                <div className={classes.ServiceDiv}>
                        <div className={classes.CloseContainer}>
                            <p onClick={() => props.serviceCardToggleHandler(null)}><FontAwesomeIcon icon={faTimesCircle} color={'white'}/></p>
                        </div>
                    <p className={classes.TitleP}><strong>{activeService.title}</strong></p>
                    <p className={classes.DetailsP}>{activeService.details}</p>
                </div>
            </div>}
        </Aux>

    )
};

export default ServiceOverlayCard;
