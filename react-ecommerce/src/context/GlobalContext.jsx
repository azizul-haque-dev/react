import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart([...cart, item]);
    }
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cart,
    setCart
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export function useShop() {
  return useContext(GlobalContext);
}
