import React from "react";
import PageBanner from "./common/pageBanner";
import CartTable from "./common/cartTable";
import CartTotal from "./common/cartTotal";

const Cart = () => {
  return (
    <div>
      <PageBanner title={"cart"} />

      <CartTable />
    </div>
  );
};

export default Cart;
