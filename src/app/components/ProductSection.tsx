import Image from "next/image";

const ProductSection = () => {
  const products = [
    {
      img: "/chair2.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: "New",
    },
    {
      img: "/chair1.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: "$30",
      tag: "Sales",
    },
    {
      img: "/chair3.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: null,
    },
    {
      img: "/chair4.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: null,
    },
    {
      img: "/chair5.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: "New",
    },
    {
      img: "/chair10.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: "$30",
      tag: "Sales",
    },
    {
      img: "/chair12.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: null,
    },
    {
      img: "/chair1.png",
      title: "Library Stool Chair",
      price: "$20",
      originalPrice: null,
      tag: null,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4 relative"
          >
            {/* Badge */}
            {product.tag && (
              <div
                className={`absolute top-4 left-4 px-2 py-1 text-sm font-bold text-white rounded ${
                  product.tag === "New" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {product.tag}
              </div>
            )}

            {/* Product Image */}
            <div className="relative w-full h-48">
              <Image
                src={product.img}
                alt={product.title}
                layout="fill"
                objectFit="contain" // Use "cover" if you want the image to fill the container.
                className="rounded-md"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4 flex justify-center">
              <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0h16.6M7 13L5.4 5m1.6 8L9 21m6-8l1.6 8m-5.6-8H9m6 0h2m-4 0v2"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
