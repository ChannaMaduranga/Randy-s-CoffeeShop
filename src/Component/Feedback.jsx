import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
import { Star } from "lucide-react";

const reviews = [
    {
        text: "Really good place with very friendly staff! They have chess and some board games you can play while waiting for the food. Their juices are very good and the food tasty! Would really recommend 😊👍",
        name: "AC Wic",
        rate: 5,
        customer: "Tourist"
    },
    {
        text: "This is hands down the best coffee shop in Bentota! The place is spotless, the staff is incredibly friendly, and the food and drinks are absolutely delicious. My personal favorite is the mango, passion fruit, and orange fusion – it’s a must-try!",
        name: "Shashindu Weerasekara",
        rate: 5,
        customer: "Local Guide"
    },
    {
        text: "Lovely coffee place aside of a busy road, but surprisingly feels very cozy and “quite”. The terrace is lovely and the people too! Plus the coffee tastes very good!!! WiFi available ☺️",
        name: "Ney Jung",
        rate: 5,
        customer: "Tourist"
    },
    {
        text: "The best food and coffee !!! Atmosphere is very nice and staff is helpful and friendly. There are also board games which is amazing. Waiter Dinusha was very nice , thanks a lot !! And prices are also good :) highly recommended",
        name: "Ana T",
        rate: 5,
        customer: "Tourist"
    },
    {
        text: "This is my first time and it was a lovely experience! Staff also good. reasonable price.  Peaceful clean environment, Silent place... I love interior of this restaurant and drinks are also pretty good! Highly recommended 🩶",
        name: "Shehan",
        rate: 5,
        customer: "Local Guide"
    },
    {
        text: `“Best Coffee in Town!”
“If you’re a coffee lover, you’ll love Randy’s! The flavors are incredible, and the baristas really know their craft. I had the best cappuccino here, paired with a delicious pastry. Can’t wait to return!”`,
        name: "ESCAPE TRAVELS",
        rate: 5,
        customer: "Local Guide"
    },
    {
        text: "Delicious! We had a sandwich and a lime juice both were so tasty would come again. If you’re looking for a little cafe to get a drink or some food I would recommend.",
        name: "Mat Jefferson",
        rate: 5,
        customer: "Tourist"
    },
    {
        text: "Had coffee last night here and all I can say their service is good as well as the coffee too🩷 worth of time to drop by here👌👍🏼",
        name: "May Lorraine",
        rate: 5,
        customer: "Tourist"
    },
    {
        text: "Excellent crafted cappuccino and mocha with coconut milk. The fresh passion fruit juice was exceptional. Lovely seating area to play a game of chess or watch the locals walk by.",
        name: "Raswinder Kaur",
        rate: 5,
        customer: "Tourist"
    },

];

const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length >= 2
        ? parts[0][0] + parts[1][0]
        : parts[0][0];
};


function Feedback() {
    return (
        <div className='my-12 lg:my-16'>
            <h2 className='text-xl lg:text-4xl font-semibold text-center text-[#af5811]'>Customer Reviews</h2>
            <h2 className='text-2xl lg:text-4xl text-[#3e3e3e] font-semibold text-center'>Over 100+ People trust us</h2>
            <p className='text-lg font-light text-center'>See what our satisfied customers are saying about us</p>

            <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />

            <div className='w-full h-auto p-12 mt-8 lg:mt-12 bg-[#171717] flex'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-[#272727] p-6 rounded-lg shadow-lg">
                            <div className="flex gap-1 text-yellow-400 mb-2">
                                {[...Array(review.rate)].map((_, i) => (
                                    <Star key={i} size={16} />
                                ))}
                            </div>
                            <div>
                                <p className="text-sm mb-4 text-white">{review.text}</p>

                                <div className='flex '>
                                    <div className='w-12 h-12 rounded-full bg-[#ffac70]'>
                                        <p className='w-full h-full justify-center flex items-center font-semibold'>{getInitials(review.name)}</p>
                                    </div>
                                    <div className='h-full items-center justify-center flex-col pl-4  my-auto'>
                                        <p className="font-bold text-white">{review.name}</p>
                                        <p className="text-xs text-gray-400">{review.customer}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Feedback