import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F0F2F3] py-12">
      <div className="mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-8 items-center" style={{ maxWidth: '1321px', height: '850px' }}>
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h5 className="text-sm font-medium text-gray-600">WELCOME TO CHAIRY</h5>
          <h1 className="text-3xl lg:text-5xl font-bold text-blue-900 mt-2">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="text-gray-600 mt-4 text-sm lg:text-base">
            Explore our exclusive furniture collection that perfectly suits your style and budget.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
            Shop Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full flex justify-center">
          <Image
            src="/chair.png" // Update this path with your image path in the public folder
            alt="Styled Image"
            width={434}
            height={584}
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}