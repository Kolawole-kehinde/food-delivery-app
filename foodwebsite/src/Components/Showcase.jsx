import React from 'react';
import MotionWrapper from './Animation/MotionWrapper';


const Showcase = () => {
  return (
    <section className="wrapper px-4 lg:px-0">
      <MotionWrapper type="zoomIn">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[480px] bg-ShowcaseImg bg-center bg-cover bg-no-repeat rounded-2xl flex items-center">
          <div className="max-w-full md:max-w-[70%] lg:max-w-[50%] flex flex-col items-start gap-4 px-6 md:px-10 text-white">
            <MotionWrapper type="fadeInLeft">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
                Order Your <br /> Favourite Food Here
              </h2>
            </MotionWrapper>

            <MotionWrapper type="fadeInUp">
              <p className="text-base md:text-lg leading-relaxed opacity-100">
                Choose from a diverse menu, fresh ingredients, and expertly made meals. Savor the best dishes from around the world.
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeInRight">
              <button className="bg-white text-gray-800 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                View Menu
              </button>
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Showcase;
