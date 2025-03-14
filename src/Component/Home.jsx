import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Gallery from './Gallery'
import Feedback from './Feedback'

function Home() {
  return (
    <div>
        <div>
            <Header/>
            <AboutUs/>
            <Menu/>
            <Gallery/>
            <Feedback/>
        </div>
    </div>
  )
}

export default Home