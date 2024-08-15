import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../Features/CartSlicer";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantity] = useState({});

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  // Fetch products from API
  async function fetchProduct() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      if (data) {
        setProducts(data);
        const initialQuantity = data.reduce(
          (acc, item) => ({ ...acc, [item.id]: 1 }),
          {}
        );
        setQuantity(initialQuantity);
      }
    } catch (e) {
      console.error("Failed to fetch products", e);
    } finally {
      setLoading(false);
    }
  }

  // Fetch products on component mount
  useEffect(() => {
    fetchProduct();
  }, []);

  // Handle adding/removing products from cart
  function handleCart(product) {
    const quantity = quantities[product.id];
    dispatch(addCart({ ...product, quantity }));
  }

  function removeItem(product) {
    dispatch(removeCart(product.id));
  }

  // Handle quantity input change
  function handleQuantityChange(id, event) {
    const value = Math.max(Number(event.target.value) || 1, 1); // Ensure quantity is at least 1
    setQuantity((prev) => ({ ...prev, [id]: value }));
  }

  // Loading state
  if (loading) {
    return (
      <div className="skeleton-container">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div className="skeleton-card" key={index}>
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text small"></div>
            </div>
          ))}
      </div>
    );
  }

  // Render products
  return (
    <header>
      <Navbar />
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <div className="bottom-content">
                  <p className="product-price">
                    <span className="original-price">${product.price}</span>
                  </p>
                  <div className="quantity-selector">
                    <input
                      type="number"
                      value={quantities[product.id] || 1}
                      onChange={(event) =>
                        handleQuantityChange(product.id, event)
                      }
                      className="quantity-input"
                      min="1"
                    />
                  </div>
                </div>
                <button
                  onClick={
                    cart.some((item) => item.id === product.id)
                      ? () => removeItem(product)
                      : () => handleCart(product)
                  }
                  className="add-to-cart"
                >
                  {cart.some((item) => item.id === product.id)
                    ? "Remove From Cart"
                    : "Add To Cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No Products Available</div>
        )}
      </div>
    </header>
  );
}

export default Home;
