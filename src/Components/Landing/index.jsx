import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {LandingContainer, LandingDiv, Title, Icon, Button, LandingComponent} from './styles.jsx'
import { getDetails } from '../../Actions'
import { Link } from 'react-router-dom'
import icon from '../props/icon.png'
import AuthForm from './Components/AuthForm'
import { useState } from 'react'

export default function Landing(){

    const [state, setState]=useState('')

    useEffect(()=>{
        if(state!==''){
        let landingdiv=document.getElementById('landingdiv')
        landingdiv.scrollTo({left:landingdiv.clientWidth})}
    }, [state])
    
    return(
        <LandingContainer>
            <LandingDiv id='landingdiv'>
                <LandingComponent>
                <div>
                    <Icon src={icon} alt='icon'/>
                    <Title>Movies<strong>App</strong></Title>
                </div>
                <div>
                    <Button onClick={()=>setState('login')}>Log In</Button>
                    <Button onClick={()=>setState('signup')}>Sign Up</Button>
                </div>
                </LandingComponent>
                <AuthForm state={state}/>
            </LandingDiv>
        </LandingContainer>
    )
    
}

