import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Movie({title,year, poster}){

    return(
        <MovieDisplay>
            <p style={{margin:'auto'}}>{title}</p>
            
            {/*year*/}
            
            
            <img style={{height:'available', width: '100%'}} src={poster}/>
            
        </MovieDisplay>
    )
}

const MovieDisplay = styled.div`
display:flex;
flex-direction: column-reverse;
width: 15%;
margin:10px;
justify-content: flex-end;
min-width: 150px;
border:3px solid black;
border-radius: 15px;
overflow: hidden;
`