// src/layouts/MainLayout.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // ✅ renders child routes inside layout

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header visible on all pages */}
      <Header />

      {/* Page content will be injected here */}
      <main className="flex-grow ">
        <Outlet />
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </div>
  );
}
