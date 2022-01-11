import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Movies from './Components/Movies';
import DetailedMovie from './Components/DetailedMovie';

//tmdb key = 3d1c074dea2be22b3b559603f3bf6a82

//tmdb Read Access Token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDFjMDc0ZGVhMmJlMjJiM2I1NTk2MDNmM2JmNmE4MiIsInN1YiI6IjYxZDljYWE4NmRlYTNhMDBhNWYxZjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_84DXpY-zHUKYuPJja_JyRnIZDSvlmAEZWId2XYiB8

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{marginTop:'110px'}}></div>
      <Routes>
        <Route 
          path='/'
          element={<Movies/>}
        />
        <Route
          path='movies/:title/:id'
          element={<DetailedMovie/>}
        />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
