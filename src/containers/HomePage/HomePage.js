import React, {useRef} from "react";
import classes from './HomePage.module.css';
import ExpandingDiv from "../../components/ExpandingDiv/ExpandingDiv";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import { useSelector} from "react-redux";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);


const HomePage = (props) => {
    const error = props.error;
    const skillError = props.skillError;

    const aboutRef = useRef(null);

    const executeScroll = () => scrollToRef(aboutRef);

    const projects = useSelector(state => state.projects.projects);
    const skills = useSelector(state => state.skills.skills);

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
                <Skills
                    className={classes.Skills}
                    skillError={skillError}
                    skills={skills}
                ></Skills>
                <Footer
                    className={classes.Footer}></Footer>
            </div>
    )
};


export default HomePage;

