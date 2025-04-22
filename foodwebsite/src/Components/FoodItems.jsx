const FoodItems = ({ name, price, image, description }) => {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <img
              src="/images/rating_starts.png"
              alt="rating"
              className="w-16 h-auto" 
            />
          </div>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-primary font-bold">${price}</p>
        </div>
      </div>
    );
  };
  
  export default FoodItems;
  