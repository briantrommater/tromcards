import React from "react";
import "./layout.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      Copyright &copy; {new Date().getFullYear()} TromCards
    </footer>
  );
};

export default Footer;
