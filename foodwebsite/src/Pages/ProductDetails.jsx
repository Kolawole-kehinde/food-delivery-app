import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { FaStar, FaChevronLeft, FaComments, FaCheck, FaArrowAltCircleLeft } from 'react-icons/fa';
import ProductTabs from '../components/ProductTabs';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProduct(id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

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
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
        <FaArrowAltCircleLeft onClick={() => navigate(-1)} className="w-4 h-4" />
          <h2 className="text-base">Back</h2>
        </div>
        <button className="border border-gray-300 text-sm px-4 py-1 rounded-md flex items-center gap-2 hover:bg-gray-100">
          <FaComments className="w-4 h-4" />
          Chat Seller
        </button>
      </div>

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

            {/* Price */}
            <p className="text-2xl font-semibold text-[#FF3D00] mb-4">${product.price}</p>

            <div className="flex items-center mt-2 text-yellow-500">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="w-5 h-5" />
              ))}
              <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
            </div>

            <p className="text-base text-gray-700 mt-4">{product.description}</p>

            {/* Availability and Prep Info */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">In Stock</span>
              <span>Prep time: 15 mins</span>
            </div>

            {/* Feature List */}
            <ul className="mt-4 space-y-2 text-gray-600 list-none text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Freshly prepared with natural ingredients
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                No artificial preservatives
              </li>
              <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
                Eco-friendly packaging
              </li>
            </ul>
          </div>

          <div>
            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-2">
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

            {/* Buttons for Add to Cart and Checkout */}
            <div className="flex gap-4 mt-4">
              <button
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-2 rounded-md shadow-md "
              >
                Add to Cart
              </button>

              <button
                className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-4 py-2 rounded-md shadow-md"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs description={product.description} />
    </div>
  );
};

export default ProductDetails;
