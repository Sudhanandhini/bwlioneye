// src/pages/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image/how-it-work-main.jpg"; // 👈 replace with your image path




export default function HowItWorks() {
    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white py-6 px-4 border-b">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">HOW IT WORKS</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">How It Works</span>
                    </div>
                </div>
            </div>

            {/* 2️⃣ Image Section */}
            <div className="w-full">
                <img
                    src={heroImage}
                    alt="How It Works"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            {/* 3️⃣ Three Column Content */}
            <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Referral</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Lions International Eye Bank partners with the designated Organ
                        Procurement Organization and the Eye Bank to facilitate donations
                        throughout India. Our donor coordinators work closely with all
                        facilities to obtain patient medical information and to determine
                        donor registry status.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Authorization/Medical Record Overview
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Once the Lions International Eye Bank of Bangalore is notified of a
                        potential donor, donor coordinators obtain basic medical info such
                        as age, time & cause of death, medical history, and next-of-kin
                        information. The Eye Bank then contacts the next of kin, to obtain
                        consent for the donation of the individual’s corneas or whole eye.
                    </p>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Recovery</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Eye Cornea must be recovered and preserved within a few hours of the
                        patient’s death. Lions International Eye Bank has technicians on
                        call 24/7. When the technician arrives, he/she reviews the medical
                        chart and performs a physical inspection. The technician then
                        creates a sterile environment and removes the viable tissue.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Transportation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        The Lions International Eye Bank uses a unique process to help transport corneal tissue throughout the state in a sophisticated environment to ensure the safety of cornea. When a donation has occurred and tissue is recovered, local Lions clubs are called upon to transport the corneal tissue back to the Eye Bank via a relay system.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Evaluation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Eye tissue is evaluated through the use of a slit lamp and under the use of a specular microscope. If the tissue is free of imperfections and a has medical record clearance, the tissue can be used for transplant, research, or education and training
                    </p>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Tissue Release</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        The Medical Director Designee authorizes the release of the tissue. The eye tissue is then offered out for transplantation, research, or education and training.  After being sealed and packaged the eye tissue leaves our facility to its new home.
                    </p>
                </div>
            </div>



        </div>
    );
}
