import React from "react";

const Showcase = () => {
  return (
    <section className="container px-4 md:px-8 lg:px-16">
      <div className="relative h-[300px] md:h-[400px] lg:h-[480px] bg-ShowcaseImg bg-center bg-cover bg-no-repeat rounded-2xl flex items-center">
        
        {/* Text Content */}
        <div className="max-w-full md:max-w-[70%] lg:max-w-[50%] flex flex-col items-start gap-4 px-6 md:px-10 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
            Order your <br /> favourite food here
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80">
            Choose from a diverse menu, fresh ingredients, and expertly made 
            meals. Savor the best dishes from around the world.
          </p>
          <button className="bg-white text-gray-800 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
            View Menu
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Showcase;
