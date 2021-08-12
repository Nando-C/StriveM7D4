import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: [
                        ...state.companies.favourites, 
                        {
                            companyName: action.payload.company_name,
                            logo: action.payload.company_logo_url ? action.payload.company_logo_url : 'https://image.shutterstock.com/image-illustration/colourful-business-logo-company-name-260nw-1632621202.jpg',
                        }
                    ]
                }
            }

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: state.companies.favourites.filter((f, i) => i !== action.payload)
                }
            }
        
        default:
            return state
    }
}

export default mainReducer