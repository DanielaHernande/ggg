import React, { useState } from "react";
import "../../components/header/headerStyles.css";

import logo from "../../assets/logo/Logos.webp";

export const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Kiwi logo" className="logo-img" />
      </div>

      {/* Barra de busqueda */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="icons">
        <button onClick={null} className="icon-btn cart-btn">
          <i className="fas fa-shopping-cart icon cart"></i>
        </button>

        <button onClick={null} className="icon-btn user-btn">
          <i className="fas fa-user icon user"></i>
        </button>
      </div>
    </header>
  );
};
