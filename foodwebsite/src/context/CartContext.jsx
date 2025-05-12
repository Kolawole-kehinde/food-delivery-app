import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import LocalStorageService from '../utils/HandleLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Helper functions for localStorage
  const saveToLocalStorage = useCallback((key, value) => {
    if (value.length > 0) {
      LocalStorageService.setItem(key, value);
    } else {
      LocalStorageService.removeItem(key);
    }
  }, []);

  const loadFromLocalStorage = useCallback((key) => {
    return LocalStorageService.getItem(key);
  }, []);

  // Load cart, buyNow, and favorites from localStorage on mount
  useEffect(() => {
    const storedCart = loadFromLocalStorage('cart');
    if (storedCart) setCartItems(storedCart);

    const storedBuyNow = loadFromLocalStorage('buyNow');
    if (storedBuyNow) setBuyNowItem(storedBuyNow);

    const storedFavorites = loadFromLocalStorage('favorites');
    if (storedFavorites) setFavorites(storedFavorites);
  }, [loadFromLocalStorage]);

  // Save to localStorage on state change
  useEffect(() => {
    saveToLocalStorage('cart', cartItems);
  }, [cartItems, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage('buyNow', buyNowItem ? [buyNowItem] : []);
  }, [buyNowItem, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage('favorites', favorites);
  }, [favorites, saveToLocalStorage]);

  // Cart Functions
  const addToCart = useCallback((product, quantity = 1) => {
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
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    LocalStorageService.removeItem('cart');
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  // Buy Now Functions
  const buyNow = useCallback((product, quantity = 1) => {
    setBuyNowItem({ ...product, quantity });
  }, []);

  const clearBuyNow = useCallback(() => {
    setBuyNowItem(null);
    LocalStorageService.removeItem('buyNow');
  }, []);

  // Favorites Functions
  const toggleFavorite = useCallback((product) => {
    const exists = favorites.some((fav) => fav.id === product.id);
    const updated = exists
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];

    setFavorites(updated);
    return !exists; // returns true if added, false if removed
  }, [favorites]);

  const isFavorite = useCallback((productId) =>
    favorites.some((fav) => fav.id === productId), [favorites]);

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
