import React from "react";
import DashBoard from "./comps/DashBoard";
import Products from "./comps/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./comps/Navbar";
import Heading from "./comps/Heading";

function App() {
  return (
    <>
          <PrimarySearchAppBar />
          <Heading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
