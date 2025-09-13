import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from '../assets/image/banner.jpg'
import banner2 from '../assets/image/banner3-2.jpg'
import banner3 from '../assets/image/banner4.jpg'
import banner4 from '../assets/image/banner22-1.jpg'
import aboutImg from '../assets/image/home-about.jpg'
import logoEye from '../assets/image/donate-icon-200x200.png'
import gifCandle from '../assets/image/Animation_candle_flameedit-2.gif'
import bgEye from '../assets/image/bg-image.png'
import logo1 from '../assets/image/brand1-1-300x174.png'
import logo2 from '../assets/image/brand2.png'
import logo3 from '../assets/image/brand3.png'


export default function HomePage() {
    return (
        <>

            <div className="w-full h-[80vh]">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-full"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div
                            className="flex items-center justify-center w-90% h-[90vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${banner1})` }}
                        >

                            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2">
                                Donate Now <span>➔</span>
                            </button>

                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div
                            className="flex items-center justify-center w-90% h-[90vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${banner2})` }}
                        >

                        </div>
                    </SwiperSlide>

                    {/* Slide 3*/}
                    <SwiperSlide>
                        <div
                            className="flex items-center justify-center w-90% h-[90vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${banner3})` }}
                        >

                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div
                            className="flex items-center justify-center w-90% h-[90vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${banner4})` }}
                        >

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>




            <div className="bg-gray-50 py-16 px-6 md:px-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
                        <p className="text-gray-700 mb-4">
                            The Lions International Eye bank was founded on 30th June 1984.
                            Initially, it was named as Netrajyothy Eye Bank. Once it was affiliated
                            to INTERNATIONAL Eye Bank, it was named as LIONS INTERNATIONAL EYE BANK in 1995.
                        </p>
                        <p className="text-gray-700 mb-4">
                            The eye bank is a member of EBAI & adheres to international standards.
                            The founder chairman was Late Padmashri Ln. Dr. B.L.S Murthy. Main sponsors
                            include Ms. Karen O Sullivan Baltimore, President of International Federation of Eye
                            and Tissue Banks, USA.
                        </p>
                        <p className="text-gray-700 mb-6">
                            An Eye bank is approved by Govt. of Karnataka under the Transplant of Human Organs Act (THOA).
                        </p>

                        <h3 className="text-xl font-bold text-blue-900 mb-4">ETHICS OF EYE BANK</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Donation is only after death
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Eyes are never purchased nor sold directly or indirectly
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Recipient receiving the cornea will not be known to the donor family
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Donor family cannot choose the recipient
                            </li>
                        </ul>
                    </div>

                    {/* Right Image with fancy border */}
                    <div className="relative w-fit mx-auto">
                        {/* Outer Orange Border */}
                        <div className="absolute -top-4 -left-4 w-full h-full  z-0"></div>
                        {/* Inner Blue Border */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full  z-0"></div>
                        {/* Image */}
                        <img
                            src={aboutImg}
                            alt="About Us"
                            className="relative z-10 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-[#0d3f80]  w-full flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-6">
                {/* Left Logo */}
                <div className="flex justify-center w-full md:w-1/2">
                    <img
                        src={logoEye}
                        alt="Donate Eye Logo"
                        className="max-w-[150px] md:max-w-[200px]"
                    />
                </div>

                {/* Right Text + Button */}
                <div className="text-center md:text-left w-full md:w-1/2">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 uppercase">
                        Donate Eyes, Gift Sight
                    </h2>
                    <button className="bg-orange-600 text-white font-bold px-6 py-3 rounded-sm shadow hover:bg-orange-700 transition">
                        Donate Now
                    </button>
                </div>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center  bg-white  py-16 px-6 md:px-20">
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div >
                    <h2 className="text-xl font-bold text-blue-900">
                        Why one should donate Eyes?
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            The cornea is the clear, transparent tissue covering the front of the eye.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            Anyone of any age can donate eyes, even if they have undergone cataract surgery, wear spectacles, contact lenses or suffer from systemic diseases.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            Eyes are never removed from a living person.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            Once death occurs in a family, call the nearest eye bank immediately.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            The donor need not be taken to the eye bank. The team comes and removes the cornea without disfiguring the face.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            The cornea has to be removed within 6 to 8 hours of death and can be preserved for up to seven days.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600">👁️</span>
                            Vision can be restored with a corneal transplant.
                        </li>
                    </ul>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
                        DONATE YOUR EYES 👁️
                    </button>
                </div>

                {/* Right GIF Section */}
                <div >
                    <img
                        src={gifCandle}// place your gif in public/donation.gif
                        alt="Eye Donation Awareness"
                        className="w-[90%] md:max-w-md max-w-md "
                    />
                </div>
                </div>
            </div>


            <div
                className="w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${bgEye})` }}
            >
                {/* Overlay to make text readable */}
                <div className="w-full ">
                    <div className="container mx-auto flex flex-col md:flex-row">
                        {/* Left Spacer (Image side is background already) */}
                        <div className="md:w-1/2"></div>

                        {/* Right Content */}
                        <div className="md:w-1/2 p-8 text-black">
                            <h2 className="text-lg font-bold mb-4">
                                India – Challenges for the Right to Sight
                            </h2>
                            <p className="mb-4">
                                In India, only 10% of eye transplantation demands are met due to a lack of
                                availability of corneas. There are over 1.5 million people in India who suffer
                                from corneal blindness out of which 80% of cases related to blindness are preventable.
                            </p>
                            <p className="mb-4">
                                Corneal blindness is one of the most important causes of blindness in India and this
                                can be treated by corneal transplantation, but due to lack of cornea donation, people
                                continue to be on the wait-list.
                            </p>

                            <h3 className="text-lg font-bold mb-3">Facilities in our Eye Bank</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> 24x7 Service
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> Dedicated Eye Bank team consisting of a doctor, eye bank technician and ambulance driver for collecting Cornea.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> Laminar Flow Hood for Cornea processing
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> Donor Tissue Evaluation by Slit Lamp, Specular Microscopy
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> Serological Screening of the donor blood sample
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">👁️</span> Preservation in storage media
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="w-full bg-gray-100 py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center">

                    {/* Left Content */}
                    <div className="md:w-1/2 px-6 space-y-4">
                        <h2 className="text-xl font-bold text-blue-900">
                            Eye Bank Accreditation
                        </h2>
                        <h3 className="text-md font-semibold text-blue-800">
                            The Lions International Eye Bank is accredited by
                        </h3>

                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">👁️</span> Eye Bank Association of India, Hyderabad
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">👁️</span> SightLife India, New Delhi
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">👁️</span> NABH – a constituent board of quality council of India
                            </li>
                            
                        </ul>
                    </div>

                    {/* Right Slider */}
                    <div className=" hidden md:block md:w-1/2 px-6 mt-6 md:mt-0">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <img src={logo1} alt="NABH" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={logo2} alt="EBAI" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={logo3} alt="SightLife" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                             <SwiperSlide>
                                <img src={logo1} alt="NABH" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={logo2} alt="EBAI" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={logo3} alt="SightLife" className="h-20 object-contain mx-auto" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>













        </>

    );
}
