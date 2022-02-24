import styled from 'styled-components'

export const LandingContainer= styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    *{scroll-behavior: smooth;}
`

export const LandingDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    color:white;
    width: 100%;
    max-width: 500px;
    height: 95%;
    overflow: auto;
    @media (max-width:600px) {
        max-width: 600px;
        height: 100%;
    }
    >div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap:10px;
        }
    background-color: #2a79c3;
    /* position: absolute;
    inset:0;
    margin:auto; */
    
`

export const LandingComponent=styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    >div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
`

export const Title = styled.span`
font-size: 40px;
`

export const Icon=styled.img`
width: 45%;
border-radius: 50px;
`

export const Button = styled.button`
padding:20px;
background-color: #5390c8;
width: 80%;
border:2px solid #246caf;
color:white;
border-radius: 25px;
transition: .7s;
font-size:30px;
font-weight: 600;
&:hover{
    background-color: #e0f6ff;
    color:#205f99;
}
`

export const Input = styled.input`
outline: none;
border:0;
background-color: #5099dd;
color: white;
transition: .5s;
width: 100%;
box-sizing: border-box;
font-size: 20px;
height: 50px;
overflow: hidden;
border-radius:15px;
padding:0 5% 0 16%;
font-weight: bold;
box-shadow: -2px 11px 19px 0px #000000b8;

&::placeholder{ 
    color:#92caff;
    }
&:focus{
    caret-color: #6b9eb1;
    background-color:#e0f6ff;
    color:#002e58;
    ::placeholder{ 
    color:#6b9eb1;
    }
}
`

export const InputArea = styled.div`
width: 80%;
height: 70%;
display: flex;
flex-direction: column;
background: white;
justify-content: flex-start;
padding:10px;
border-radius: 20px;
gap:10px;
div{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    >div{
        &::after{
            content: '';
            display: block;
            width: 3px;
            height: 100%;
            background-color: #e0f6ff;
            position: absolute;
            top:0;
            left:14%;
        }
    }
    img{
        object-fit: contain;
        position: absolute;
        height: 70%;
        width: 10%;
        -webkit-user-drag:none;
        inset:0;
        left:0;
        margin:auto auto auto 10px;
    }
}
`

export const Error=styled.span`
    color:#5177f6;
    font-weight: bold;
    font-size:15px;
    width: 100%;
    transition: .7s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MediaHolder=styled.span`
flex-direction: row;
height: fit-content;
overflow: hidden;
border-radius: 20px;
display: flex;
flex-direction: column;
gap:15px;
>span{
    gap:10px;
    display: flex;
    justify-content: center;
}
img{
    width: 30% ;
    object-fit: contain;
    border-radius: 10px;
}
`