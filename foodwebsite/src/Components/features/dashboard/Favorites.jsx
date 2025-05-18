
import React from "react";
import { useNavigate } from "react-router-dom";

const Favorites = ({ favorites }) => {
  const navigate = useNavigate();

  return (
    <section id="favorites" className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Favorites</h3>
      <div className="flex gap-4 overflow-x-auto">
        {favorites.length > 0 ? (
          favorites.map(({ id, name, image_url }, i) => (
            <div
              key={i}
              onClick={() => navigate(`/product-details/${id}`)}
              className="flex flex-col items-center text-sm text-gray-600 cursor-pointer hover:text-primary"
            >
              <img
                src={image_url}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <span className="mt-1 text-center">{name}</span>
            </div>
          ))
        ) : (
          <p>No favorite items yet</p>
        )}
      </div>
    </section>
  );
};

export default Favorites;
