import React from 'react';
import { FaUtensils, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
   <section className="bg-[#FFF4F0] px-4 lg:px-0 shadow-md">
     <div className="relative wrapper rounded-xl py-6 md:py-10  flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2">
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
        className="w-60 md:w-100 h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
   </section>
  );
};

export default Banner;
