import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import App from "./App";
import "./index.css";
import WhatWeDo from '../src/pages/WhatWeDo'
import HomePage from '../src/pages/HomePage'
import HowItWorks from "./pages/HowItWorks";
import TrainingProgram from "./pages/TrainingProgram";
import Achievements from "./pages/Achievements";
import About from "./pages/About";
import MakeAPledge from "./pages/MakeAPledge";
import Contact from "./pages/Contact";
import ProcessingOfCornea from "./pages/ProcessingOfCornea";
import Faqs from "./pages/Faqs";
import CornealSurgeons from "./pages/CornealSurgeons";
import DonateForCause from "./pages/DonateForCause";
import Gallery from "./pages/Gallery";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/bwlioneye">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/how-it-works"  element={ <HowItWorks /> }  />
          <Route path="/training"  element={ <TrainingProgram /> } />
          <Route path="/achievements"  element ={ <Achievements /> } />
          <Route path="/about"  element={ <About /> }    />
          <Route path="/pledge"  element={ <MakeAPledge /> } />
          <Route path="/contact" element = { <Contact />   }  />
           <Route path="/processing" element= { <ProcessingOfCornea /> } />
           <Route path="/faqs" element={ <Faqs /> } />
           <Route path="/surgeons" element ={ <CornealSurgeons /> }  />
           <Route path="/donate" element ={  <DonateForCause /> } />
           <Route path="/gallery" element={ <Gallery /> }  />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
