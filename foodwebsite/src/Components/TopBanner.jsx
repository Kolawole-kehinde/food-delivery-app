import React from "react";
import { FaLeaf, FaShippingFast, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLeaf className="text-[#FF3D00] w-6 h-6" />,
    title: "Fresh Ingredients",
    description: "Only the freshest and natural ingredients in every meal.",
  },
  {
    icon: <FaShippingFast className="text-[#FF3D00] w-6 h-6" />,
    title: "Fast Delivery",
    description: "Your order delivered hot and on time, every time.",
  },
  {
    icon: <FaCreditCard className="text-[#FF3D00] w-6 h-6" />,
    title: "Easy Payment",
    description: "Multiple secure payment options at checkout.",
  },
];

const TopBanner = () => {
  return (
    <div className="wrapper bg-white py-12 px-4 lg:px-0 rounded-xl shadow-md border border-gray-100 mb-6">
      {/* Heading Animation */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        {/* Features List with Animation */}
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }} // Staggered delay for each feature
          >
            <div className="bg-orange-50 p-3 rounded-full">
              {feature.icon}
            </div>
            <div>
              <motion.h3
                className="text-lg font-semibold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
