import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchMovies } from "../Actions"
import { useSelector } from "react-redux";

export default function Search(){

    const dispatch = useDispatch()
    const [searchedTitle, Searched] = useState('')
    
    var f=useSelector(state=>state.foundMovies)
    console.log(f)

    return(
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault()
                dispatch(searchMovies(searchedTitle))
                Searched('')
            }}>
                <input type="text" value={searchedTitle} onChange={(title) => Searched(title.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}