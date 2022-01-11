import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getDetails } from '../Actions';

export default function DetailedMovie(){

    const dispatch=useDispatch()

    const {id}=useParams()
    console.log(Number(id))
    let details = useSelector(state=>state.movieDetail)
    let thisDetail = details.filter(m=>m.id===Number(id))//useParams devuelve el param en string
    thisDetail=thisDetail[0]
    console.log(thisDetail)

    if(!thisDetail){
        dispatch(getDetails(id))
        thisDetail = details.filter(m=>m.id===Number(id))
        thisDetail=thisDetail[0]
    }
    
    if(thisDetail){
        return (
            <DetailWrapper>
                
                <Backdrop src={`https://image.tmdb.org/t/p/original/${thisDetail.backdrop_path}`} alt='backdrop'/>
                <Detail>
                    <p>{thisDetail.original_title}</p>
                    <p>{thisDetail.tagline}</p>
                    <p>{thisDetail.overview}</p>
                    {thisDetail.genres.map(e=>{
                                    return <p key={id+e.name}>{e.name}</p>
                                })}
                    <p>IMDb: {thisDetail.vote_average}/10</p>
                    <a href={thisDetail.homepage}><p>{thisDetail.homepage}</p></a>
                    <Link to='/'>Back</Link>
                </Detail>
            </DetailWrapper>
        )
    }

    return null
    
}

const Detail = styled.div`
    margin-left:15px;
    display: flex;
    flex-direction: column;
    background-color:rgba(1,1,1,.8);
    max-width: 30%;
    text-align:left;
`

const DetailWrapper = styled.div`
    color:white;
    display: flex;
    height: 100%;
    width: 100%;
`

const Backdrop = styled.img`
position:absolute;
left:0;
top:0;
width: 100%;
height: 100vh;
object-fit: cover;
z-index: -1;
`