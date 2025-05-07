import React, { useState, useEffect, useMemo } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const FoodItems = ({ id, name, price, image_url, description }) => {
  const { cartItems, addToCart, removeFromCart } = useCartContext();

  const quantityInCart = cartItems.find(item => item.id === id)?.quantity || 0;

  const product = useMemo(() => ({ id, name, price, image_url, description }), [
    id, name, price, image_url, description
  ]);

  // State for managing favorites
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Toggle favorite item and show toast
  const toggleFavorite = () => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === id);
    let updatedFavorites;

    if (isAlreadyFavorite) {
      // Remove item from favorites
      updatedFavorites = favorites.filter(fav => fav.id !== id);
      toast(`${name} removed from favorites`, { icon: '❌' }); 
    } else {
      // Add item to favorites
      updatedFavorites = [...favorites, product];
      toast.success(`${name} added to favorites`); 
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
  };

  const isFavorite = favorites.some(fav => fav.id === id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative">
        <Link to={`/product-details/${id}`} className="block">
          <img
            src={image_url || "/images/default_image.png"}  // Fallback image
            alt={`Food item - ${name}`}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </Link>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2">
          {/* Heart icon for adding/removing from favorites */}
          <FaHeart
            onClick={toggleFavorite}
            className={`text-xl cursor-pointer ${isFavorite ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          />

          {/* Add to cart functionality */}
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
          <img
            src="/images/rating_stars.png"
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
