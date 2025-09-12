// WhatWeDoHeader.jsx
import React from "react";
import { Link } from "react-router-dom"; // only if you're using react-router
import aboutImg1 from '../assets/image/about-main.jpg'

export default function WhatWeDoHeader() {
    return (
        <>

            <div className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
                           <div className="max-w-6xl mx-auto">
                               <h1 className="text-3xl font-bold text-gray-800">What We do</h1>
                               <div className="flex items-center text-sm mt-2">
                                   <Link to="/" className="text-blue-600 hover:underline">
                                       Home
                                   </Link>
                                   <span className="mx-2 text-gray-400">{">"}</span>
                                   <span className="text-green-600 font-medium">What We do</span>
                               </div>
                           </div>
                       </div>

            <div className=" px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                    <div className="relative w-fit mx-auto">

                        {/* Image */}
                        <img
                            src={aboutImg1}
                            alt="About Us"
                            className="relative z-10 rounded-lg shadow-lg"
                        />
                    </div>

                    <div>


                        <h3 className="text-xl font-bold text-blue-900 mb-4">Service Provided</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Corneal Tissue provided to corneal surgeons.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Distribute Precut Tissue to corneal surgeons
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Processed Preserved Amniotic membrane.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Preserved Sclera for    Oculoplastic & Glaucoma surgeries.
                            </li>
                             <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                              Whole globe for training facilities.
                            </li>
                             <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                              Training Program for Eye Bank Technicians
                            </li>
                        </ul>
                    </div>



                </div>
            </div>

        </>
    );
}
