import React from "react";
import Image from "next/image"; // Import Image from next/image

// Products Array with Badge Details and Individual Image Sizes
const products = [
  {
    id: 1,
    image: "/chair2.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    badgeColor: "bg-green-500",
    imageWidth: 300, // Custom width for this image
    imageHeight: 400, // Custom height for this image
  },
  {
    id: 2,
    image: "/chair1.png",
    name: "Comfort Chair",
    price: "$20",
    oldPrice: "$30",
    badge: "",
    badgeColor: "",
    imageWidth: 350,
    imageHeight: 460,
  },
  {
    id: 3,
    image: "/chair3.png",
    name: "Luxury Armchair",
    price: "$25",
    imageWidth: 320,
    imageHeight: 420,
  },
  {
    id: 4,
    image: "/chair4.png",
    name: "Elegant Office Chair",
    price: "$22",
    imageWidth: 310,
    imageHeight: 430,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-md ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              <div className="relative w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  width={product.imageWidth}  // Custom width
                  height={product.imageHeight} // Custom height
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-gray-800 font-bold">{product.price}</span>
                </p>
              </div>

              {/* Cart Icon (Moved to Bottom) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/cart.png"
                  alt="Cart Icon"
                  width={24}  // Custom width for cart icon
                  height={24} // Custom height for cart icon
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;



