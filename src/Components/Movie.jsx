import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getDetails } from '../Actions'

export default function Movie({title,year,poster,id}){

    const dispatch=useDispatch()

    
    


    // const Detail = useSelector(state=>state.movieDetail)

    // // var Detail = {
    // //     runtime : json.Runtime,
    // //     genero: json.Genre,
    // //     plot: json.Plot,
    // //     actores: json.Actors,
    // //     rating: {
    // //         imbd: json.Ratings[0].Value,
    // //         RT: json.Ratings[1].Value,
    // //         Metacritic: json.Ratings[2].Value
    // //     }

    // // }

    // console.log(Detail)

    return(
        <MovieDisplay>
            
            <SmallDetail>
                {title}
                <p>Criptopingolarororororrorrororoororororoor</p>
            </SmallDetail>

            <img style={{height:'100%', width: '100%'}} src={poster}/>
            <Title>{title}</Title>

        </MovieDisplay>
    )
}

const SmallDetail = styled.div`
    position:absolute; 
    word-break:break-word;
    top:0;
    height:100%;
    width:100%;
    padding: 5px;
    box-sizing: border-box;
    backdrop-filter: blur(1px) brightness(60%);
    text-overflow: clip;
    background:linear-gradient(rgb(1,1,1,.7) 20%, transparent);
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
    content: 'xd';
`

const MovieDisplay = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 16%;
    margin:10px;
    border-radius: 15px;
    min-width: 150px;
    overflow: hidden;
    transition:.4s;
    
    > ${SmallDetail}{
            transition:.3s;
            visibility: hidden;
            opacity:0;
            color: white
        }
    &:hover{
        
        transform: scale(105%);
        > ${Title}{
            filter: blur(4px);
            transition:.4s;
        }
        > ${SmallDetail}{
            visibility: visible;
            opacity:1;
        }
    }
`