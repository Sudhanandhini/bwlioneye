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
    title: "What is Cornea",
    
    content: "The cornea is a human eye’s outermost layer, the clear, dome-shaped surface that covers the eye front."
  },
  {
    title: "What is Corneal Blindness?",
    content:'When the Eye cornea becomes cloudy or scarred, light cannot penetrate the eye to reach the retina that is light-sensitive. Poor vision or blindness occurs as a result.'
  },
  {
    title: "Is the complet eye transplanted",
    content:'No, only the corneas can be transplanted. However, the entire eye may be recovered for use in Education or Research.'
  },
  {
    title: "How successful is Corneal Transplantation",
   content:' Over 97% of all corneal transplant operations have successfully restored the corneal recipient’s vision.'
  },
  {
    title: "Why should Eyes be donated?",
    content: 'There is no substitute for human tissue what so ever. The transplantation process depends upon the priceless gift of a corneal donation from one human to another. Donated eyes are also required for research and education.'
  },
  {
    title: "Who can be a Donor?",
   content: "Anyone can with a wish to give sight to the blind. The great thing about corneal tissue is that everyone is a universal donor. Your blood type does not have to match. It doesn’t matter how old you are, what color your eyes are or how good your eyesight is. Aside from those suffering from infections or a few highly communicable diseases such as HIV or hepatitis, most people are suitable donors."
  },
  {
    title: "If a person has already been pledged the donation, How can he be sure that the wishes are respected?",
   content:'Tell your next of kin, friends or family about donation, and make sure they know your wishes. Next-of-kin cooperation with a medical/social history interview is required before transplantation, so it is helpful if your family and friends know how you feel about donation.'
  },
  {
    title: "Are there any religious objections for Eye Donation?",
    content: 'No. Eye, organ and tissue donation is consistent with the beliefs of major religions. Donation is an opportunity to help save someone’s life or restore someone’s sight. If possible, try including your spiritual leader in your decision-making process.'
  },
  {
    title:"Is there a fee charged for Donation/Pledging?",
    content: 'No. It is illegal to buy or sell human eyes, organs, and tissue. Any costs associated with cornea recovery and preparation are absorbed by the eye bank placing the tissue.'
  },
  {
    title:"Will there be any delay for Funeral?								",
    content: 'Absolutely Not. Eye tissue procurement needs to be performed within hours of death. Families may proceed with funeral arrangements without any delay or interruption.'
  },
  {
    title:"Will Cornea Transplant affect Donor Eye’s appearance?								",
    content: 'No. Great care is taken to preserve the donor’s appearance. The donor’s body is treated with respect at all times. Funeral arrangements, including a viewing if desired, may proceed as scheduled.'
  },
  {
    title:"How soon after the Donation can the Cornea be transplanted?	",
    content: 'Recovery of the donor eye tissue takes place within hours of death. The preservation medium used will keep the cornea’s cells alive for 14 days after recovery, but most transplants occur within a week of recovery.'
  },
  {
    title:"What happens if Corneas are not suitable for Transplant?								",
    content: ' Some medical conditions pose a problem for transplantation and a hazard for medical personnel. An extensive review of the donor’s medical, family and social history is conducted, as well as detailed examinations of the donor eyes and corneas. As a result, some donated eyes are rejected as unsuitable for transplantation, whenever possible these tissues are used for research and educational programs.'
  },
  {
    title:"How do Research and Education benefit from Eye Donation?								",
    content: 'Research on glaucoma, retinal disease, eye complications of diabetes and other sight disorders helps to advance the discovery of the cause and effects of these conditions. This can then lead to new treatments and cures.'
  },
];




export default function Faqs() {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


    return (
        <div className="w-full bg-white">
            {/* 1️⃣ Breadcrumb Section */}
            <div className="w-full bg-white py-6 px-4 ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">FAQs</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">FAQs</span>
                    </div>
                </div>
            </div>




 <div className="max-w-4xl mx-auto py-12 px-6">
     

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
                {/* <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-md shadow-md max-h-[400px] object-contain"
                /> */}
                <p>{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
            

        </div>
    );
}
