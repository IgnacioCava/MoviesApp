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
left:10px;
right:10px;
top:0;
height: 50px;
background-color: red;
`