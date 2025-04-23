import { useContext } from "react";
import { AppContext } from "../context/ContextApi";
import FoodItems from "./FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(AppContext);

  // Ensure the category is either "All" or a specific category
  const filteredList = !category || category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className="container mx-auto px-4 md:px-20 py-6">
      <h2 className="text-2xl font-bold mb-6 text-start">Top Dishes Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList.length === 0 ? (
          <p className="text-center col-span-full">No items found</p>
        ) : (
          filteredList.map((item) => (
            <FoodItems key={item.id} {...item} />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
