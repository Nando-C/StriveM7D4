import { initialState } from "../store";

const jobReducer = (state = initialState.jobsListed, action) => {
    switch (action.type) {
        case 'FETCH_JOBS':
            return {
                ...state,
                jobsListed: [
                   
                ]
            }
        
        default:
            return state
    }
}

export default jobReducer