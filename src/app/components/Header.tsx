import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/sofa.png" // Path to your logo image
            alt="Comforty Logo"
            width={40} // Adjusted to match a typical logo size
            height={40} // Adjusted to match a typical logo size
            className="object-contain" // Ensure image retains aspect ratio
          />
          <span className="ml-3 text-xl font-bold text-gray-800">Comforty</span>
        </div>

        {/* Cart Section */}
        <div className="flex items-center">
          <button className="relative flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-lg transition duration-200">
            <Image
              src="/sofa.png" // Replace with the path to your cart icon image
              alt="Cart Icon"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="font-medium">Cart</span>
            {/* Cart Item Count */}
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              4
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


