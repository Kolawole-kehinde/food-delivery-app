import { createContext } from "react";
import { food_list } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ 
        food_list 
        }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
