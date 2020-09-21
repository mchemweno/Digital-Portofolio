import React, {useCallback, useEffect, useRef, useState} from "react";
import classes from './HomePage.module.css';
import ExpandingDiv from "../../components/ExpandingDiv/ExpandingDiv";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../../store/actions/projects";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const HomePage = (props) => {
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const aboutRef = useRef(null);

    const executeScroll = () => scrollToRef(aboutRef);

    const projects = useSelector(state => state.projects.projects);
    const fetchProjectsHandler = useCallback(async () => {
        await sleep(2000);
        try {
            await dispatch(fetchProjects());
        } catch (err) {
            return err;
        }
    }, [dispatch]);
    useEffect(() => {
        fetchProjectsHandler().catch(err => setError(err.message));
        console.log('haha');
    }, [fetchProjectsHandler])
    return (
            <div className={classes.HomePage}>
                <ExpandingDiv
                    classname={classes.ExpandDiv}
                    scrollToAbout={executeScroll}
                />
                <Services className={classes.Services}/>
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
                <Skills className={classes.Skills}></Skills>
                <Footer
                    className={classes.Footer}></Footer>
            </div>
    )
};


export default HomePage;

