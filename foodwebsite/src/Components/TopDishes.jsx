import { useContext } from "react";
import { AppContext } from "../context/ContextApi";
import FoodItems from "./FoodItems";
import { Link } from "react-router-dom";


const TopDishes = ({ category = "All", title = "Top Dishes", start = 0, end = 8 }) => {
  const { food_list } = useContext(AppContext);

  // Filter by category
  const filteredList = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className="container mx-auto px-4 md:px-20 py-6">
      <h2 className="text-2xl font-bold mb-6 text-start">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList.length === 0 ? (
          <p className="text-center col-span-full">No items found</p>
        ) : (
          filteredList.slice(start, end).map((item) => (
            <FoodItems key={item.id} {...item} />
          ))
        )}
      </div>
      <div className="text-center mt-6">
        <Link to="/all-dishes">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            More Dishes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopDishes;
