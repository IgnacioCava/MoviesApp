import { ADD_FAVORITE, REMOVE_FAVORITE, SEARCH_MOVIES, GET_DETAILS } from '../Actions';

const initialState = {
    favouriteMovies: [],
    foundMovies: [],
    movieDetail: []
};

export default function reducer(state=initialState, action){
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, favouriteMovies: state.favouriteMovies.concat(action.payload)}

        case REMOVE_FAVORITE:
            return {...state, favouriteMovies: state.favouriteMovies.filter(movie=>movie.id!==action.payload)}

        case SEARCH_MOVIES:
            return {...state, foundMovies: action.payload.Search}

        case GET_DETAILS:
            return {...state, movieDetail: state.movieDetail.concat(action.payload)}
    
        default:
            return state
    }
}