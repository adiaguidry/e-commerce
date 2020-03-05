import React from "react";
import Home from "../components/home";
import Shop from "../components/shop";
import Cart from "../components/cart";
import About from "../components/about";

const routes = {
  "/": () => <Home />,
  "/shop": () => <Shop />,
  "/cart": () => <Cart />,
  "/about": () => <About />
};

export default routes;
