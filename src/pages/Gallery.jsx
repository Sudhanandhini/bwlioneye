import { useState } from "react";
import { Link } from "react-router-dom";
import cause from '../assets/image/cause.jpg'


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

           

        




        </div>
    );
}
