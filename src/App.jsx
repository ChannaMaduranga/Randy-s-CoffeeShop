import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Breakfast from './Component/Breakfast'
import Beverages from './Component/Beverages'
import Dessert from './Component/Dessert'

import AOS from "aos";
import "aos/dist/aos.css"; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
 

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
  
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/menu/breakfast' element={<Breakfast/>}></Route>
        <Route path='/menu/beverages' element={<Beverages/>}></Route>
        <Route path='/menu/dessert' element={<Dessert/>}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
