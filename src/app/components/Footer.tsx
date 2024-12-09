import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold">
              C
            </div>
            <h1 className="text-xl font-bold ml-2">Comforty</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-800">
                Sofa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Armchair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Wing Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Desk Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Wooden Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Park Bench
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-800">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Teams & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
                Subscribe
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2021 - Blogy - Designed & Develop by Zokirsoft
          </p>
          <div className="flex space-x-4">
            <Image
              src="/Group.png"
              alt="Payment Icons"
              width={24} // Set the width
              height={24} // Set the height
              className="h-6 filter invert"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  
  