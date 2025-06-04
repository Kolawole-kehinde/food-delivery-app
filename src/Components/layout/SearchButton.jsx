import React, { useState, useContext, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../../context/ContextApi';
import { menu_list } from '../../assets/assets';

const MAX_RECENT_SEARCHES = 5;
const RECENT_SEARCH_KEY = 'recentSearches';

const SearchBar = () => {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  // Load recent searches
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(RECENT_SEARCH_KEY));
    if (stored) setRecentSearches(stored);
  }, []);

  const updateRecentSearches = (term) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter(item => item !== term)].slice(0, MAX_RECENT_SEARCHES);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(updated));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectTerm = (term) => {
    setSearchTerm(term);
    updateRecentSearches(term);
    setShowDropdown(false);
  };

  const handleFocus = () => setShowDropdown(true);
  const handleBlur = () => setTimeout(() => setShowDropdown(false), 200);

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return products.filter(p =>
      p.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const filteredCategories = useMemo(() => {
    return menu_list.filter(c =>
      c.menu_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-0 md:mt-4 px-0 sm:px-2 md:px-4">

  <input
    type="text"
    value={searchTerm}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onChange={handleSearchChange}
    placeholder="What would you love to buy today?"
    className="w-full hidden lg:block px-2 py-2 pl-2 lg:pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:px-3 md:px-4"
  />
  <FaSearch className="hidden md:flex absolute top-1/2 right-7 transform -translate-y-1/2 text-gray-400" />


      {showDropdown && (
        <div className="absolute z-50 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-80 overflow-y-auto">
          {/* Recently Searched */}
          {searchTerm === '' && recentSearches.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 px-4 py-2">Recently Searched</p>
              {recentSearches.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectTerm(item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* Products */}
          {searchTerm && (
            <>
              <p className="text-xs font-semibold text-gray-500 px-4 py-2">Products</p>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectTerm(item.name)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">No Result Found</div>
              )}

              {/* Categories */}
              <p className="text-xs font-semibold text-gray-500 px-4 py-2 mt-2">Categories</p>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectTerm(cat.menu_name)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat.menu_name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">No Result Found</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
