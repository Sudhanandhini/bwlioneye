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
import image15 from '../assets/image/gal-12-05-2023-1-200x200.jpg'
import image16 from '../assets/image/gal-12-05-2023-2-200x200.jpg'
import image17 from '../assets/image/IMG-20230123-WA0001-200x200.jpg'
import image18 from '../assets/image/08-09-2022-1-200x200.jpg'
import image19 from '../assets/image/08-09-2022-3-200x200.jpg'
import image20 from '../assets/image/08-09-2022-2-200x200.jpg'
import image21 from '../assets/image/08-09-2022-4-200x200.jpg'
import image22 from '../assets/image/08-09-2022-1-200x200.jpg'
import image23 from '../assets/image/08-09-2022-5-200x200.jpg'
import image24 from '../assets/image/08-09-2022-6-200x200.jpg'
import image25 from '../assets/image/08-09-2022-7-200x200.jpg'
import image26 from '../assets/image/news-12-05-2023-200x200.jpg'
import image27 from '../assets/image/news-article-25-11-2021-1-200x200.jpg'
import image28 from '../assets/image/news-article-25-11-2021-2-200x200.jpg'
import image29 from '../assets/image/eye-bank-staff-get-together-300x169.jpg'
import image30 from '../assets/image/un2-300x169.jpg'
import image31 from '../assets/image/DR-R-G-300x169.jpg'
import image32 from '../assets/image/news-300x199.jpg'
import image33 from '../assets/image/DSC_0456-1-300x169.jpg'
import image34 from '../assets/image/Picture2-300x169.jpg'
import image35 from '../assets/image/nav_0110-300x169.jpg'
import image36 from '../assets/image/Live-art-show-in-victoria-campus-2-300x169.jpg'
import image37 from '../assets/image/guriji1-200x200.jpg'
import image38 from '../assets/image/guriji2-200x200.jpg'
import image39 from '../assets/image/guriji3-200x200.jpg'
import image40 from '../assets/image/guriji4-200x200.jpg'
import image41 from '../assets/image/eye-donation-fortnight-7-200x200.jpg'
import image42 from '../assets/image/eye-donation-fortnight-8-200x200.jpg'
import image43 from '../assets/image/IMG-20201123-WA0011-300x200.jpg'
import image44 from '../assets/image/eye-donation-fortnight1-200x200.jpg'
import image45 from '../assets/image/eye-donation-fortnight2-200x200.jpg'
import image46 from '../assets/image/eye-donation-fortnight3-200x200.jpg'
import image47 from '../assets/image/eye-donation-fortnight4-200x200.jpg'
import image48 from '../assets/image/eye-donation-fortnight5-200x200.jpg'
import image49 from '../assets/image/eye-donation-fortnight6-200x200.jpg'

import image50 from '../assets/image/news-paper-07-09-2021-200x200.jpg'
import image51 from '../assets/image/gal-11-01-2021-1-200x200.jpg'
import image52 from '../assets/image/gal-11-01-2021-2-200x200.jpg'
import image53 from '../assets/image/IMG-20210914-WA0001-200x200.jpg'
import image54 from '../assets/image/IMG-20210914-WA0002-200x200.jpg'
import image55 from '../assets/image/IMG-20210914-WA0003-200x200.jpg'
import image56 from '../assets/image/IMG-20210914-WA0004-200x200.jpg'

import image57 from '../assets/image/DSCN1582-200x200.jpg'
import image58 from '../assets/image/DSCN1610-200x200.jpg'
import image59 from '../assets/image/DSCN1629-200x200.jpg'
import image60 from '../assets/image/DSCN1660-2-200x200.jpg'
import image61 from '../assets/image/DSCN1688-200x200.jpg'



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


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">



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
                            <img src={image15} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image16} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>


                    </Swiper>
                    <p className="mt-2 font-semibold">Technician Training Program</p>
                </div>



                <div className="flex flex-col items-center text-center">
                    <img
                        src={image17}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold"></p>
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
                            <img src={image18} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image19} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image20} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image21} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image22} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image23} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image24} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image25} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>

                    </Swiper>
                    <p className="mt-2 font-semibold">37th National Eye Donation Fortnight</p>
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
                            <img src={image26} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image27} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image28} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>

                    </Swiper>
                    <p className="mt-2 font-semibold">News Paper Articles</p>
                </div>








            </div>

            {/* 4 row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

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
                            <img src={image53} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image54} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image55} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image56} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                                             


                    </Swiper>
                    <p className="mt-2 font-semibold">Eye Donation awareness program in our hospital</p>
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
                            <img src={image61} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image60} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image59} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image58} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image57} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        

                    </Swiper>
                    <p className="mt-2 font-semibold">Eye Pledging QR code release on the occasion of 36th national eye donation fortnight</p>
                </div>


                  <div className="flex flex-col items-center text-center">
                    <img
                        src={image50}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">News paper articles</p>
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
                            <img src={image51} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image52} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                       

                    </Swiper>
                    <p className="mt-2 font-semibold">News Paper Articles</p>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

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
                            <img src={image37} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image38} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image39} alt="slide1" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image40} alt="slide2" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                    </Swiper>
                    <p className="mt-2 font-semibold">Pledging of eyes by Sri Sri Ravishankar Guruji</p>
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
                            <img src={image41} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image42} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        
                    </Swiper>
                    <p className="mt-2 font-semibold">Eye Donation Fortnight Program</p>
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
                            <img src={image44} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image45} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image46} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image47} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image48} alt="slide5" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image49} alt="slide4" className="w-full h-64 object-cover" />
                        </SwiperSlide>
                       

                    </Swiper>
                    <p className="mt-2 font-semibold">26th National Eye Donation Fortnight</p>
                </div>

                 <div className="flex flex-col items-center text-center">
                    <img
                        src={image43}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">NATIONAL CONFERENCE ON CORNEA AND EYE BANKING – ANNUAL CONVENTION OF EBAI 2019</p>
                </div>


               

            </div>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">


                <div className="flex flex-col items-center text-center">
                    <img
                        src={image33}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold"> 32nd National Eye Donation Fortnight 2017</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image34}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">34th National Eye Donation Fortnight 2019</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image35}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">Special Postal Cover Release 2018</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image36}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">Live Art Show In Victoria Campus 2017 For Creating Eye Donation Awareness In Public</p>
                </div>


            </div>


            {/* last row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">


                <div className="flex flex-col items-center text-center">
                    <img
                        src={image29}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold"> Eye Bank Staff Get Together</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image30}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold"></p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image31}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">Dr. Rekha  Gyanchand
                        Eyebank Medical Director</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image32}
                        alt="Technician Training Program"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                    <p className="mt-2 font-semibold">NewsPaper Articles</p>
                </div>


            </div>







        </div>
    );
}
