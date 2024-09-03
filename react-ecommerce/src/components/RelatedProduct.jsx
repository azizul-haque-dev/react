import React, { useEffect, useState } from "react";
import { useShop } from "../context/GlobalContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProduct({ category, subCategory, product }) {
  const [related, setRelated] = useState([]);
  const { products } = useShop();
  function getRandomItems(arr, numItems) {
    // Shuffle the array
    let shuffledArray = arr.sort(() => 0.5 - Math.random());

    // Get the first numItems elements from the shuffled array
    return shuffledArray.slice(0, numItems);
  }

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) =>
        item.category === category &&
        item !== product &&
        item.subCategory === subCategory
    );

    const result = getRandomItems(filteredProducts, 5);

    setRelated(result);
  }, [products, category, subCategory]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="RELATED" text2="PRODUCTS" />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid gap-4 gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related?.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
