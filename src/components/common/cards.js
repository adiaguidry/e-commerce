import React, { useEffect } from "react";
import Card from "./card";
import { useSelector } from "react-redux";

const Cards = () => {
  const products = useSelector(state => state.products.allProducts);

  useEffect(() => {
    console.log(products);
  });
  return (
    <div>
      <div>
        <h4>Showing 8 of 8 Products</h4>
      </div>
      <div className="cards-layout">
        {products.map(p => (
          <Card product={p} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
