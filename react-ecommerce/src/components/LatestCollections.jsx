import React from "react";
import { useShop } from "../context/GlovalContext";
import Title from "./Title";

function LatestCollections() {
  const { products } = useShop();
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      </div>
    </div>
  );
}

export default LatestCollections;
