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
        return fetch("http://www.omdbapi.com/?apikey=5933eda1&s=" + movieTitle)
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
        return fetch("http://www.omdbapi.com/?apikey=5933eda1&i=" + id)//Busca por id, puedo cambiarlo más adelante. Ver documentación de OMDb
        .then(response => response.json())
        .then(json =>{
            dispatch({
                type: GET_DETAILS,
                payload: json
            })
        })
    }
}