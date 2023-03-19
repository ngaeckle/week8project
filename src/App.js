import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import CardSingle from './views/CardSingle';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const {user, logout} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <div id='hero'>
          <h1>Weather App</h1>
          {
            (user.loggedIn) ?
            <button id='logout' onClick={logout}>Logout</button>
            :
            <></>
          }
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CardSingle/:city' element={<CardSingle />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
