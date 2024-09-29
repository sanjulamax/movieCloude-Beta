
import { faL } from '@fortawesome/free-solid-svg-icons'
import React from 'react' 
import { useState } from 'react'
import Home from './components/home'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import Player from './components/player'  
import Landing from './components/landing'
import EngPlayerPage from './components/engPlayerPage'




function App() {

 



  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/player/:id' element={<Player/>} />
      <Route path='/player' element={<Player/>} />
      <Route path='/EngPlayerPage/:id' element={<EngPlayerPage/>} />

    </Routes>

    
      

    </BrowserRouter>
  )
}

export default App
