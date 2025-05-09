import React from "react";
import { menu_list } from "../assets/assets";
import { motion } from "framer-motion";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="wrapper px-4 lg:px-0 py-10 text-left overflow-hidden">
      {/* Heading with animation */}
      <motion.h1
        className="text-2xl md:text-3xl text-[#262626] font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Menu
      </motion.h1>

      {/* Description with animation */}
      <motion.p
        className="max-w-[500px] text-black text-lg md:text-xl text-left mx-auto md:mx-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer.
      </motion.p>

      {/* Scrollable Menu List with scrollbar hidden */}
      <motion.div
        className="flex gap-6 md:gap-8 text-center my-5 overflow-x-auto hide-scrollbar px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {menu_list.map((item, index) => (
          <motion.div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex flex-col items-center mt-2 text-black text-[18px] md:text-[20px] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Menu Image with hover effect */}
            <motion.img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[80px] md:w-[100px] min-w-[70px] md:min-w-[80px] object-contain rounded-full transition duration-200 ${
                category === item.menu_name
                  ? "border-2 border-[#FF3D00] p-1"
                  : ""
              }`}
              whileHover={{ rotate: 2 }}
            />
            <p className="mt-2 text-base md:text-xl">{item.menu_name}</p>
          </motion.div>
        ))}
      </motion.div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
