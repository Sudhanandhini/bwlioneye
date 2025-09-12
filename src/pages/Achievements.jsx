// src/pages/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/image/achievement.jpg"; // 👈 replace with your image path




export default function Achievements() {
    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white py-6 px-4 border-b">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Achievements</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Achievements</span>
                    </div>
                </div>
            </div>

            {/* 2️⃣ Image Section */}
            <div className="w-full">
                <img
                    src={heroImage1}
                    alt="How It Works"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            <div className=" flex flex-col md:flex-row py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                <div> <h1 className="pb-4 text-xl" >Awards</h1>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Achievement award from Sight Life USA in 2014.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Recognized the Best Eye bank of South Zone with Dr.A.P.Sam Memorial in 2019
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Dr.Rekha Gyanchand awarded by Karnataka Ophthalmological Society for excellence in Cornea in 2001.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Award for Excellence in eye banking in appreciation of outstanding leadership and vision in eye banking by Sight Life USA.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Dr.Rekha Gyanchand awarded Dr.G Sitalakshmi gift of sight award by Lions Club  of Madras central in 2009.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                            Awarded the Best finisher award from the sight life USA in 2017.
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h1 className="pb-4 text-xl">Our Well-Known Eye Donors</h1>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Sri Sri Ravishankar Guruji, Spiritual Leader
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Shri SM Krishna, Former CM, Karnataka
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                                Pooja Gandhi, Film Actress, Kannada
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-900">👁</span>
                               Shri NG Jyothi Prakash Mirji, IPS
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h1 className="py-4 text-xl">Recognitions</h1>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                           Dr Rekha Gyanchand Joint secretary of EBAI
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-900">👁</span>
                          Dr.Rekha Gyanchand, Chairperson, South Zone.
                        </li>
                       
                    </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}
