// src/pages/HowItWorks.jsx
import React from "react";
import { Link } from "react-router-dom";
import Step1 from "../assets/image/Step-1-Grief-counsilling-by-eye-donation-counsellor.jpg"; 
import Step2 from "../assets/image/step-2-Cornea-retrieval-by-eye-bank-technician.jpg"; 
import Step3 from "../assets/image/step-3-Corneo-scleral-rim-excision-in-LAF.jpg"; 
import Step4 from "../assets/image/Step-4-Preservative-media.jpg"; 
import Step5 from "../assets/image/Step-5-Slit-lamp-evaluation.jpg"; 
import Step6 from "../assets/image/Step-6-Specular-microscopy-examination.jpg"; 
import Step7 from "../assets/image/Step-7-Tissue-packing.jpg"; 
import Step8 from "../assets/image/Step-8-Tissue-packing.jpg"; 
import { useState } from "react";

const steps = [
  {
    title: "Step 1 - Grief counselling by eye donation counsellor",
    img: Step1,
  },
  {
    title: "Step 2 - Cornea Retrieval By Eye Bank Technician",
    img: Step2,
  },
  {
    title: "Step 3 - Corneo Scleral Rim Excision in LAF",
    img: Step3,
  },
  {
    title: "Step 4 - Preservative Media",
    img: Step4,
  },
  {
    title: "Step 5 - Slit Lamp Evaluation",
    img: Step5,
  },
  {
    title: "Step 6 - Specular Microscopy Examination",
    img: Step6,
  },
  {
    title: "Step 7 - Tissue Packing",
    img: Step7,
  },
  {
    title: "Step 8 - Tissue Packing",
    img: Step8,
  },
];




export default function ProcessingOfCornea() {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white py-6 px-4 ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Processing of Cornea</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Processing of Cornea</span>
                    </div>
                </div>
            </div>




 <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 uppercase">
        Processing of Cornea
      </h1>

      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            {/* Tab Header */}
            <button
              className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium text-white ${
                activeIndex === index ? "bg-[#0b4987]" : "bg-[#0b4987] hover:bg-blue-800"
              }`}
              onClick={() => toggleStep(index)}
            >
              <span>{step.title}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {/* Tab Content */}
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 flex justify-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-md shadow-md max-h-[400px] object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
            

        </div>
    );
}
