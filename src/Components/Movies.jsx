import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

export default function Movies(){

    let movies=useSelector(state=>state.foundMovies)
    console.log(movies)

    // window.addEventListener('load', e=>{
    //     console.log('loaded')
    // })

    if(movies.length){
        return(
            <MoviesHolder id='holder'>
                {movies.map(movie=>
                
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        poster={movie.poster_path}
                        plot={movie.overview}
                        rating={movie.vote_average}
                    />
                
                )}
            </MoviesHolder>
        )
    }
    return <NoMovies>No se encontraron peliculas</NoMovies>
    
}

const MoviesHolder = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    padding:auto;
    transition: .5s;
`

const NoMovies = styled.div`
    margin:auto;
    margin-top: 10%;
    color:white;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
`