import { useState, useCallback } from "react";

const FoodItems = ({ name, price, image, description }) => {
  const [itemCount, setItemCount] = useState(0);

//   const handleAdd = useCallback(() => setItemCount(1), []);
//   const increment = useCallback(() => setItemCount(prev => prev + 1), []);
//   const decrement = useCallback(() => setItemCount(prev => Math.max(prev - 1, 0)), []);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative">
        <img
          src={image}
          alt={`Food item - ${name}`}
          className="w-full h-48 object-cover rounded-t-xl"
        />

        {!itemCount ? (
          <img
            onClick={() => setItemCount(prev=> prev + 1)}
            src="/images/add_icon_white.png"
            alt="Add to cart"
            aria-label="Add item"
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white p-2 rounded-full shadow-md">
            <img
              onClick={() => setItemCount(prev => (prev-1))}
              src="/images/remove_icon_red.png"
              alt="Remove item"
              aria-label="Remove one item"
              className="w-7 cursor-pointer"
            />
            <p className="text-sm font-medium">{itemCount}</p>
            <img
              onClick={() => setItemCount(prev => (prev+1))}
              src="/images/add_icon_green.png"
              alt="Add item"
              aria-label="Add one more"
              className="w-7 cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <img
            src="/images/rating_starts.png"
            alt="Rating stars"
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
