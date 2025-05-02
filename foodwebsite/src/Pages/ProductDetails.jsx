import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { FaStar } from 'react-icons/fa';
import ProductTabs from '../components/ProductTabs';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProduct(id);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    setQuantity((prev) => Math.max(1, prev + val));
  };

  if (isLoading) {
    return <div className="p-6 text-center text-gray-600">Loading product...</div>;
  }

  if (isError) {
    return <div className="p-6 text-center text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.image_url || '/images/placeholder.png'}
            alt={product.name}
            className="w-full h-auto rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-2 text-yellow-500">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="w-5 h-5" />
              ))}
              <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
            </div>

            <p className="text-lg text-gray-700 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-[#FF3D00] mb-4">${product.price}</p>

            {/* Availability and Prep Info */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">In Stock</span>
              <span>Prep time: 15 mins</span>
            </div>

            {/* Feature List */}
            <ul className="mt-6 space-y-2 text-gray-600 list-disc list-inside text-sm">
              <li>Freshly prepared with natural ingredients</li>
              <li>No artificial preservatives</li>
              <li>Eco-friendly packaging</li>
            </ul>
          </div>

          <div>
           

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

      {/* Product Tabs */}
      <ProductTabs description={product.description} />
    </div>
  );
};

export default ProductDetails;
