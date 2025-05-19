import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const FoodItems = ({ id, name, price, image_url, description }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
  } = useCartContext();

  const quantityInCart = cartItems.find(item => item.id === id)?.quantity || 0;
  const product = { id, name, price, image_url, description };

  const handleToggleFavorite = () => {
    const added = toggleFavorite(product);
    if (added) {
      toast.success(`${name} added to favorites`);
    } else {
      toast(`${name} removed from favorites`, { icon: '❌' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative">
        <Link to={`/product-details/${id}`}>
          <img
            src={image_url}
            alt={name}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </Link>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2">
          <FaHeart
            onClick={handleToggleFavorite}
            className={`text-xl cursor-pointer ${isFavorite(id) ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}
            title={isFavorite(id) ? "Remove from favorites" : "Add to favorites"}
          />

          {quantityInCart === 0 ? (
            <FaPlus
              onClick={() => addToCart(product)}
              className="text-primary text-xl cursor-pointer bg-white rounded-full p-1 hover:scale-110 transition"
              title="Add to cart"
            />
          ) : (
            <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md">
              <img
                onClick={() => removeFromCart(id)}
                src="/images/remove_icon_red.png"
                alt="Remove item"
                className="w-7 cursor-pointer"
              />
              <p className="text-sm font-medium">{quantityInCart}</p>
              <img
                onClick={() => addToCart(product)}
                src="/images/add_icon_green.png"
                alt="Add item"
                className="w-7 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <img src="/images/rating_starts.png" alt="Rating stars" className="w-16 h-auto" />
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-primary font-bold">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
