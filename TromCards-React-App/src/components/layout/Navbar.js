import React from "react";
import { Link } from "react-router-dom";
import "./layout.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/" className="nav-title">
        <h1>Tromcards</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
