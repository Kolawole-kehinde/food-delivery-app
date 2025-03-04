import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = () => {
  return (
    <div className="container py-10 text-left">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl text-[#262626] font-medium ">
        Explore Our Menu
      </h1>
      <p className="max-w-[500px] text-black text-lg md:text-xl text-left mx-auto md:mx-0">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
      </p>

      {/* Scrollable Menu List */}
      <div className="flex gap-6 md:gap-8 text-center my-5 overflow-x-auto no-scrollbar px-4 md:px-0">
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center mt-2 text-black text-[18px] md:text-[20px] cursor-pointer"
          >
            {/* Menu Image */}
            <img 
              src={item.menu_image} 
              alt={item.menu_name} 
              className="w-[80px] md:w-[100px] min-w-[70px] md:min-w-[80px] cursor-pointer rounded-full transition duration-200"
            />
            <p className="mt-2">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
