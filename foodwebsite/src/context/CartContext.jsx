import React, { createContext, useContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = LocalStorageService.getItem("cart");
    if (storedCart) {
      setCartItems(storedCart);
    }
    const storedBuyNow = LocalStorageService.getItem("buyNow");
    if (storedBuyNow) {
      setBuyNowItem(storedBuyNow);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    LocalStorageService.setItem("cart", cartItems);
  }, [cartItems]);

  // Save buyNowItem to localStorage when it changes
  useEffect(() => {
    if (buyNowItem) {
      LocalStorageService.setItem("buyNow", buyNowItem);
    } else {
      LocalStorageService.removeItem("buyNow");
    }
  }, [buyNowItem]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
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
    LocalStorageService.removeItem("cart");
    setCartItems([]);
  };

  // Handle Buy Now functionality
  const buyNow = (product, quantity = 1) => {
    setBuyNowItem({ ...product, quantity });
  };

  const clearBuyNow = () => {
    setBuyNowItem(null);
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
