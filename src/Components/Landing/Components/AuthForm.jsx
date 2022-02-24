import {LandingComponent, LandingDiv, Title, Icon, Button, Input, InputArea, Error, MediaHolder} from '../styles.jsx'
import icon from '../../props/icon.png'
import user from '../../props/userph.png'
import email from '../../props/email.png'
import password from '../../props/password.png'
import google from'../../props/google.png'
import facebook from'../../props/facebook.png'
import { useEffect } from 'react'
import { useState } from 'react'

export default function AuthForm({state}){

    useEffect(()=>{
        let form=document.getElementById('AuthForm')
        form.style.scrollBehavior='auto'
        form.scrollTo({top:state==='login'?form.clientHeight:0})
        form.style.scrollBehavior='smooth'
    },[state])

    let [userForm, setForm] = useState({})

    let [errors, setErrors] = useState({})

    function validate(input){
        const { name, value } = input.target;

        let singupInputs=document.getElementsByClassName('signupInput')
        console.dir(singupInputs)
        if(Array.from(singupInputs).filter(e=>e.value==="").length===singupInputs.length) return setErrors({})

        if(!value) return setErrors({...errors, [name]:`Missing ${name}`})
        else setErrors({...errors, [name]:''})

        if(name==='username') value.length<5?setErrors({...errors, [name]:'Must have at least 5 characters'}):setForm({...userForm, [name]:value})

        if(name==='email'){
            !/\S+@\S+\.\S+/.test(value)?setErrors({...errors, [name]:'Invalid email'}):setForm({...userForm, [name]:value})
        }
        if(name==='password'){
            !/(?=.*\d).{8,}$/.test(value)?setErrors({...errors, [name]:'Must contain 8 characters & 1 number'}):setForm({...userForm, [name]:value})
              
        }

        console.log(errors)
    }

    return(
        <LandingDiv id='AuthForm' style={{flexDirection:'row'}}>
            <LandingComponent >
            <div style={{height:'100%', justifyContent: 'space-evenly'}}>
                <Title><strong>Sign Up</strong></Title>
                <InputArea>
                    <div>
                        <div>
                            <img src={user} alt='user'/>
                            <Input name='username' type='text' className='signupInput' placeholder='Username' onChange={validate}/>
                        </div>
                        
                        <Error style={{height:errors.username?'2rem':'0px'}}>{errors.username}</Error>
                    </div>
                    <div>
                        <div>
                            <img src={email} alt='user'/>
                            <Input name='email' type='email' className='signupInput' placeholder='Email' onChange={validate}/>
                        </div>
                        <Error style={{height:errors.email?'2rem':'0px'}}>{errors.email}</Error>
                    </div>
                    
                    <div>
                        <div>
                            <img src={password} alt='user'/>
                            <Input name='password' type='password' className='signupInput' placeholder='Password' onChange={validate}/>
                        </div>
                        <Error style={{height:errors.password?'2rem':'0px'}}>{errors.password}</Error>
                    </div>

                    <Button style={Object.values(errors)?.filter(e=>e==='').length===3?{width:'100%', height:'3rem',padding:'0px'}:{width:'100%', height:'0px', padding:'0px', border:0, pointerEvents:'none'}} onClick={()=>{console.log(userForm)}}>Create account</Button>
                    
                    <MediaHolder>
                        <div>
                        <hr style={{backgroundColor:'black', width:'100%'}}/>
                        <span style={{color:'grey', fontWeight:'bold'}}>or sign up with your social media</span>
                        </div>
                        <span>
                        <img src={google} alt='google'/>
                        <img src={facebook} alt='facebook'/>
                        </span>
                    </MediaHolder>
                    
                </InputArea>
            </div>
            </LandingComponent>
            <LandingComponent>
            <div>
                <div>
                    <Icon src={icon} alt='icon'/>
                    <Title>Movies<strong>App</strong></Title>
                </div>
                <div>
                    <Input type='text'/>
                    <Input type='password'/>
                </div>
            </div>
        </LandingComponent>
        </LandingDiv>
                

    )
    
}