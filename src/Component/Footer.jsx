import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"


function Footer() {
  return (
    <div>
        <footer className="bg-black text-white py-16 px-6 ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center text-center md:text-left ">
        
        <div className="flex flex-col items-center  justify-center  w-full ">
          <img src={logo} alt="Randy's Coffee Shop" className="w-28 lg:w-32" />
          
        </div>
        
        {/* Navigation Links */}
        <nav className="space-y-2 text-center text-[#e9e9e9] md:">
          <a href="/" className="block hover:text-[#fcb46b]">Home</a>
          <a href="/menu" className="block hover:text-[#fcb46b]">Menu</a>
          <a href="/about" className="block hover:text-[#fcb46b]">About</a>
          <a href="/contact" className="block hover:text-[#fcb46b]">Contact</a>
        </nav>
        
        {/* Social Media Links */}
        <div className="flex justify-center  space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-[#fcb46b]">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#fcb46b]">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#fcb46b]">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      
    </footer>
    <div className=" p-4 text-center bg-[#212121] text-white text-sm ">
        &copy; {new Date().getFullYear()} Randy's Coffee Shop. All right Reserved. <br /> <span className='text-[#fcb46b]'>Powerd by Channa Maduranga</span>
      </div>
    </div>
  )
}

export default Footer