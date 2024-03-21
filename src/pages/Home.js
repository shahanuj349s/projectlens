import React from "react";
import Carousel from "../components/Home/Carousel/Carousel";
import CompanyDescription from "../components/Home/CompanyDescription/CompanyDescription";
import ProductDisplay from "../components/Home/ProductDisplay/ProductDisplay";
import ImageDisplay from "../components/Home/ImageDisplay/ImageDisplay";
import FAQs from "../components/Home/FAQs/FAQs";

function Home() {
  return (
    <div>
      <Carousel />
      <CompanyDescription />
      <ProductDisplay />
      <ImageDisplay />
      <FAQs />
    </div>
  );
}

export default Home;
