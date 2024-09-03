import React from "react";
import { useShop } from "../context/GlobalContext";

const Cart = () => {
  const { cart } = useShop();

  console.log(cart);

  return <div>Cart</div>;
};

export default Cart;
