import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    setQuantity((prev) => Math.max(1, prev + val));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="w-full">
        <img
          src="/images/food_29.png"
          alt="Delicious Food"
          className="w-full h-auto rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Grilled Chicken Deluxe</h1>
          <div className="flex items-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="w-5 h-5" />
            ))}
            <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            A flavorful grilled chicken served with seasoned fries and a fresh salad.
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-[#FF3D00] mb-4">$12.99</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-600">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-[#FF3D00] hover:bg-orange-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-md w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
