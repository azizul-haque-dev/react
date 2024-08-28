import React, { useEffect, useState } from "react";
import { useShop } from "../context/GlovalContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

function BestSellerProducts() {
  const { products } = useShop();
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const filtered = products.filter((product) => product.bestseller);
    setBestSeller(filtered.slice(0, 5));
  }, []);
  console.log({ bestSeller });

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w3/4 m-auto text-sx sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid gap-4 gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSeller?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellerProducts;
