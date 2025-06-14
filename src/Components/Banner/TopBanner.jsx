import React from "react";
import { FaLeaf, FaShippingFast, FaCreditCard } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const features = [
  {
    icon: <FaLeaf className="text-[#FF3D00] w-6 h-6" />,
    title: "Fresh Ingredients",
    description: "Only the freshest and natural ingredients in every meal.",
    direction: "left",
  },
  {
    icon: <FaShippingFast className="text-[#FF3D00] w-6 h-6" />,
    title: "Fast Delivery",
    description: "Your order delivered hot and on time, every time.",
    direction: "up",
  },
  {
    icon: <FaCreditCard className="text-[#FF3D00] w-6 h-6" />,
    title: "Easy Payment",
    description: "Multiple secure payment options at checkout.",
    direction: "right",
  },
];

const TopBanner = () => {
  return (
    <div className="wrapper bg-white py-12 px-4 lg:px-0 rounded-xl shadow-md border border-gray-100 mb-6">
      {/* Heading Animation */}
      <Slide direction="down" duration={600} triggerOnce={false}>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us?
        </h2>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
        {features.map((feature, idx) => (
          <Slide
            key={idx}
            direction={feature.direction}
            duration={600}
            triggerOnce={false}
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div className="bg-orange-50 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
