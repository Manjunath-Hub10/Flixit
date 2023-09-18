import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Flixit from './pages/Flixit';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<Flixit />}/>
      <Route exact path = "/login" element = {<Login />}/>
      <Route exact path = "/signup" element = {<Signup />}/>
      <Route exact path="/player" element={<Player/>} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/tv" element={<TVShows />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
