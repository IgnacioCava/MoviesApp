import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Movie({title,year, poster}){

    return(
        <div>
            {title}
            {year}
            <img src={poster}/>
        </div>
    )
}