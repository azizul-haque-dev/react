import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/cart"} element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
