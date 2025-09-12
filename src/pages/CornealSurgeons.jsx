import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "registration", label: "Request For Cornea surgeon Registration" },
  { id: "cornea", label: "Request for Cornea" },
  { id: "am", label: "AM (AMNIOTIC MEMBRANE)" },
  { id: "sclera", label: "Sclera" },
];

export default function CornealSurgeons() {
  const [activeTab, setActiveTab] = useState("registration");

  return (
    <div className="p-6">


 <div className="w-full bg-white py-6 px-4  ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Corneal Surgeons</h1>
                    <div className="flex items-center text-sm mt-2">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">{">"}</span>
                        <span className="text-green-600 font-medium">Corneal Surgeons</span>
                    </div>
                </div>
            </div>

    
      <div className="flex flex-col md:flex-row bg-white shadow border rounded-lg overflow-hidden max-w-6xl mx-auto mb-20">
        {/* Left Tabs */}
        <div className="md:w-1/4 border-b md:border-b-0 md:border-r">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 border-b md:border-b-0 md:border-r-0 transition ${
                activeTab === tab.id
                  ? "bg-blue-900 text-white font-semibold"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 bg-gray-50">
          {activeTab === "registration" && (
            <form className="space-y-4">
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Second Name"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Place"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="border p-2 w-full"
                />
              </div>

              <textarea
                placeholder="HOTA Registration Number"
                className="border p-2 w-full"
                rows="3"
              ></textarea>

              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
          )}

          {activeTab === "cornea" && (
            <div>
              {/* <h2 className="font-semibold text-lg mb-2">Request for Cornea</h2>
              <p className="text-gray-600">
                This is the form or content related to requesting for cornea.
              </p> */}
              <form className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Which Grade (required)</p>
                <div className="flex flex-wrap gap-4">
                  {["PKP", "DSEK", "TPK", "Pre-cut"].map((grade) => (
                    <label key={grade} className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{grade}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Doctor Name"
                  className="border p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border p-2 w-full"
                />
              </div>

              <textarea
                placeholder="Address"
                className="border p-2 w-full"
                rows="3"
              ></textarea>

              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
            </div>
          )}

          {activeTab === "am" && (
            <div>
              <form className="space-y-4">
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Doctor Name"
                  className="border p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border p-2 w-full"
                />
              </div>

              <textarea
                placeholder="Address"
                className="border p-2 w-full"
                rows="3"
              ></textarea>

              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
            </div>
          )}

          {activeTab === "sclera" && (
            <div>
              <form className="space-y-4">
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Doctor Name"
                  className="border p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="border p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border p-2 w-full"
                />
              </div>

              <textarea
                placeholder="Address"
                className="border p-2 w-full"
                rows="3"
              ></textarea>

              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
