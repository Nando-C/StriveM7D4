import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import companyReducer from "../reducers/company";
import jobReducer from "../reducers/jobsListed";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    companies: {
        favourites: [],
    },
    jobsListed: {
        jobs: [],
        isLoading: true,
        error: false,
    },
}

const bigReducer = combineReducers({
    companies: companyReducer,
    jobsListed: jobReducer,
})

export const configureStore = createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))