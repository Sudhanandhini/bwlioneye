import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import hands from  "../assets/image//make-a-pledge-main(1).jpg"


export default function MakeAPledge() {

      const [tab, setTab] = useState("english");



    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-12 xl:px-48 py-12">
                <div className=" mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Make A Pledge</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Make A Pledge</span>
                    </div>
                </div>
            </div>

 <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12">
      {/* Section 1: Tabs */}
      <div className="mb-16">
        {/* Tabs */}
        <div className="flex  space-x-2 mb-4">
          <button
            onClick={() => setTab("kannada")}
            className={`px-4 py-2 border rounded-t-md ${
              tab === "kannada"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            ಕನ್ನಡ
          </button>
          <button
            onClick={() => setTab("english")}
            className={`px-4 py-2 border rounded-t-md ${
              tab === "english"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            English
          </button>
        </div>

        {/* Content */}
        <div className="border border-gray-400 p-6 rounded-b-md text-gray-700 leading-relaxed">
          {tab === "kannada" ? (
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2"> 
              <h3 className="font-semibold mb-2">ನೀವೇಕೆ ನೇತ್ರದಾನಿಗಳಾಗಬೇಕು?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="flex items-start gap-2">
                        <span className="text-blue-900">👁</span>
                 ನೇತ್ರದಾನ ಮಾಡಲು ವಯಸ್ಸು,ಲಿಂಗ, ಜನಾಂಗ ಮತ್ತು ದೃಷ್ಟಿದೋಷ ಮುಖ್ಯವಲ್ಲ
                </li>
                <li className="flex items-start gap-2">
                        <span className="text-blue-900">👁</span>
                 ನೇತ್ರದಾನವನ್ನು ಎಲ್ಲಾ ಪ್ರಮುಖ ಧರ್ಮಗಳು ಬೆಂಬಲಿಸುತ್ತವೆ.
                </li>
                <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
                ಕೆಲವರು ನೇತ್ರದಾನವನ್ನು ದಾನವೆಂದು ಪರಿಗಣಿಸಿದರೆ, ಮತ್ತೆ  ಕೆಲವರು ವೈಯಕ್ತಿಕ ಆಯ್ಕೆಯಂತೆ ನೋಡುತ್ತಾರೆ
                </li>
                 <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
              ನೇತ್ರದಾನವು ಉಡುಗೊರೆಯಾಗಿದೆ – ನಿಮಗೆ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ನೇತ್ರದಾನ ಮಾಡಲು ಯಾವುದೇ ವೆಚ್ಚವಾಗುವುದಿಲ್ಲ
                </li>
                 <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
               ನೇತ್ರದಾನ ದೈವಿಕವಾದುದು. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ FAQ ಸೆಕ್ಷನ್ ಓದುವ ಮೂಲಕ ನೇತ್ರದಾನದ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ.
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
             <h1 className="font-semibold mb-2">ನೇತ್ರದಾನಿಗಳ ಅರ್ಹತೆ</h1>
            <p>ಪ್ರತಿಯೊಬ್ಬರೂ ನೇತ್ರದಾನಿಗಳಾಗಬಹುದು. ನೇತ್ರದಾನಿಯಾಗಲು ಎಲ್ಲರನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ. ಅರ್ಹತೆಯನ್ನು ಮರಣದ ಹತ್ತಿರ ಅಥವಾ ಸಾವಿನ ಸಮಯದಲ್ಲಿ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಸಂಪೂರ್ಣ ವೈದ್ಯಕೀಯ ಪರಿಶೀಲನೆಯ ನಂತರ ಪ್ರಕರಣದ ಆಧಾರದ ಮೇಲೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ. ಕ್ಯಾನ್ಸರ್, ಮಧುಮೇಹ ಮತ್ತು ಮ್ಯಾಕ್ಯುಲರ್ ಡಿಜೆನರೇಶನ್ ಹೊಂದಿರುವ ರೋಗಿಗಳು ಕಾರ್ನಿಯಾ ಕಸಿ ಬಳಕೆಗೆ ದಾನಿಗಳಾಗಿ ಅರ್ಹರಾಗಬಹುದು, ಜೊತೆಗೆ ಕನ್ನಡಕ ಅಥವಾ ಕಾಂಟ್ಯಾಕ್ಟ್ ಲೆನ್ಸ್ ಧರಿಸುವ ಅನೇಕ ರೋಗಿಗಳು ಕೂಡ ನೇತ್ರದಾನ ಮಾಡಬಹುದು.</p>
            </div>  
            
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2"> 
              <h3 className="font-semibold mb-2">Why should you be a donor?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
                  Age, gender, race, and quality of sight are not causes in cornea donation.
                </li>
                <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
                  Eye donation is supported by all major religions. Some view donation as an act of charity and/or a personal choice.
                </li>
                <li className="flex items-start gap-2">     <span className="text-blue-900">👁</span>
                  Donation is a gift – there is no cost to you or your family to donate.
                </li> 
                <li className="flex items-start gap-2">    <span className="text-blue-900">👁</span>
                    Eye donation is divine. Know more about Eye donation by readings FAQs and Myth Busters.</li>
              </ul> </div>
              <div className="w-full md:w-1/2">
                <h1 className="font-semibold mb-2"> Donor Eligibility</h1>
                <p>Everyone can be an Eye Donor. Everyone is encouraged to become a donor, with the knowledge that eligibility will be determined near or at the time of death, and on a case by case basis after a thorough medical review. Patients with cancers, malignancies, diabetes, and macular degeneration may often be eligible as donors for transplant use, as well as many patients who wear glasses or contact lenses.</p>
                </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Image + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={hands}
            alt="Hands Unity"
            className=" max-w-sm"
          />
        </div>

        {/* Right Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <input
            type="text"
            placeholder="Name"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Id"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="border border-blue-900 p-2 rounded"
          />

          <select className="border border-blue-900 p-2 rounded">
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="border border-blue-900 p-2 rounded">
            <option>A +ve</option>
            <option>A -ve</option>
            <option>B +ve</option>
            <option>B -ve</option>
            <option>O +ve</option>
            <option>O -ve</option>
            <option>AB +ve</option>
            <option>AB -ve</option>
          </select>

          <input
            type="date"
            className="border border-blue-900 p-2 rounded"
          />

          {/* Address Fields */}
          <input
            type="text"
            placeholder="Door No./ Street No."
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Landmark"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Area"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="border border-blue-900 p-2 rounded"
          />

          {/* Relative Details */}
          <input
            type="text"
            placeholder="Relative Name"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Relative Email"
            className="border border-blue-900 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Relative Mobile Number"
            className="border border-blue-900 p-2 rounded"
          />

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>



    </div>
    )
}