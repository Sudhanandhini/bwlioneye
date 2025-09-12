import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon
import logo from '../assets/image/logonew.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 sm:px-6 flex justify-end space-x-4 sm:space-x-6">
        <Link to="/processing" className="hover:text-orange-400">
          Processing of Cornea
        </Link>
        <Link to="/surgeons" className="hover:text-orange-400">
          Corneal Surgeons
        </Link>
        <Link to="/faqs" className="hover:text-orange-400">
          FAQs
        </Link>
        <Link to="/donate" className="text-orange-400 font-semibold">
          Donate For A Cause
        </Link>
      </div>

      {/* Main Blue Bar */}
      <div className="bg-blue-900 text-white flex items-center px-4 sm:px-6 py-3 relative">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full sm:w-48 sm:h-16"
          />
         
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex ml-auto space-x-4 xl:space-x-6 text-xs sm:text-sm font-medium">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About Us</Link>
          <Link to="/what-we-do" className="hover:text-orange-400">What we do</Link>
          <Link to="/how-it-works" className="hover:text-orange-400">How it works</Link>
          <Link to="/pledge" className="hover:text-orange-400">Make A Pledge</Link>
          <Link to="/gallery" className="hover:text-orange-400">Gallery</Link>
          <Link to="/training" className="hover:text-orange-400">Training program</Link>
          <Link to="/achievements" className="hover:text-orange-400">Achievements</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-blue-800 text-white flex flex-col space-y-3 px-6 py-4 lg:hidden">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/what-we-do" className="hover:text-gray-300">What we do</Link>
            <Link to="/how-it-works" className="hover:text-gray-300">How it works</Link>
            <Link to="/pledge" className="hover:text-gray-300">Make A Pledge</Link>
            <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
            <Link to="/training" className="hover:text-gray-300">Training program</Link>
            <Link to="/achievements" className="hover:text-gray-300">Achievements</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
