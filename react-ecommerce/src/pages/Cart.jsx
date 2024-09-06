import React from "react";
import { useShop } from "../context/GlobalContext";
import Title from "../components/Title";

const Cart = () => {
  const { cart, setCart, currency } = useShop();

  const handleRemoveItem = (key) => {
    const updatedCart = { ...cart };
    delete updatedCart[key];
    setCart(updatedCart);
  };

  const handleQuantityChange = (key, value) => {
    const updatedCart = { ...cart };
    if (updatedCart[key]) {
      const newQuantity = value;
      if (newQuantity <= 0) {
        delete updatedCart[key];
      } else {
        updatedCart[key].quantity = newQuantity;
      }

      setCart(updatedCart);
    }
  };

  const cartItems = Object.values(cart);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 10.0; // Static shipping fee
  const total = subtotal + shippingFee;

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const key = `${item._id}-${item.size}`;
            return (
              <div
                className=" py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3"
                key={key}
              >
                <div className="flex items-start gap-6">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">Size: {item.size}</p>
                    <p className="text-sm">
                      Price: {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min="0"
                    onChange={(e) =>
                      handleQuantityChange(key, parseInt(e.target.value, 10))
                    }
                    className="w-16 border px-2 text-center"
                  />
                </div>
                <div className="text-right">
                  <button
                    className="text-red-500"
                    onClick={() => handleRemoveItem(key)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <div className="w-full">
              <div className="text-2xl">
                <div className="inline-flex gap-2 items-center mb-3">
                  <p className="text-gray-500">
                    CART{" "}
                    <span className="text-gray-700 font-medium">TOTALS</span>
                  </p>
                  <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>
                    {currency}
                    {subtotal.toFixed(2)}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Shipping Fee</p>
                  <p>
                    {currency} {shippingFee.toFixed(2)}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <b>Total</b>
                  <b>
                    {currency}
                    {total.toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
