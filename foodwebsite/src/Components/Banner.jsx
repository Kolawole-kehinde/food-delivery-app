import React from 'react';
import { FaUtensils, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative px-4 md:px-20 bg-[#FFF4F0] rounded-xl p-6 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          Delicious Meals Delivered to You
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          Order your favorite dishes and enjoy fast, fresh delivery. Healthy, tasty, and just a click away!
        </p>
        <button className="flex items-center gap-2 bg-[#FF3D00] hover:bg-orange-700 text-white px-5 py-3 rounded-full text-sm font-semibold transition duration-200">
          <FaUtensils />
          Order Now
          <FaArrowRight />
        </button>
      </div>

      {/* Image or Icon */}
      <img
        src="/images/food_22.png" // replace with your actual image path
        alt="Delicious food"
        className="w-40 md:w-60 h-auto object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Banner;
