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
  handleLogout: () => {},
  products: [], // replace food_list with products
});

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]); // NEW state for Supabase products
  const [loading, setLoading] = useState(false);

  const { getItem, setItem, clear } = LocalStorageService;
  const getUser = getItem("auth");
  const [user, setUser] = useState(getUser ? getUser : null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setItem("auth", user);
    }
  }, [user, setItem]);

  // 🔄 Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        if (error) {
          console.error("Supabase error:", error);
          toast.error("Failed to load products.");
        }
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
      clear();
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
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
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
