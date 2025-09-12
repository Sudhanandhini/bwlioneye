import React from "react";
import { Link } from "react-router-dom";
import eye from "../assets/image/unnamed.png"; // 👈 replace with your image path
import vision from "../assets/image/home-vision.png";
import mission from "../assets/image/home-mission.png";
import aboutImgF from "../assets/image/Screenshot 2025-09-12 095347.png";


export default function About() {
    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">About Us</span>
                    </div>
                </div>
            </div>




  <div className=" bg-white text-gray-800 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
      {/* Vision & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Vision */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <div className="flex">
          <div className="w-40 h-40 overflow-hidden  mb-4 ">
            <img
              src={vision}
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-600">Excellence in eye banking</p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
             <div className="flex  md:flex-row">
          <div className="w-40 h-40 overflow-hidden  mb-4 w-1/2 ">
            <img
              src={mission}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
          <p className="text-gray-600 max-w-xs">
            Retrieve optical grade corneas major role in providing sight to the
            corneal blind our dedicated staff is our strong point
          </p></div>
          </div>
        </div>
      </div>

      {/* Eye Image & Description */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
        <div className="flex justify-center md:w-1/2">
          <img
            src={eye}
            alt="Eye People"
            className="max-w-xs md:max-w-md"
          />
        </div>
        <div className="md:w-1/2 text-justify text-gray-700 leading-relaxed mt-8 md:mt-0">
          <p className="mb-4">
            The Lions International Eye bank was founded on 30th June 1984.
            Initially, it was named as Netrajyothy Eye Bank. Once it was
            affiliated to INTERNATIONAL Eye Bank, it was named as LIONS
            INTERNATIONAL EYE BANK in the year 1995.
          </p>
          <p className="mb-4">
            The eye bank is a member of EBAI & adheres to international
            standards.
          </p>
          <p className="mb-4">
            The founder chairman of the eye bank is Late Padmashri Ln. Dr. B.L.S
            Murthy, Manandi Nanjunda Shetty Nagasundaramma, Ms. Karen O Sullivan
            Baltimore, President of International Federation of Eye and Tissue
            Banks, USA are the main sponsors of Eye Bank.
          </p>
          <p>
            An Eye bank is approved by Govt. of Karnataka under the Transplant
            of Human Organs Act (THOA).
          </p>
        </div>
      </div>
    </div>


    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
        <h1 className="py-6 text-xl">Recognized accredited eye banks</h1>
        <p>The Lions International Eye-Bank, Bangalore works for Sight  Restoration & helps to cure blindness by providing donor eye  tissue for sight-saving corneal transplants, medical education  and research.</p>
    </div>


   <div className=" px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
                <div className="container  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <div>
                       

                        <h3 className="text-xl font-bold text-blue-900 mb-4">Our Values</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Teamwork – We believe in working as a team towards one goal i.e to eliminate Corneal Blindness.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                              Accountability – We ensure that every eye donated is accounted for and the recipient gets their sight.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Transparency – Every eye donated to us is transplanted into bringing sight to the blind with 100% transparency.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                              Excellence – We are what our services speak of and there is excellence in what we do throughout our operations.
                            </li>
                        </ul>
                    </div>

                    {/* Right Image with fancy border */}
                    <div className="relative w-fit ">
                       
                        {/* Image */}
                        <img
                            src={aboutImgF}
                            alt="About Us"
                            className="relative z-10 "
                        />
                    </div>
                </div>
            </div>



    </div>
    )
}