import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
import Menu1 from '../assets/Menu1.png'
import Menu2 from '../assets/Menu2.png'
import Menu3 from '../assets/Menu3.png'

function Menu() {
  return (
    <div>
        <div className='my-8 lg:my-24'>
        <h2 className='text-2xl lg:text-4xl font-semibold text-center'>VIEW OUR MENU</h2>
         <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />

         <div className='grid  gap-8 lg:gap-4 md:grid-cols-3 md:mx-8 lg:w-[70%] lg:mx-auto'>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fff8f0]'>
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu1} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Breakfast</h3>
            </div>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fff8f0]'>
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu2} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Beverages</h3>
            </div>
            <div className='p-8 mx-16 md:mx-0 hover:bg-[#fff8f0]'>
                <img className='object-contain w-full h-24 lg:h-36 mx-auto' src={Menu3} alt='Menu Item 1' />
                <h3 className='text-lg lg:text-2xl font-semibold text-center'>Dessert</h3>
            </div>
           
           
  
         </div>
        </div>
    </div>
  )
}

export default Menu