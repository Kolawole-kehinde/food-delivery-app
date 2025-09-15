
const ProductDetailsSkeleton = () => {
  return (
    <section className="px-4 lg:px-0 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 animate-pulse">
      
        <div className="bg-gray-300 rounded-2xl w-full md:w-[500px] h-[300px] md:h-[400px]"></div>

      
        <div className="flex flex-col flex-1 space-y-6 w-full max-w-xl">
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-300 rounded"></div>
            ))}
            <div className="h-6 bg-gray-300 rounded w-20 ml-4"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
          <div className="flex space-x-4">
            <div className="h-6 bg-gray-300 rounded w-24"></div>
            <div className="h-6 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-5 bg-gray-300 rounded w-4/5"></div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded w-40"></div>
            <div className="flex space-x-4">
              <div className="h-10 bg-gray-300 rounded flex-1"></div>
              <div className="h-10 bg-gray-300 rounded flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
