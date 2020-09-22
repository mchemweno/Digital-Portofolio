import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import {useSelector} from "react-redux";
import SkillsContainer from "../../components/SkillsContainer/SkillsContainer";

const Skills = (props) => {
    const error = props.skillError;
    const skills = useSelector(state => state.skills.skills);
    return (
        <div>
            {skills ? <SkillsContainer skills={skills}/> : error ? <div><p>{error.message}</p></div> : <Spinner/>}
        </div>
    )
}

export default Skills;
