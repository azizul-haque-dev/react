import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/GlobalContext";

function ProductItem({ product }) {
  const { currency } = useShop();
  return (
    <Link
      to={`/product/${product._id}`}
      className="text-gray-700 cursor-pointer"
    >
      <div className=" overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={product.image[0]}
          alt="product image"
        />
      </div>
      <p className="pt-3 pb-1 text-sm"> {product.name}</p>
      <p className=" text-sm font-medium">
        {currency}
        {product.price}
      </p>
    </Link>
  );
}

export default ProductItem;
