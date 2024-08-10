import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes, Route} from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import CreateMovie from './pages/CreateMovie'

function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="/movies/create" element={<CreateMovie/>}/>
    </Routes>
     
    </>
  )
}

export default App
