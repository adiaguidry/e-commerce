import React from "react";
import PageBanner from "./common/pageBanner";
import Cards from "./common/cards";
import Category from "./common/category";

const Shop = () => {
  return (
    <div>
      <PageBanner title={"shop"} />
      <div className="shop-layout">
        <Category />
        <Cards />
      </div>
    </div>
  );
};

export default Shop;
