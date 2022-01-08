import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

export default function Movies(){

    let movies=useSelector(state=>state.foundMovies)
    console.log(movies)

    
    
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
    } else return <NoMovies>No se encontraron peliculas</NoMovies>
            
}

const MoviesHolder = styled.div`
    display: flex;
    width:80%;
    height:100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding:auto;
`

const NoMovies = styled.div`
/* position: absolute;
right:0;
left:0; */
    margin:auto;
    margin-top: 10%;
    color:white;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
`