import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSellerProducts from "../components/BestSellerProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellerProducts />
    </div>
  );
};

export default Home;
