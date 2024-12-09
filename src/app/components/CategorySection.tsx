import Image from "next/image";

const CategorySection = () => {
  const categories = [
    { title: "Wing Chair", products: "3,584 Products", img: "/chair5.png" },
    { title: "Wooden Chair", products: "157 Products", img: "/chair6.png" },
    { title: "Desk Chair", products: "154 Products", img: "/chair7.png" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"> 
              {/* Responsively adjust the height for different screen sizes */}
              <Image
                src={category.img}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              <p className="text-gray-500 mt-2">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

