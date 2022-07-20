import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EachProduct from "./Components/EachProduct/EachProduct";
import Products from "./Components/Products/Products";
import "./app.css";
import NavDrawer from "./NavDrawer";
import Appbar from "./Appbar";
const App = () => {
  return (
    <div className="app-root">
      <section className="nav-drawer">
        <NavDrawer />
      </section>
      <section className="right-body">
        <div className="appbar">
          <Appbar />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<EachProduct />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
};

export default App;
