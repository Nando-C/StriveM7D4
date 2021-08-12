import { initialState } from "../store";

const companyReducer = (state = initialState.companies, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favourites: [
                    ...state.favourites,
                    {
                        companyName: action.payload.company_name,
                        logo: action.payload.company_logo_url ? action.payload.company_logo_url : 'https://image.shutterstock.com/image-illustration/colourful-business-logo-company-name-260nw-1632621202.jpg',
                    }
                ]
            }

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                favourites: state.favourites.filter((f, i) => i !== action.payload)
            }
        
        default:
            return state
    }
}

export default companyReducer