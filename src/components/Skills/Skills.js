import React from "react";
import classes from './Skills.module.css'
import Skill from "./Skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

const Skills = (props) => {
    const skills = [
        {
            name: 'ES6',
            link: 'http://es6-features.org'
        },
        {
            name: 'PYTHON',
            link: 'https://www.python.org/'
        },
        {
            name: 'REACT.js',
            link: 'https://reactjs.org/'
        },
        {
            name: 'REACT NATIVE',
            link: 'https://reactnative.dev/'
        },
        {
            name: 'DJANGO',
            link: 'https://www.djangoproject.com/'
        },
        {
            name: 'HTML',
            link: 'https://html.spec.whatwg.org/'
        }
    ];
    const history = useHistory();
    const navigate = () => {
        history.push({
            pathname: '/skills'
        });
    }
    return <div className={[props.className, classes.Skills].join(' ')}>
        <div>
            <p className={classes.ServicesP}>SKILLS</p>
        </div>
        <div className={classes.SkillDiv}>
            {skills.map((skill, index) => {
                return (
                    <Skill key={index} skill={skill}/>
                )
            })}
        </div>
        <div  className={classes.MoreDiv}>
            <p onClick={navigate} className={classes.MoreDivP}><FontAwesomeIcon icon={faArrowAltCircleRight} color={'#670C01'} size={"1x"}/>more</p>
        </div>
    </div>
};
export default Skills;
