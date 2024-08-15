import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { removeCart, updateQuantity } from "../Features/CartSlicer";

function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calculate total price and total quantity when cart changes
    const price = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotalPrice(price);
    setTotalQuantity(quantity);
  }, [cart]);

  const handleQuantityChange = (id, amount) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + amount;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="img-content">
                  <img
                    src={item.image}
                    alt="Product Image"
                    className="product-image"
                  />
                </div>

                <div className="details">
                  <div className="details-inner">
                    <h2 className="product-name">{item.title}</h2>
                    <p className="product-price">${item.price}</p>
                  </div>

                  <div className="quantity-selector">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <p className="product-quantity">{item.quantity}</p>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="remove-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No items in cart</div>
          )}
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <p>
            Total Items: <span id="total-quantity">{totalQuantity}</span>
          </p>
          <p>
            Total Price: <span id="total-price">${totalPrice.toFixed(2)}</span>
          </p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
