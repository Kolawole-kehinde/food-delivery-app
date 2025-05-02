import { useContext } from "react";
import { AppContext } from "../context/ContextApi";
import { FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const FoodItems = ({ id, name, price, image_url, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative">
        <Link to={`/product-details/${id}`} className="block">
          <img
            src={image_url}
            alt={`Food item - ${name}`}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </Link>

        {!cartItems[id] ? (
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2">
            <FaHeart
              className="text-red-500 text-xl cursor-pointer hover:text-red-600 transition"
              title="Add to favorites"
            />

            <FaPlus
              onClick={() => addToCart(id)}
              className="text-primary text-xl cursor-pointer bg-white rounded-full p-1 hover:scale-110 transition"
              title="Add to cart"
            />
          </div>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white p-2 rounded-full shadow-md">
            <img
              onClick={() => removeFromCart(id)}
              src="/images/remove_icon_red.png"
              alt="Remove item"
              className="w-7 cursor-pointer"
            />
            <p className="text-sm font-medium">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src="/images/add_icon_green.png"
              alt="Add item"
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
