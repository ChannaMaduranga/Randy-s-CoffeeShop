import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
import img1 from '../assets/4.jpg'
import img2 from '../assets/5.jpg'
import img3 from '../assets/6.jpg'
import img4 from '../assets/7.jpg'
import img5 from '../assets/8.jpg'
import img6 from '../assets/9.jpg'


function Gallery() {
    return (
        <div className='  bg-[#FFF0DC] py-8'>
            <div className='my-8 lg:w-[70%] mx-auto'>
                <h2 className='text-2xl lg:text-4xl font-semibold text-center'>EXPLORE RANDY'S</h2>
                <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />

                <div className='grid  md:grid-cols-3 my-8 gap-4 mx-4'>
                    <img className='object-contain w-full h-full mx-auto ' src={img1} alt='Coffee Leaves' />
                    <img className='object-contain w-full h-full mx-auto ' src={img2} alt='Coffee Leaves' />
                    <img className='object-contain w-full h-full mx-auto ' src={img3} alt='Coffee Leaves' />
                    <img className='object-contain w-full h-full mx-auto ' src={img4} alt='Coffee Leaves' />
                    <img className='object-contain w-full h-full mx-auto ' src={img5} alt='Coffee Leaves' />
                    <img className='object-contain w-full h-full mx-auto ' src={img6} alt='Coffee Leaves' />
                </div>
            </div>
        </div>
    )
}

export default Gallery