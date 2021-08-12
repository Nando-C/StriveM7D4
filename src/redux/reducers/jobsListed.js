import { initialState } from "../store";

const jobReducer = (state = initialState.jobsListed, action) => {
    switch (action.type) {
        case 'FETCH_JOBS':
            return {
                ...state,
                jobs: action.payload,
            }

        case 'FETCH_JOBS_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'FETCH_JOBS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}

export default jobReducer