import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import LocalStorageService from "../utils/HandleLocalStorage";

export const AppContext = createContext({
  user: null,
  setUser: () => {},
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  handleLogout: () => {},
  food_list: [],
});

const AppContextProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState({});
  const { getItem, setItem, clear } = LocalStorageService;


// Handle User
const getUser = getItem("auth");
const [user, setUser] = useState(getUser ? getUser : null);
// const navigate = useNavigate();

useEffect(() => {
  if (user) {
    setItem("auth", user);
  }
}, [user, setItem]);

  // Handle Logout
  const handleLogout = async () => {
    setLoading(true);
    try {
      let { error } = await supabase.auth.signOut();
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

  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        handleLogout: () => {},
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
