import { createContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

export const AppContext = createContext({
  user: null,
  setUser: () => {},
  products: [],
  handleLogout: () => {},
});

const AppContextProvider = ({ children }) => {
  const { getItem, setItem, clear } = LocalStorageService;

  const [user, setUser] = useState(getItem("auth") || null);
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (user) setItem("auth", user);
  }, [user]);

  // Fetch product 
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  // Handle user logout
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

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        products,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
