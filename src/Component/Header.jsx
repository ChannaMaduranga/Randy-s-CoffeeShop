import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Add fade effect styles

import img1 from "../assets/2.jpg";
import img2 from "../assets/1.jpg";
import img3 from "../assets/3.jpg";

const slides = [
  {
    image: img1,
    text: "Start Your Day with the Perfect Brew",
    subline: `Unwind at ‘Bentota’s best coffee house’ where great people create great memories.`,
  },
  {
    image: img2,
    text: `Sip and Smile at Randy’s Coffee House`,
    subline: `Unwind at ‘Bentota’s best coffee house’ where great people create great memories.`,
  },
  {
    image: img1,
    text: "Enjoy Every Sip of Freshly Brewed Coffee",
    subline: `Unwind at ‘Bentota’s best coffee house’ where great people create great memories.`,
  },
  {
    image: img3,
    text: "Sip and Smile at Randy’s Coffee House",
    subline: `Unwind at ‘Bentota’s best coffee house’ where great people create great memories.`,
  },
];

const Header = () => {
  const [currentText, setCurrentText] = useState(slides[0].text);
  const [currentSubline, setCurrentSubline] = useState(slides[0].subline);

  return (
    <div className="relative w-full h-[100vh]">
      {/* Image Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        effect="fade" // Add fade effect for smooth image transitions
        onSlideChange={(swiper) => {
          setCurrentText(slides[swiper.activeIndex].text);
          setCurrentSubline(slides[swiper.activeIndex].subline);
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

              {/* Header Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-start w-[90%] sm:w-[70%] md:w-[70%] xl:w-[65%] p-[5%] md:p-[10%]">
                <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold text-left transition-all duration-500 px-4">
                  {currentText}
                </h1>
                <p className="text-white text-sm pt-4 md:pt-12 md:text-2xl font-medium text-left transition-all duration-500 px-4">
                  {currentSubline}
                </p>
                <div className="mt-8 pl-4">
                  <button type="button" class="text-white bg-transparent border-2 border-white hover:bg-white  hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">View Menu</button>
                  <button type="button" class="text-white bg-transparent border-2 border-white hover:bg-white  hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Visit Our shop</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
