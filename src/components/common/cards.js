import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <div>
      <div>
        <h4>Showing 8 of 8 Products</h4>
      </div>
      <div className="cards-layout">
        <Card title={"make lemonade"} price={"29.99"} />
      </div>
    </div>
  );
};

export default Cards;
