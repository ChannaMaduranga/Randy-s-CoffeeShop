import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Gallery from './Gallery'
import Feedback from './Feedback'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <div>
            <Header/>
            <AboutUs/>
            <Menu/>
            <Gallery/>
            <Feedback/>
            <Contact/>
        </div>
    </div>
  )
}

export default Home