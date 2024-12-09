import Image from 'next/image'

export default function AllProducts() {
  const products = [
    {
      id: 1,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair2.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair1.png",
      isSale: true,
    },
    {
      id: 3,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair3.png",
    },
    {
      id: 4,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair9.png",
    },
    {
      id: 5,
      name: "Luxury Stool Chair",
      price: 30,
      image: "/chair6.png",
    },
    {
      id: 6,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair10.png",
      isSale: true,
    },
    {
      id: 7,
      name: "Luxury Stool Chair",
      price: 30,
      image: "/chair12.png",
    },
    {
      id: 8,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair2.png",
    },
    {
      id: 9,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair5.png",
      isNew: true,
    },
    {
      id: 10,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair1.png",
      isSale: true,
    },
    {
      id: 11,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair3.png",
    },
    {
      id: 12,
      name: "Luxury Stool Chair",
      price: 20,
      image: "/chair7.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-500 rounded-lg"></div>
              <span className="text-xl font-semibold">Comforty</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm hover:text-blue-500">Home</a>
              <a href="#" className="text-sm hover:text-blue-500">Shop</a>
              <a href="#" className="text-sm hover:text-blue-500">Product</a>
              <a href="#" className="text-sm hover:text-blue-500">Pages</a>
              <a href="#" className="text-sm hover:text-blue-500">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="text-xs text-gray-500">Contact</div>
                <div className="text-sm font-medium">(808) 555-0111</div>
              </div>
              <button className="relative p-2">
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs text-white flex items-center justify-center">0</span>
                <Image
                  src="/chair.png"
                  alt="Shopping Cart"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">All Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    New
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </div>
                )}
                <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image
                    src="/chair.png"
                    alt="Add to Cart"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
