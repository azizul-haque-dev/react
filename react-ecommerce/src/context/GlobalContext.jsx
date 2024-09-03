import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export function useShop() {
  return useContext(GlobalContext);
}
