import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Business', path: '/business' },
    { text: 'Projects', path: '/projects' },
    { text: 'Blogs', path: '/blogs' },
    { text: 'About', path: '/about' },
    { text: 'Contact Me', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black shadow-md w-screen fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={`text-lg text-white px-3 py-2 rounded-md font-medium transition duration-150 ease-in-out ${isActive(item.path) ? 'bg-stone-800 bg-opacity-50' : 'hover:bg-stone-800 hover:bg-opacity-50'}`}
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`block text-white px-3 py-2 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-stone-800 bg-opacity-50' : 'hover:bg-stone-800 hover:bg-opacity-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;