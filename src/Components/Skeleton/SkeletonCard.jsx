
const SkeletonCard = () => {
    return (
      <div className="animate-pulse bg-white shadow rounded-lg p-4">
        <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  };
  
  export default SkeletonCard;
  