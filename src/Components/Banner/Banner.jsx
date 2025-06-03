import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUtensils, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false, // <-- This makes animations trigger on every scroll into view
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-[#FFF4F0] px-4 lg:px-0 shadow-md">
      <div className="wrapper rounded-xl py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text Section */}
        <div 
          className="max-w-xl" 
          data-aos="fade-right" 
          data-aos-duration="1000"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Delicious Meals Delivered to You
          </h2>

          <p
            className="text-gray-600 text-sm md:text-base mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Order your favorite dishes and enjoy fast, fresh delivery. Healthy, tasty, and just a click away!
          </p>

          <div 
            data-aos="fade-left" 
            data-aos-delay="400" 
            data-aos-duration="1000"
          >
            <Link to="/all-dishes">
              <button className="flex items-center gap-2 bg-[#FF3D00] hover:bg-orange-700 text-white px-5 py-3 rounded-full text-sm font-semibold transition duration-200">
                <FaUtensils />
                Order Now
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div 
          data-aos="zoom-in-left" 
          data-aos-delay="600" 
          data-aos-duration="1000"
        >
          <img
            src="/images/food_22.png"
            alt="Delicious food"
            className="w-full md:w-100 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
