import React, { createContext, useContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load cart, buyNow, and favorites from localStorage on mount
  useEffect(() => {
    const storedCart = LocalStorageService.getItem("cart");
    if (storedCart) setCartItems(storedCart);

    const storedBuyNow = LocalStorageService.getItem("buyNow");
    if (storedBuyNow) setBuyNowItem(storedBuyNow);

    const storedFavorites = LocalStorageService.getItem("favorites");
    if (storedFavorites) setFavorites(storedFavorites);
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    if (cartItems.length > 0) {
      LocalStorageService.setItem("cart", cartItems);
    } else {
      LocalStorageService.removeItem("cart");
    }
  }, [cartItems]);

  // Save buyNow item to localStorage whenever buyNowItem state changes
  useEffect(() => {
    if (buyNowItem) {
      LocalStorageService.setItem("buyNow", buyNowItem);
    } else {
      LocalStorageService.removeItem("buyNow");
    }
  }, [buyNowItem]);

  // Save favorites to localStorage whenever favorites state changes
  useEffect(() => {
    if (favorites.length > 0) {
      LocalStorageService.setItem("favorites", favorites);
    } else {
      LocalStorageService.removeItem("favorites");
    }
  }, [favorites]);

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    LocalStorageService.removeItem("cart");
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Buy Now Functions
  const buyNow = (product, quantity = 1) => {
    setBuyNowItem({ ...product, quantity });
  };

  const clearBuyNow = () => {
    setBuyNowItem(null);
    LocalStorageService.removeItem("buyNow");
  };

  // Favorites Functions
  const toggleFavorite = (product) => {
    const exists = favorites.some((fav) => fav.id === product.id);
    const updated = exists
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];

    setFavorites(updated);
    return !exists; // returns true if added, false if removed
  };

  const isFavorite = (productId) =>
    favorites.some((fav) => fav.id === productId);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        buyNowItem,
        buyNow,
        clearBuyNow,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
