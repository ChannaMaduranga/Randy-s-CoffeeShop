import React from 'react'
import coffeeCup from '../assets/Coffee_cup2.png'
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";



function Contact() {
  return (
    <div className='lg:my-16' id='contact'>
      <div className='my-12 lg:my-16 '>

        <h2 className='text-2xl lg:text-4xl text-[#3e3e3e] font-semibold text-center'>Get In Touch</h2>
        <p className='text-lg font-light text-center'>Let’s talk over coffee – we’d love to hear from you!</p>
        <img className='object-contain w-full h-28 mx-auto mt-[-24px]' src={coffeeCup} alt='Coffee Leaves' />

        <div className='flex justify-center items-center gap-4 mt-8 border-2 w-[50%] md:w-[15%] lg:w-[20%] mx-auto p-4 rounded-4xl'>
          <span className=' lg:text-2xl font-semibold'>
            <MdOutlineLocalPhone />
          </span>
          <h3 className="  lg:text-xl font-medium text-center text-gray-800  ">  +94 76 045 1111</h3>
        </div>

        <div className='flex justify-center items-center gap-4 my-4'>
          <span className='text-lg lg:text-2xl font-semibold'>
            <MdOutlineMail />
          </span>
          <h3 className="text-lg lg:text-2xl font-light text-center text-gray-800  ">  info@randyscoffeehouse.com</h3>
        </div>

        <div className="flex space-x-4 justify-center mt-8 text-gray-800">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#fbead7] transition"
          >
            <FaFacebookF className=" text-lg" />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#fbead7] transition"
          >
            <FaTwitter className=" text-lg" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#fbead7] transition"
          >
            <FaInstagram className=" text-lg" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#fbead7] transition"
          >
            <FaLinkedinIn className=" text-lg" />
          </a>
        </div>







      </div>
      <div className='lg:w-[80%] lg:flex justify-center mx-auto'>
        <div className='lg:w-1/2 p-8'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.775026294566!2d79.9987623!3d6.4229452999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22f0005f6f581%3A0xb3b36512e0b07bed!2sRandy&#39;s%20Coffee!5e0!3m2!1sen!2slk!4v1742013610762!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>
        <div className='lg:ml-8 w-1/2 h-full my-auto '>
          <div className='w-[5%] bg-gray-400 h-full'>

          </div>
          <div className="max-w-md mx-auto p-6 ">
            <h2 className="lg:text-3xl font-bold text-gray-900 py-4">Opening Time</h2>

            {/* Working Days */}
            <div className="mt-4">
              <p className="lg:text-xl font-semibold text-gray-800">Working Days</p>
              <p className="text-gray-700 lg:text-lg">09:00AM – 09:00PM</p>
              <div className="border-t-2 border-dotted border-yellow-600 my-4"></div>
            </div>

            {/* Saturday */}
            <div>
              <p className="lg:text-xl font-semibold text-gray-800">Saturday</p>
              <p className="text-gray-700 lg:text-lg">09:00AM – 09:00PM</p>
              <div className="border-t-2 border-dotted border-yellow-600 my-4"></div>
            </div>

            {/* Sunday */}
            <div>
              <p className="lg:text-xl font-semibold text-gray-800">Sunday</p>
              <p className="text-gray-700 lg:text-lg">09:00AM – 09:00PM</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Contact