import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSellerProducts from "../components/BestSellerProducts";
import OurPolicy from "../components/OurPolicy";
import NewsLaterBox from "../components/NewsLaterBox";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellerProducts />
      <OurPolicy />
      <NewsLaterBox />
      <Footer />
    </div>
  );
};

export default Home;
