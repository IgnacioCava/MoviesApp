import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getDetails } from '../Actions'

export default function Movie({title,year,poster,id}){

    const dispatch=useDispatch()
    
    if(document.getElementById('id')){
        console.log(document.getElementsByClassName('id'))
    }

    

    
    useEffect(()=>{
        dispatch(getDetails(id))
    },[])

    const details = useSelector(state=>state.movieDetail)
    const movies = useSelector(state=>state.foundMovies)

    console.log(details)

    let exactDetail= details.filter(d=>d.imdbID===id)[0]
    console.log(exactDetail)

    if(exactDetail)
        return(
            <MovieDisplay>
                
                <SmallDetail>
                    {title}
                    <p>{exactDetail.Actors}</p>
                    <Rating>IMDb: {exactDetail.imdbRating}</Rating>
                    <p>{exactDetail.Plot}</p>
                </SmallDetail>
                
                <img style={{height:'100%', width: '100%'}} src={poster} alt="poster"/>
                <Runtime style={{}}>{exactDetail.Runtime}</Runtime>
                <Title>
                    {title}
                    
                </Title>
                
    
            </MovieDisplay>
        )
    else return null
    
}

const Runtime = styled.span`
    background-color:yellow;
    color:black;
    position:absolute; 
    top:0;
    right:0;
    opacity:1;
    transition:.3s;
    visibility: visible;
`

const Rating = styled.span`
    background-color:yellow;
    color:black;
    
`

const SmallDetail = styled.div`
    position:absolute; 
    word-break:break-word;
    top:0;
    right:0;
    left:0;
    height:100%;
    width:100%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid black;
    backdrop-filter: blur(1px) brightness(60%);
    background:linear-gradient(rgb(1,1,1,.7) 20%, transparent);

    > p{
        margin:0;
        font-size:small;
    }
`

const Title = styled.h2`
    position: absolute;
    padding:5px;
    padding-top: 10px;
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    min-height: 15%;
    background:linear-gradient(transparent, black 20%);
    font-size: .875rem;
    font-weight: 500;
    color:white;
    margin:0;
    opacity:1;
    transition: .4s;
`

const MovieDisplay = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 16%;
    margin:10px;
    min-width: 150px;
    overflow: hidden;
    transition:.3s;
    > ${SmallDetail}{
            transition:.3s;
            visibility: hidden;
            opacity:0;
            color: white
        }
    &:hover{
        > ${Title}{
            filter: blur(1px);
            opacity: 0;
            visibility: hidden;
        }
        > ${SmallDetail}{
            visibility: visible;
            opacity:1;
        }
        > ${Runtime}{
            visibility: hidden;
            opacity:0;
        }
    }
`