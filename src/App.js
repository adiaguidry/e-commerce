import React, { useEffect } from "react";
import "./App.scss";
import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import { useRoutes } from "hookrouter";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import * as createAction from "./actions/productActions";

function App() {
  const routeResult = useRoutes(routes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createAction.getProducts());
  });
  return (
    <div className="App">
      <Nav />
      <div className="wrapper">{routeResult}</div>
      <Footer />
    </div>
  );
}

export default App;
