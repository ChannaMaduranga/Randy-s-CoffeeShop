import React, { useState,useEffect } from 'react';
import coffeeCup from '../assets/Coffee_cup2.png';
import menu1 from '../assets/MENU/MENU3.png';
import menu2 from '../assets/MENU/MENU2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Add fade effect styles

const beverages = [menu1,menu2];

function Beverages() {
 const [currentMenu, setCurrentMenu] = useState(beverages[0]);

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='mb-16 '> 
            <div className='mt-32 lg:mt-40'>
                <h2 className='text-2xl lg:text-4xl font-semibold text-center' data-aos="fade-up">OUR BEVERAGES</h2>
                <p className='text-sm  mx-12 lg:text-xl text-center my-4' data-aos="fade-up">
                Refresh your day with a delightful and energizing beverage at Randy Coffee Shop!
                </p>
                <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' data-aos="fade-up"/>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade" 
                onSlideChange={(swiper) => setCurrentMenu(beverages[swiper.activeIndex])}
                className="w-full h-full"
                data-aos="fade"
            >
                {beverages.map((menu, index) => (
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

export default Beverages