import React from "react";

const Showcase = () => {
  return (
    <section className="container">
      <div className="relative h-[478.1px] bg-ShowcaseImg bg-center bg-cover bg-no-repeat rounded-2xl flex items-center">
        {/* Text Content */}
        <div className="max-w-[50%] flex flex-col items-start gap-4 px-10 bottom-[10%] text-white">
          <h2 className="text-5xl font-bold leading-tight">
            Order your <br /> favourite food here
          </h2>
          <p className="text-lg leading-relaxed opacity-80">
            Choose from a diverse menu, fresh ingredients, and expertly made 
            meals. Savor the best dishes from around the world.
          </p>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
