import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import LocalStorageService from "../utils/HandleLocalStorage";

export const AppContext = createContext({
  user: null,
  setUser: () => {},
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
