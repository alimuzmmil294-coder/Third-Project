import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import NavBar from "./Component/NavBar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Parent from "./Component/Parent";
import CounterReducer from "./Component/CounterReducer";

const App = () => {
  console.log("asdf");

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/productDetails/:id"
          element={<ProductDetails />}
        />
      </Routes>
      {/* <Parent /> */}
      <CounterReducer />
    </React.Fragment>
  );
};

export default App;
