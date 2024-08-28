import React, { useEffect, useState } from "react";
import { useShop } from "../context/GlovalContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollections() {
  const { products } = useShop();
  const [latestProducts, setLatestProducts] = useState([]);
  console.log(latestProducts);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid gap-4 gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
