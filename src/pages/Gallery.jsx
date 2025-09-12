import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from '../assets/image/bw-eyebank-news-25-4-2025.jpg'
import image2 from '../assets/image/bwlion-1.jpg'
import image3 from '../assets/image/adv-lions.jpg'
import image4 from '../assets/image/IMG-20241218-WA0037-200x200.webp'
import image5 from '../assets/image/fortnight-programs-1-1024x768.jpg'
import image6 from '../assets/image/fortnight-programs-2-200x200.jpg'
import image7 from '../assets/image/fortnight-programs-5-1024x544.jpg'
import image8 from '../assets/image/fortnight-programs-4-1024x462.jpg'
import image9 from '../assets/image/fortnight-programs-3-200x200.jpg'
import image11 from '../assets/image/np-11-09-2023-1-200x200.png'
import image10 from '../assets/image/news-12-05-2023-200x200.jpg'
import image12 from '../assets/image/np-11-09-2023-2-200x200.png'
import image13 from '../assets/image/IMG_20230601_114653-200x200.jpg'
import image14 from '../assets/image/IMG_20230601_114709-200x200.jpg'


export default function Gallery() {


    return (
        <div className="p-6">


            <div className="w-full bg-white py-6 px-4  ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Gallery</span>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                {/* Column 1 - Static Image */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image1}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News Paper Article</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image2}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News Paper Article</p>
                </div>

                {/* Column 3 - Static Image */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image3}
                        alt="News Paper Article"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News paper articles</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image4}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News Paper Article</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                {/* Column 1 - Static Image */}
               

                {/* Column 2 - Slider */}
                <div className="flex flex-col items-center text-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full rounded-lg shadow-md"
                    >
                        <SwiperSlide>
                            <img src={image5} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image6} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image7} alt="slide3" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image8} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image9} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                    </Swiper>
                    <p className="mt-2 font-semibold">37th National Eye Donation Fortnight</p>
                </div>

               

                {/* Column 4 - Slider */}
                <div className="flex flex-col items-center text-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full rounded-lg shadow-md"
                    >
                        <SwiperSlide>
                            <img src={image11} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image12} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                  
                    </Swiper>
                    <p className="mt-2 font-semibold">News Paper Articles 2023</p>
                </div>


                 <div className="flex flex-col items-center text-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full rounded-lg shadow-md"
                    >
                        <SwiperSlide>
                            <img src={image13} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image14} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                  
                    </Swiper>
                    <p className="mt-2 font-semibold"></p>
                </div>



                 <div className="flex flex-col items-center text-center">
                    <img
                        src={image10}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News Paper Articles 2023</p>
                </div>





            </div>






        </div>
    );
}
