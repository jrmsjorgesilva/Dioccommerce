import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
// import { logo } from "../../public/assets/img/JM-logo.png";

const NavBar = () => {
  return (
    <header className="nav">
      <div className="nav__logo">
        <img src="../../public/assets/img/JM-logo.png" alt="logo" />
      </div>
      <nav className="nav__container">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/about">
          About
        </Link>
        <Link className="nav__link" to="/products">
          Products
        </Link>
        <Link className="nav__link" to="/blog">
          Blog
        </Link>
        <span className="nav__link cart" style={{ float: "right" }}>
          <Link to="/cart">
            <FaCartPlus />
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
