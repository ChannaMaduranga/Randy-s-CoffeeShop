import React, { useState } from 'react';
import coffeeCup from '../assets/Coffee_cup2.png';
import { IoClose } from "react-icons/io5";
import img1 from '../assets/4.jpg';
import img2 from '../assets/5.jpg';
import img3 from '../assets/6.jpg';
import img4 from '../assets/7.jpg';
import img5 from '../assets/8.jpg';
import img6 from '../assets/9.jpg';

const images = [img1, img2, img3, img4, img5, img6];

function Gallery() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (images) => {
        setSelectedImage(images);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'overlay') {
            handleClose();
        }
    };

    return (
        <div className='bg-[#FFF0DC] py-8 relative'>
            <div className='my-8 lg:w-[70%] mx-auto'>
                <h2 className='text-2xl lg:text-4xl font-semibold text-center' data-aos="fade-up">
                    EXPLORE RANDY'S
                </h2>
                <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Cup' data-aos="fade-up" />

                <div className='grid md:grid-cols-3 my-8 gap-4 mx-4'>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            className='object-contain w-full h-full mx-auto cursor-pointer'
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            data-aos="fade-up"
                            onClick={() => handleImageClick(img)}
                        />
                    ))}
                </div>
            </div>

            {/* Popup Overlay */}
            {selectedImage && (
                <div
                    id="overlay"
                    onClick={handleOutsideClick}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex items-center justify-center z-50"
                >
                    <div className="relative w-auto m-32">
                        <img src={selectedImage} className="max-w-[350px] max-h-[500px] md:max-w-[600px] md:max-h-[500px] lg:max-w-[700px] lg:max-h-[600px] object-cover rounded-md" />

                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
                        >
                            <IoClose className='' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
