import {FETCH_SKILLS} from "../actions/skills";


const initialState = {
    skills: null
}


const skillsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SKILLS:
            return{
                ...state,
                skills: action.skills
            }
        default:
            return state;
    }
}


export default skillsReducer;
