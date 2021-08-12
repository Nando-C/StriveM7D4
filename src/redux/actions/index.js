export const addToFavouritesAction = (company) => ({
    type: 'ADD_TO_FAVOURITES',
    payload: company,
})

export const removeFromFavouritesAction = (index) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    payload: index,
})

export const fetchJobsAction = (query = "search=&limit=10") => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(
                `https://remotive.io/api/remote-jobs?${query}`
            )
            if (response.ok) {
                let results = await response.json()
                dispatch({
                    type: 'FETCH_JOBS',
                    payload: results.jobs,
                })
                dispatch({
                    type: 'FETCH_JOBS_ERROR',
                    payload: false,
                })
                dispatch({
                    type: 'FETCH_JOBS_LOADING',
                    payload: false,
                })
                console.log(getState())
            } else {
                console.log('Something went wrong while fetching jobs')
                dispatch({
                    type: 'FETCH_JOBS_ERROR',
                    payload: true,
                })
                dispatch({
                    type: 'FETCH_JOBS_LOADING',
                    payload: false,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}