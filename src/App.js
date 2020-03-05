import React from "react";
import "./App.scss";
import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import { useRoutes } from "hookrouter";
import routes from "./routes/routes";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Nav />
      <div className="wrapper">{routeResult}</div>
      <Footer />
    </div>
  );
}

export default App;
