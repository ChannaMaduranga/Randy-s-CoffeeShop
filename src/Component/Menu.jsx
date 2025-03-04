import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
function Menu() {
  return (
    <div>
        <div className='my-8 lg:my-24'>
        <h2 className='text-2xl lg:text-4xl font-semibold text-center'>VIEW OUR MENU</h2>
         <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />
        </div>
    </div>
  )
}

export default Menu