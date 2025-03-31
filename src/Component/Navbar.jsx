import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Get the current route

    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 || location.pathname !== "/") {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]); // ✅

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 text-white font-semibold transition-all duration-300 
                ${isOpen ? "bg-black opacity-90" : isScrolled ? "bg-black opacity-95" : "bg-transparent"}`}
        >
            <div className="w-[80%] lg:w-[70%] mx-auto">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                        <img src={logo} alt="Logo" className="w-16 md:w-24" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 font-outfit text-sm">
                        <Link to="home" smooth={true} duration={500} className="hover:text-[#fcb46b] cursor-pointer">HOME</Link>
                        <Link to="about" smooth={true} duration={500} className="hover:text-[#fcb46b] cursor-pointer">ABOUT</Link>
                        <Link to="menu" smooth={true} duration={500} className="hover:text-[#fcb46b] cursor-pointer">MENU</Link>
                        <Link to="contact" smooth={true} duration={500} className="hover:text-[#fcb46b] cursor-pointer">CONTACT</Link>
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
                className="md:hidden bg-brown-700 text-center overflow-hidden text-[#dac5a7]"
            >
                <Link to="home" smooth={true} duration={500}  className="block hover:text-yellow-400 py-2 cursor-pointer">HOME</Link>
                <Link to="menu" smooth={true} duration={500} className="block hover:text-yellow-400 py-2 cursor-pointer">MENU</Link>
                <Link to="about" smooth={true} duration={500}  className="block hover:text-yellow-400 py-2 cursor-pointer">ABOUT</Link>
                <Link to="contact" smooth={true} duration={500}  className="block hover:text-yellow-400 py-2 pb-12 cursor-pointer ">CONTACT</Link>
            </motion.div>
        </nav>
    );
};

export default Navbar;
