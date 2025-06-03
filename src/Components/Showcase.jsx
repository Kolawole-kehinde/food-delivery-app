import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const AnimateOnScroll = ({ children, animationClass, animationDelay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          const handleAnimationEnd = () => {
            setIsVisible(false);
            node.removeEventListener('animationend', handleAnimationEnd);
          };
          node.addEventListener('animationend', handleAnimationEnd);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`animate__animated ${isVisible ? animationClass : ''}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {children}
    </div>
  );
};

const Showcase = () => {
  return (
    <section className="wrapper px-4 lg:px-0">
      <AnimateOnScroll animationClass="animate__zoomIn" animationDelay={0}>
        <div
          className="w-full h-[300px] md:h-[400px] lg:h-[480px] bg-ShowcaseImg bg-center bg-cover bg-no-repeat rounded-2xl flex items-center"
        >
          <div className="max-w-full md:max-w-[70%] lg:max-w-[50%] flex flex-col items-start gap-6 px-6 md:px-10 text-white">
            <AnimateOnScroll animationClass="animate__zoomIn" animationDelay={0}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
                Order Your <br /> Favourite Food Here
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate__fadeInUp" animationDelay={300}>
              <p className="text-base md:text-lg leading-relaxed opacity-100">
                Choose from a diverse menu, fresh ingredients, and expertly made meals. Savor the best dishes from around the world.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate__fadeInRight" animationDelay={600}>
              <Link to="/all-dishes">
                <button className="bg-white text-gray-800 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                  View Menu
                </button>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Showcase;
