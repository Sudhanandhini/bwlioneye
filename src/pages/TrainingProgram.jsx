
import React from "react";
import { Link } from "react-router-dom"; 
import { Eye } from "lucide-react";

export default function TrainingProgram() {
    return (
       

          <div className=" bg-white text-gray-800 px-6 md:px-20 py-10">
                    {/* 1️⃣ Breadcrumb Section */}
                    <div className="w-full bg-white py-6 px-4 ">
                        <div className=" mx-auto">
                            <h1 className="text-3xl font-bold text-gray-800">TRAINING PROGRAM</h1>
                            <div className="flex items-center text-sm mt-2">
                                <Link to="/" className="text-blue-600 hover:underline">
                                    Home
                                </Link>
                                <span className="mx-2 text-gray-400">{">"}</span>
                                <span className="text-green-600 font-medium">TRAINING PROGRAM</span>
                            </div>
                        </div>
                    </div>
        

            {/* Title */}
      <h1 className="text-3xl font-bold mb-4">TRAINING PROGRAM</h1>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed  mb-10">
        This training program is provided to eye bankers interested in learning quality eye banking. An excellent eye bank has a very high cornea utilization rate and not the number of corneas collected. This program one-to-one learning, very interactive and hands-on. The candidate coming for this program must be passionate about eye banking. A training certificate will be given at the end of the program.
      </p>

      {/* Courses */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Courses are:</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Eye className="text-blue-500 w-5 h-5 mt-1" />
            <span>
              Eye recovery technician course{" "}
              <span className="text-gray-500">( Duration 2 Months )</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Eye className="text-blue-500 w-5 h-5 mt-1" />
            <span>
              EDC Training <span className="text-gray-500">( 1 week )</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Eye className="text-blue-500 w-5 h-5 mt-1" />
            <span>
              Observership program and refresher training{" "}
              <span className="text-gray-500">( 1 week )</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Eye className="text-blue-500 w-5 h-5 mt-1" />
            <span>
              Cornea Evaluation Course{" "}
              <span className="text-gray-500">( 1 Month )</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Eye className="text-blue-500 w-5 h-5 mt-1" />
            <span>
              EDC cum eye recovery training{" "}
              <span className="text-gray-500">( 1 Month )</span>
            </span>
          </li>
        </ul>
      </div>



      {/* Contact Info */}
      <div className="text-gray-700 space-y-2">
        <p className="font-semibold">
          For more details contact Mr. Thyagaraj:{" "}
          <span className="text-gray-900">9740556666</span>
        </p>
        <p>
          <span className="font-semibold">Email ID:</span>{" "}
          <a
            href="mailto:eyebank@bwlionseyehospital.org"
            className="text-blue-600 hover:underline"
          >
            eyebank@bwlionseyehospital.org
          </a>
        </p>
      </div>
                   
                </div>


           
    );
}
