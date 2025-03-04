import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Home from './Component/Home'
import Navbar from './Component/Navbar'

function App() {
 

  return (
    <>
    <Navbar/>
      <BrowserRouter>
  
     <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
