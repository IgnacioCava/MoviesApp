export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const GET_DETAILS = 'GET_DETAILS'

export function addFavorite(payload){
    return{
        type: ADD_FAVORITE,
        payload
    }
}

export function removeFavorite(payload){
    return{
        type: REMOVE_FAVORITE,
        payload
    }
}

export function searchMovies(movieTitle){
    return function(dispatch){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3d1c074dea2be22b3b559603f3bf6a82&language=en-US&query=${movieTitle}&page=1&include_adult=true`)
        .then(response => response.json())
        .then(json =>{
            dispatch({
                type: SEARCH_MOVIES,
                payload: json
            })
        })
    }
}

export function getDetails(id){
    return function(dispatch){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d1c074dea2be22b3b559603f3bf6a82&language=en-US`)
        .then(response => response.json())
        .then(json =>{
            dispatch({
                type: GET_DETAILS,
                payload: json
            })
        })
    }
}