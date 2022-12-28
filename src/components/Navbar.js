import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Categories from "./Categories";
import { FaUser } from "react-icons/fa";
import Home from "./Home";
import styles from '../sass/_navbar.module.scss'

const Navbar = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles['nav-link']}>
          <h1 className={styles.heading}>Bookstore</h1>
          <nav className={styles.nav}>
            <Link className={styles.navlink} to="/">Home</Link>
            <Link className={styles.navlink} to="Categories">Categories</Link>
          </nav>
        </div>
        <div className={styles['nav-icon']}>
                  <FaUser className={styles.icon} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default Navbar;
