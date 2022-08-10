import React from "react";
import { Link } from "react-router-dom";
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
      </nav>
    </header>
  );
};

export default NavBar;
