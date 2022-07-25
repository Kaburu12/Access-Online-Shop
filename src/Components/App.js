import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import ProductList from "./ProductLIst";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact"



function App() {
  return (
   
    <div>
      <NavBar />
      <Routes>
        <Route path="/products" element={<ProductList/>} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={ < Contact/>}/>
        <Route path="/" element={ <Home />}/>
      </Routes>
    </div>
  );
}

export default App;