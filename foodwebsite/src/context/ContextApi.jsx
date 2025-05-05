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
  products: [],
});

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from localStorage if available
    const savedCartItems = LocalStorageService.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });
  const [products, setProducts] = useState([]);
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

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        console.log("Fetched products:", data);
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
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
      };
      // Save to localStorage
      LocalStorageService.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
      };
      // Save to localStorage
      LocalStorageService.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
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
