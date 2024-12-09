
"use client"
import React, { useState } from "react";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-12 bg-blue-950 px-4 md:px-10">
      {/* Left Section */}
      <span className="text-white text-sm">
        ✅ Free Shipping On All Orders Over $50
      </span>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Language Dropdown */}
        <select
          className="bg-blue-950 text-white border-none text-sm cursor-pointer"
          defaultValue="Eng"
          aria-label="Language Selection"
        >
          <option value="Eng">Eng</option>
          <option value="Esp">Esp</option>
          <option value="Fra">Fra</option>
        </select>

        {/* Mobile Dropdown Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-12 right-4 bg-blue-950 text-white p-4 rounded shadow-lg">
            <a href="#" className="block text-sm hover:underline">FAQs</a>
            <a href="#" className="block text-sm hover:underline">Need Help</a>
          </div>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white text-sm hover:underline">FAQs</a>
          <a href="#" className="text-white text-sm hover:underline">Need Help</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
