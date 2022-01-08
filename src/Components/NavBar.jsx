import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search';
import styled from 'styled-components'
//import Logo from '../../logoHenry.png'

export default function NavBar(){
    return(
        <Header>
            <div>
                LOGO
            </div>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Placeholder</Link>
                <Link to='/'>Placeholder</Link>
                <Link to='/'>Placeholder</Link>
            </nav>

            <SearchBar/>

        </Header>
    )
}

const Header = styled.header`
position: fixed;
display: flex;
justify-content: space-around;
align-items: center;
left:0;
right:0;
top:0;
height: 100px;
background-color: rgb(20,26,50);
z-index: 2;
color:white
`