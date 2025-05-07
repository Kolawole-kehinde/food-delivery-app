import { useContext } from "react";
import FoodItems from "./FoodItems";
import { AppContext } from "../context/ContextApi";
import { Link } from "react-router-dom";

const TopDishes = ({
  category = "All",
  title = "Top Dishes",
  start = 0,
  end = 8,
  showMoreButton = true,
  searchTerm = "", // 🔍 Add searchTerm prop
}) => {
  const { products } = useContext(AppContext);

  const filteredList = products.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="wrapper px-4 lg:px-0 py-6">
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

      {showMoreButton && (
        <div className="text-center mt-6">
          <Link to="/all-dishes">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              More Dishes
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopDishes;
