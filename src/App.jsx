// import { useState } from 'react'
// import './App.css'
// import Header from '../src/components/Header'
// import Footer from '../src/components/Footer'
// import HomePage from './pages/HomePage'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="min-h-screen flex flex-col"> 
//       <Header />
      
//       {/* Main expands to fill remaining height */}
//       {/* <main className="flex-grow ">
//        <HomePage />
//       </main> */}

//         <main className="flex-grow">{children}</main>
      
//       <Footer />
//     </div>
//   )
// }

// export default App


// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700">Welcome to Home Page</h1>
      <p className="text-gray-700 mt-2">
        This is your homepage content. You can add banners, sections, etc.
      </p>
    </div>
  );
}
