import { createContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

export const AppContext = createContext({
  user: null,
  setUser: () => {},
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // NEW: Add clear cart function
  handleLogout: () => {},
  products: [],
});

const AppContextProvider = ({ children }) => {
  const { getItem, setItem, clear } = LocalStorageService;
  
  // Initialize cartItems from localStorage if available
  const initialCart = getItem("cart") || {};
  const [cartItems, setCartItems] = useState(initialCart);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = getItem("auth");
  const [user, setUser] = useState(getUser ? getUser : null);
  const navigate = useNavigate();

  // Persist user to localStorage when it changes
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    }
  }, [user, setItem]);

  // NEW: Persist cart to localStorage whenever it changes
  useEffect(() => {
    setItem("cart", cartItems);
  }, [cartItems, setItem]);

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");
  
      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        setProducts(data);
      }
    };
  
    fetchProducts();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      clear(); // Clears all localStorage
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newQuantity = Math.max((prev[itemId] || 0) - 1, 0);
      const newCart = { ...prev };
      
      if (newQuantity === 0) {
        delete newCart[itemId]; // Remove item if quantity reaches 0
      } else {
        newCart[itemId] = newQuantity;
      }
      
      return newCart;
    });
  };

  // NEW: Clear cart function
  const clearCart = () => {
    setCartItems({});
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        products,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart, // Add to context
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;