import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // Array of images for featured products
  const featuredProducts = [
    { id: 1, image: "/chair12.png", name: "Luxury Chair 1", price: "$99" },
    { id: 2, image: "/chair2.png", name: "Luxury Chair 2", price: "$120" },
    { id: 3, image: "/chair7.png", name: "Luxury Chair 3", price: "$110" },
    { id: 4, image: "/chair3.png", name: "Luxury Chair 4", price: "$130" },
    { id: 5, image: "/chair5.png", name: "Luxury Chair 5", price: "$140" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-cyan-500">
            Comforty
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="/pages" className="text-gray-600 hover:text-gray-900">
              Pages
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">USD</span>
            <span className="text-gray-600">$150.00</span>
          </div>
        </div>
      </header>

      {/* Main Product Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src="/chair1.png"
              alt="Library Stool Chair"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              Library Stool Chair
            </h1>
            <p className="text-2xl font-semibold text-cyan-500">$150.00</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique dui a elit. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-md hover:bg-cyan-600 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              FEATURED PRODUCTS
            </h2>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-cyan-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-500 mb-4">Comforty</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">HELP</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Privacy Policy</p>
                <p>Shipping & Delivery</p>
                <p>Refund Policy</p>
                <p>Track Your Order</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">STORE</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Women</p>
                <p>Men</p>
                <p>Baby</p>
                <p>Kids</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">NEWSLETTER</h4>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to get all new updates
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between items-center">
            <p>© 2023 Comforty. Powered by Comforty</p>
            <div className="flex gap-4">
              <span>PayPal</span>
              <span>VISA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
