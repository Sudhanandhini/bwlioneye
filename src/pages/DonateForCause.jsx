import { useState } from "react";
import { Link } from "react-router-dom";
import cause from '../assets/image/cause.jpg'


export default function DonateForCause() {


    return (
        <div className="p-6">


            <div className="w-full bg-white py-6 px-4  ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Donate For Cause</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Donate For Cause</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-6 " >
                <div className="w-full md:w-1/2">
                    <img src={cause} alt="cause" />
                </div>
                <div className="w-full md:w-1/2">
                    <p>Lions International Eye Bank is a part of Lions Club International, a global not-for-profit organization. Working along with Bangalore West Superspeciality Eye Hospital, we have been part of thousands of people’s journeys. Behind all these works to provide social support to the people, there is a person who loves to remain in shadow and help people, that’s a Donor who always loves to remain anonymous. We are because of our donors and carryout their heartfelt social intentions through service for them.

                        We want to do more and you too can be part of the same intent. By committing a small fraction of your income as a donation to the lives of blind individuals you can contribute to humanity.</p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row max-w-6xl mx-auto pt-6 pb-20 gap-12 ">
                <div className="w-full md:w-1/2">
                    <h1 className="text-xl pb-6">Individual Donors</h1>
                    <p>We request Individuals to become our donors to contribute to eye surgeries and campaigning efforts for eye pledging campaigns. And donations made to us are tax exempted under 80G for the donations made to the NGO.

                        It will be a humanly gesture that you show to people who need actual additional care and are deprived of normal health conditions. You could make a monthly contribution by payroll giving. The progress of our efforts in the direction of building awareness for eye donation and sponsoring eye transplant surgeries will be shared on the website on a regular basis.</p>
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-xl pb-6">Corporate Donations</h1>
                    <p>Similar to Individual donors of money to charity, Corporate Donors’ contribution is tax exempted. The companies can fulfill the regulation of 2013 companies act related to CSR contribution by contributing to Lions International Eye Bank. We share the objectives of CSR of the companies and together carry out campaigns. The donated funds will be utilized for eye donation campaigns and corneal transplant surgeries.</p>
                    <b className="py-6">Please feel free to ask any questions you may have regarding the utilization of funds and such other queries.</b>
                </div>

            </div>





        </div>
    );
}
