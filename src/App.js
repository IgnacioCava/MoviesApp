import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Movies from './Components/Movies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{marginTop:'110px'}}></div>
      
      <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
        <div style={{width:'200px', height:'100vh', backgroundColor:'red'}}></div>
        <Movies/>
      </div>
      
      
      {/* <div style={{height:'3000px'}}></div> */}
    </div>
  );
}

export default App;
