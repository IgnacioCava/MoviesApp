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
                
                <div style={{zIndex:0, position:'absolute', top:0, height:'100%', width:'100%', background:'#0707318b'}}></div>
                <Backdrop src={`https://image.tmdb.org/t/p/original/${thisDetail.backdrop_path}`} alt='backdrop'/>
                
                <Detail>
                    <img src={'https://image.tmdb.org/t/p/w300/'+thisDetail.poster_path} alt='poster'/>
                    
                    <DetailText>
                        <Title>{thisDetail.original_title}</Title>
                        <p style={{margin:0}}>{thisDetail.tagline}</p>
                        <p>IMDb: {thisDetail.vote_average}/10 | {thisDetail.runtime} min {thisDetail.release_date.split('-')[0]}</p>
                        <Overview>{thisDetail.overview}</Overview>
                        {thisDetail.genres.map(e=>{
                                        return <Genre key={id+e.name}>{e.name}</Genre>
                                    })}
                        
                        {thisDetail.production_companies.map(e=>{
                                        if(e.logo_path) return <img style={{width:'20%'}} src={'https://image.tmdb.org/t/p/original/'+e.logo_path} alt='logo' key={e.name}/>
                                        else return <span>{e.name}</span>
                                    })}
                        <a href={thisDetail.homepage}><p>{thisDetail.homepage}</p></a>
                        <Link to='/'>Back</Link>
                    </DetailText>
                </Detail>
            </DetailWrapper>
        )
    }

    return null
    
}

const Overview = styled.p`
color: #8da0bc;
`

const Genre = styled.span`
    background-color: #1c2e57;
    border-radius:5px;
    margin-right:5px;
    padding: 0 5px 0 5px;
    width: fit-content;
    line-height: 1.5rem;
    color: #89abb6;
`

const Title = styled.p`
    color: #c6c6d3;
    font-size:xx-large;
    font-weight: bolder;
    margin-bottom:0px;
    margin-top:0px;
`//

const DetailText = styled.div`
    margin-left:15px;
    display: flex;
    flex-direction: column;
    text-align:left;
`

const Detail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align:left;
    z-index: 2;
`

const DetailWrapper = styled.div`
    color:white;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
`

const Backdrop = styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    top:0;
    object-fit: cover;
    filter: brightness(90%);
    z-index: -1;
`