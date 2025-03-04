import React from 'react'
import coffeeImg from '../assets/Coffee_leaves.png'
import coffeeCup from '../assets/Coffee_cup2.png'
import coffee from '../assets/coffee.jpg'

function AboutUs() {
    return (
        <div className='my-8 lg:my-24'>
            <div className='justify-center items-center flex flex-col'>
                <img className='object-contain w-full h-16 mx-auto' src={coffeeImg} alt='Coffee Leaves' />
                <h2 className='text-2xl lg:text-4xl font-semibold text-center'>ABOUT <br></br> RANDY'S COFFEE HOUSE</h2>
                <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />
            </div>
            <div className='w-[%] mx-auto'>
                <p className='text-lg lg:text-base lg:w-[60%] lg:mx-auto text-center mt-8'>
                    Randy's Coffee House is a family-owned and operated establishment located in Bentota, specializing in crafting the perfect cup of coffee. Our team of highly skilled baristas, passionate about creating memorable moments, works tirelessly to bring you the finest coffee experience.
                </p>

                <p className='text-lg lg:text-base lg:w-[60%] lg:mx-auto text-center mt-8'>
                    Come join us on this journey of discovery and experience the magic of Randy's Coffee House!
                </p>
            </div>
            <div className=' bg-[#FFF0DC] flex flex-col lg:mx-auto my-8 lg:my-16 pb-8 lg:flex-row-reverse'>
                <div className='w-full  p-12 lg:pl-0 '>
                    <img className='object-contain w-full lg:h-[40vh] mx-auto ' src={coffee} alt='Coffee' />

                </div>
                <div className='w-[80%] lg:w-full lg:pl-[15%] justify-center flex flex-col items-left mx-auto '>
                    <h3 className='font-semibold text-2xl lg:text-4xl pb-4'>
                        OUR HISTORY
                    </h3>
                    <p className='text-lg font-light text-justify'>
                    Randy's Coffee House was founded in 2020 by a family of passionate coffee enthusiasts. As the first family-owned coffee shop in Bentota, they dedicated their lives to the art of coffee brewing, creating a warm and inviting space for the community to gather and enjoy.
                    </p>
                    <p className='text-lg font-light text-justify my-8'>
                    We take pride in serving the finest coffee, alongside a delightful selection of beverages, desserts, and light bites to satisfy every craving. Whether you're looking for a rich espresso, a refreshing iced latte, or a delicious pastry to pair with your drink, we have something special for everyone. At Randy’s Coffee House, every cup is crafted with care, ensuring a memorable experience with each visit.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default AboutUs