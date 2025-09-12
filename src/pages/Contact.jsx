// src/pages/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";





export default function Contact() {
    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white py-6 px-4 border-b">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Contact Us</span>
                    </div>
                </div>
            </div>

            <div className="bg-sky-500  min-h-[50vh]  py-12 px-4 sm:px-8 md:px-16">
                {/* Heading */}
                <div className="text-white mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                    <p className="text-lg max-w-2xl">
                        Many ways to get in touch with Us!
                    </p>
                    <p className="max-w-2xl">
                        It seems that you are here for a wonderful cause and we ensure that
                        wish is respected. Here are different means to contact us.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white shadow-lg rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
                    {/* Left Form (2/3) */}
                    <div className="col-span-2 p-6">
                        <h3 className="font-semibold text-lg mb-4">
                            Allow us to get back to us!
                        </h3>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            {/* Row 1 */}
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-blue-900 p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Second Name"
                                className="border border-blue-900 p-2 rounded w-full"
                            />

                            {/* Row 2 */}
                            <input
                                type="email"
                                placeholder="E-Mail"
                                className="border border-blue-900 p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="border border-blue-900 p-2 rounded w-full"
                            />

                            {/* Subject full width */}
                            <input
                                type="text"
                                placeholder="Subject"
                                className="border border-blue-900 p-2 rounded w-full col-span-2"
                            />

                            {/* Message full width */}
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="border border-blue-900 p-2 rounded w-full col-span-2"
                            ></textarea>

                            {/* Submit button */}
                            <div className="col-span-2 flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Contact Info (1/3) */}
                    <div className="bg-blue-900 text-white p-6">
                        <h3 className="font-bold text-lg mb-4">Contact Information</h3>

                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-semibold">Drop by to our Eye Bank:</p>
                                <p>
                                    #5, Lions Eye Hospital Road (off JC Road)
                                    <br />
                                    Bangalore 560 002, Karnataka, India
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold">Give us a call at:</p>
                                <p>+91-97405 56666</p>
                            </div>

                            <div>
                                <p className="font-semibold">Drop us a mail:</p>
                                <p>ebmanager@bwlionseyehospital.org</p>
                                <p>eyebank@bwlionseyehospital.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
