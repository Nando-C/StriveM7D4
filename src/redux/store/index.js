import { createStore, combineReducers } from "redux";
import companyReducer from "../reducers/company";
import jobReducer from "../reducers/jobsListed";

export const initialState = {
    companies: {
        favourites: [],
    },
    jobsListed: {
        jobs: [],
    },
}

const bigReducer = combineReducers({
    companies: companyReducer,
    jobsListed: jobReducer,
})

export const configureStore = createStore(bigReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())