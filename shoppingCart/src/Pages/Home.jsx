import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(products);

  if (loading) return <div>Data is loading</div>;
  return (
    <header>
      <Navbar />
      <div className="product-container">
        {products && products.length > 0 ? (
          products?.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt="Product Image" />
              </div>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">
                  <span className="original-price">{product.price}</span>
                </p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div> No Data</div>
        )}
      </div>
    </header>
  );
}

export default Home;
