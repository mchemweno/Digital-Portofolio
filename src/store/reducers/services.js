import {SET_SERVICE} from "../actions/services";

const initialState = {
    activeService: null
}

const servicesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_SERVICE:
            return {
                ...state,
                activeService: action.service
            }
        default:
            return state;
    }
};

export default servicesReducer;
