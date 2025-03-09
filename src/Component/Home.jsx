import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Gallery from './Gallery'

function Home() {
  return (
    <div>
        <div>
            <Header/>
            <AboutUs/>
            <Menu/>
            <Gallery/>
        </div>
    </div>
  )
}

export default Home