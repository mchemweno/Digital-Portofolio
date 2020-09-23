import React, {useRef, useState} from "react";
import classes from './HomePage.module.css';
import ExpandingDiv from "../../components/ExpandingDiv/ExpandingDiv";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import ServiceOverlayCard from "../../components/ServiceOverlayCard/ServiceOverlayCard";
import Aux from "../../hoc/Aux/Aux";
import {setService} from "../../store/actions/services";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);


const HomePage = (props) => {
    const error = props.error;
    const skillError = props.skillError
    const dispatch = useDispatch();

    const aboutRef = useRef(null);

    const executeScroll = () => scrollToRef(aboutRef);

    const [toggleServiceCard, setToggleServiceCard] = useState(false);

    const serviceCardToggleHandler = (service) => {
        setToggleServiceCard(prevState => !prevState);
        if(service) {
            dispatch(setService(service));
        } else {
            dispatch(setService(null));
        }
    }

    const activeService = useSelector(state => state.services.activeService);
    const projects = useSelector(state => state.projects.projects);
    const skills = useSelector(state => state.skills.skills);

    return (
        <Aux>
            <div className={classes.HomePage}>
                <ExpandingDiv
                    classname={classes.ExpandDiv}
                    scrollToAbout={executeScroll}
                />
                <Services
                    className={classes.Services}
                    serviceCardToggleHandler={serviceCardToggleHandler}
                />
                <Projects
                    className={classes.Projects}
                    error={error}
                    projects={projects}
                />
                <div ref={aboutRef}>
                    <About
                        className={classes.About}

                    ></About>
                </div>
                <Skills
                    className={classes.Skills}
                    skillError={skillError}
                    skills={skills}
                ></Skills>
                <Footer
                    className={classes.Footer}></Footer>
            </div>
            <ServiceOverlayCard
                toggleServiceCard={toggleServiceCard}
                serviceCardToggleHandler={serviceCardToggleHandler}
                activeService={activeService}
            />
        </Aux>
    )
};


export default HomePage;

