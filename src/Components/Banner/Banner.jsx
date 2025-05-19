import React from 'react';
import { FaUtensils, FaArrowRight } from 'react-icons/fa';
import MotionWrapper from '../Animation/MotionWrapper';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <section className="bg-[#FFF4F0] px-4 lg:px-0 shadow-md">
      <MotionWrapper type="zoomIn" className="wrapper rounded-xl py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <MotionWrapper type="fadeInLeft">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2">
              Delicious Meals Delivered to You
            </h2>
          </MotionWrapper>
          <MotionWrapper type="fadeInUp">
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Order your favorite dishes and enjoy fast, fresh delivery. Healthy, tasty, and just a click away!
            </p>
          </MotionWrapper>
          <MotionWrapper type="fadeInRight">
            <Link to="/all-dishes">
            <button className="flex items-center gap-2 bg-[#FF3D00] hover:bg-orange-700 text-white px-5 py-3 rounded-full text-sm font-semibold transition duration-200">
              <FaUtensils />
              Order Now
              <FaArrowRight />
            </button>
            </Link>
                
          </MotionWrapper>
        
        </div>

        <MotionWrapper type="zoomIn">
          <img
            src="/images/food_22.png"
            alt="Delicious food"
            className="w-full md:w-100 h-auto object-cover rounded-lg shadow-lg"
          />
        </MotionWrapper>
      </MotionWrapper>
    </section>
  );
};

export default Banner;
