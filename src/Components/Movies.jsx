import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

export default function Movies(){

    const movies=useSelector(state=>state.foundMovies)

    if(movies){
        return(
            <MoviesHolder>
                {movies.map(movie=>
                
                    <Movie
                        key={movie.imdbID}
                        id={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        poster={movie.Poster}
                    />
                
                
                )}
            </MoviesHolder>
        )
    }
}

const MoviesHolder = styled.div`
    display: flex;
    width:80%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding:auto;
`