
import { faL } from '@fortawesome/free-solid-svg-icons'
import React from 'react' 
import { useState } from 'react'
import Home from './components/home'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import Player from './components/player'  
import Landing from './components/landing'
import EngPlayerPage from './components/EngPlayerPage'
import NavBar from './components/navBar'
import Loging from './components/loging'
import ContextProvider from './components/context'
import Register from './components/register'
import FilmPage from './components/filmPage'  
import Footer from './components/footer'
import Cart from './components/cart'




function App() {

 



  return (
    <BrowserRouter>

    <Routes>
     
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/player/:id' element={<Player/>} />
      <Route path='/player' element={<Player/>} />
      <Route path='/EngPlayerPage/:id' element={<EngPlayerPage/>} />
      <Route path='/Loging' element={<Loging/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/FilmPage/:filmName' element={<FilmPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
     
      

    </Routes>

    
      

    </BrowserRouter>
  )
}

export default App
