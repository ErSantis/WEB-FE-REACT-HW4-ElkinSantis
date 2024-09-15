import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Smartwatch Pro</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Products</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
