export const addToFavouritesAction = (company) => ({
    type: 'ADD_TO_FAVOURITES',
    payload: company,
})

export const removeFromFavouritesAction = (index) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    payload: index,
})

export const fetchJobsAction = () => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(
                `https://remotive.io/api/remote-jobs?search=&limit=10`
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
                console.log(getState())
            } else {
                console.log('Something went wrong while fetching jobs')
                dispatch({
                    type: 'FETCH_JOBS_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}