import {FETCH_PROJECTS} from "../actions/projects";

const initialState = {
    projects: null
}


const projectsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            return{
                ...state,
                projects: action.projects
            }
        default:
            return state;
    }
}


export default projectsReducer;
