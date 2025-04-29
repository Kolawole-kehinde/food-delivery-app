// components/SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder="What would you love to buy today?"
        className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;