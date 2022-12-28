import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Categories from "./Categories";
import Home from "./Home";

const Navbar = (props) => {
  return (
    <>
      <div>
        <h1>Bookstore</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="Categories">Categories</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default Navbar;
