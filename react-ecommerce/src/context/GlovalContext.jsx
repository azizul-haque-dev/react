import { createContext, useContext } from "react";
import { products } from "../assets/frontend_assets/assets";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export function useShop() {
  return useContext(GlobalContext);
}
