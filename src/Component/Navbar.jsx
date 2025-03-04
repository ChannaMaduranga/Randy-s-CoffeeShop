import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0   md:opacity-100 md:bg-transparent left-0 w-full z-50 text-white font-semibold  ${isOpen ? 'bg-black opacity-80' : 'bg-transparent'}`}>
            <div className="max-w-8xl mx-auto px-8 sm:px-6 md:px-64">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold ">
                        <img src={logo} alt="" className="w-16 md:w-24" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 font-outfit text-lg">
                        <a href="#home" className="hover:text-yellow-400">HOME</a>
                        <a href="#menu" className="hover:text-yellow-400">MENU</a>
                        <a href="#about" className="hover:text-yellow-400">ABOUT</a>
                        <a href="#contact" className="hover:text-yellow-400">CONTACT</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-[#dac5a7]">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden bg-brown-700 text-center overflow-hidden   text-[#dac5a7]"
            >
                <a href="#home" className="block hover:text-yellow-400 py-2">HOME</a>
                <a href="#menu" className="block hover:text-yellow-400 py-2">MENU</a>
                <a href="#about" className="block hover:text-yellow-400 py-2">ABOUT</a>
                <a href="#contact" className="block hover:text-yellow-400 py-2 pb-12">CONTACT</a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
