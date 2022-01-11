import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getDetails } from '../Actions'
import { Link } from 'react-router-dom'


export default function Movie({title,poster,id,rating}){
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getDetails(id))
    },[])

    const details = useSelector(state=>state.movieDetail)
    
    let thisDetail = details.filter(m=>m.id===id)
    thisDetail=thisDetail[0]

    if(thisDetail){
        return(
            
            <MovieDisplay>

                    <Poster src={`https://image.tmdb.org/t/p/w780/${poster}`} alt='poster'/>

                    <Link to={`/movies/${title.replaceAll(' ', '-')}/${id}`}>
                        <Detail>
                            <Title>{title}</Title>
                            <hr/>
                            <Plot>{thisDetail.overview}</Plot>
                            <p style={{color:'lightgrey'}}>{thisDetail.release_date.split('-')[0]}</p>
                            {rating?<Rating>IMDb: {rating}/10</Rating>:null}
                            {thisDetail.genres.map(e=>{
                                return <Genre key={id+e.name}>{e.name}</Genre>
                            })}
                        </Detail>
                    </Link>

                    <Runtime>{thisDetail.runtime} min</Runtime>
                
            </MovieDisplay>  
        )
    } else return null
}

const Plot = styled.p`
    line-height: 17px;
    height: fit-content;
    min-height: fit-content;
    max-height: 55%;
    &::-webkit-scrollbar{
        background-color: transparent;
        width: 5px;
    }
            
    &::-webkit-scrollbar-thumb{
        background-color: #5c5cdb;
        border-radius: 10px;
    }
`

const Rating = styled.p`
    background-color: gold;
    color: black;
    width: fit-content;
    padding: 0 5px 0 5px;
`
const Title = styled.span`
    font-size:20px;
`

const Genre = styled.span`
    background-color: #4b4b4b;
    border-radius:5px;
    margin-right:5px;
    padding: 0 5px 0 5px;
    border: 1px solid white;
`

const Runtime = styled.div`
    position: absolute;
    bottom:0;
    right:0;
    background-color:gold;
    padding-left: 5px;
    padding-right: 5px;
`

const Detail = styled.div`
    position: absolute;
    top:0;
    left:0;
    background: linear-gradient(rgb(1,1,1,.5), transparent);
    width: 100%;
    height: 100%;
    color:white;
    transition:.4s;
    opacity: 0;
    box-sizing: border-box;
    padding: 5px;
    font-size: 15px;
    text-align: left;
`

const Poster = styled.img`
    width: 100%;
    height: 100%;
    transition:.5s;
    
`

const MovieDisplay = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 18%;
    min-width: 150px;
    margin-bottom:1.5%;
    overflow: hidden;
    transition:.3s;
    position: relative;
    font-family: 'Poppins', sans-serif;
    &:hover {
        transform: scale(105%);
        ${Detail}{
            backdrop-filter:blur(2px) brightness(60%);
            opacity: 1;
        }
    }
`
// useEffect(()=>{
    //     let movie = document.getElementsByClassName('movie')
    //     let holder = document.getElementById('holder')

    //     for (var i = 0; i < movie.length; i++) {
    //         let a=movie[i]
    //         a.addEventListener('mouseenter', e=>{
    //             a.style.filter='brightness(60%)'
    //         }, false);
    //         a.addEventListener('mouseleave', e=>{
    //             a.style.filter='brightness(100%)'
    //         }, false);
    //     }
    // })