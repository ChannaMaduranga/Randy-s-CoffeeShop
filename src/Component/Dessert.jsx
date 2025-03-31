import React, { useState,useEffect } from 'react';
import coffeeCup from '../assets/Coffee_cup2.png';
import menu1 from '../assets/MENU/MENU1.png';
import menu2 from '../assets/MENU/MENU4.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Add fade effect styles

const breakfasts = [menu1, menu2];

function Dessert() {
 const [currentMenu, setCurrentMenu] = useState(breakfasts[0]);

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
     return (
         <div className='mb-16'> 
             <div className='mt-32 lg:mt-40'>
                 <h2 className='text-2xl lg:text-4xl font-semibold text-center' data-aos="fade-up">OUR BREAKFAST</h2>
                 <p className='text-sm mx-8 lg:text-xl text-center my-4' data-aos="fade-up">
                     Start your day right with a delicious and hearty breakfast at Randy Coffee Shop!
                 </p>
                 <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' data-aos="fade-up"/>
             </div>
 
             <Swiper
                 modules={[Autoplay, Pagination, EffectFade]}
                 autoplay={{ delay: 5000, disableOnInteraction: false }}
                 pagination={{ clickable: true }}
                 loop={true}
                 effect="fade" 
                 onSlideChange={(swiper) => setCurrentMenu(breakfasts[swiper.activeIndex])}
                 className="w-full h-full"
                 data-aos="fade"
             >
                 {breakfasts.map((menu, index) => (
                     <SwiperSlide key={index}>
                         <div className='w-[80%] lg:w-[50%] mx-auto pb-16'>
                             <img src={menu} alt={`Breakfast menu ${index + 1}`} />
                         </div>
                     </SwiperSlide>
                 ))}
             </Swiper>
         </div>
     );
 }
export default Dessert