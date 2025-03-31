import React, { useEffect } from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Gallery from './Gallery'
import Feedback from './Feedback'
import Contact from './Contact'
import { FaArrowUp } from "react-icons/fa";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   // Scroll to top function
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <div>
        <div id='home'>
            <Header/>
            <AboutUs data-aos="fade-up"/>
            <Menu data-aos="fade-up"/>
            <Gallery/>
            <Feedback/>
            <Contact/>
        </div>
        <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#dac5a7] text-gray-700 p-3 rounded-full shadow-lg hover:opacity-80">
        <FaArrowUp size={16} />
      </button>
    </div>
  )
}

export default Home