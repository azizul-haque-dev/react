import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState({}); // Cart state as an object

  function addToCart(item) {
    const { _id, size } = item;
    const key = `${_id}-${size}`; // Create a unique key for the item
console.log(key);

    setCart(prevCart => {
      const updatedCart = { ...prevCart };

      if (updatedCart[key]) {
        // If item already in cart, increment the quantity
        updatedCart[key].quantity += 1;
      } else {
        // If item not in cart, add it with quantity 1
        updatedCart[key] = { ...item, quantity: 1 };
      }

      return updatedCart;
    });
  }

  function getCartItemCount() {
    // Calculate the total count of items in the cart
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  }
  const cartItems = Object.values(cart);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 10.0;

  const value = {
    subtotal,shippingFee,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cart, 
    setCart,
    getCartItemCount 
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export function useShop() {
  return useContext(GlobalContext);
}
