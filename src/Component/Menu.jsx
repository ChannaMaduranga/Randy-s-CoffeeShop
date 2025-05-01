import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
import Menu1 from '../assets/Menu1.png'
import Menu2 from '../assets/Menu2.png'
import Menu3 from '../assets/Menu3.png'
import { Navigate, useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate();
  return (
    <div id='menu'>
        <div className='my-16 lg:my-20'>
        <h2 className='text-xl lg:text-4xl font-semibold text-center' data-aos="fade-up">VIEW OUR MENU</h2>
         <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' data-aos="fade-up"/>

         <div className='grid  gap-8 lg:gap-4 md:grid-cols-3 md:mx-8 lg:w-[70%] lg:mx-auto'>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fbead7] cursor-pointer'data-aos="fade-up" onClick={()=>navigate('/menu/breakfast')} >
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu1} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Breakfast</h3>
            </div>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fbead7] cursor-pointer' data-aos="fade-up" onClick={()=>navigate('/menu/beverages')}>
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu2} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Beverages</h3>
            </div>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fbead7] cursor-pointer' data-aos="fade-up" onClick={()=>navigate('/menu/dessert')}>
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu3} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Dessert</h3>
            </div>
           
           
  
         </div>
        </div>
    </div>
  )
}

export default Menu