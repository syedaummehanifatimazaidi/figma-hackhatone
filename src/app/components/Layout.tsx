import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Layout = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* You can add your logo here */}
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a href="#" className="text-blue-500 font-semibold hover:underline">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline">Shop</a>
          {/* Use Link directly without wrapping <a> */}
          <Link href="/all" className="text-gray-700 hover:text-blue-500 hover:underline">
            Product
          </Link>
          {/* Add Pages link using Link component */}
          <Link href="/new" className="text-gray-700 hover:text-blue-500 hover:underline">
            Pages
          </Link>
          <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline">About</a>
        </nav>

        {/* Contact Section */}
        <div className="text-gray-700 font-medium">
          <span className="hidden md:inline">Contact: </span>
          <a href="tel:8085550111" className="text-gray-900 font-semibold hover:text-blue-500">
            (808) 555-0111
          </a>
        </div>
      </div>
    </header>
  );
};

export default Layout;



