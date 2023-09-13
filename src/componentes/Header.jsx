import React from "react";
import styles from "../styles/Header.css";

const Header = () => {
  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Facundo</a>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <a href="#inicio">INICIO</a>
            </li>
            <li>
              <a href="#sobremi">SOBRE MI</a>
            </li>
            <li>
              <a href="#portfolio">PORTAFOLIO</a>
            </li>
            <li>
              <a href="#skills">HABILIDADES</a>
            </li>
            <li>
              <a href="#curriculum">CURRICULUM</a>
            </li>{" "}
          </ul>
        </nav>
        <div className="nav-responsive">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
