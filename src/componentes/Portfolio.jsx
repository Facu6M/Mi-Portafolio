import React from "react";
import styles from "../styles/Portfolio.css";
import PernStack from "../img/e_commerce_nodejs.png";
import e_commerce1 from "../img/e_commerce_search.png";
import e_commerce2 from "../img/e_commerce_singlePage.png";
import cear from "../img/cearColegio.png"
import pythonFlask from "../img/Python_Flask.png";
import cafe from "../img/cafes.png"

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PORTAFOLIO</h2>
        <div className="galeria">
          <div className="proyecto">
            <img src={PernStack} alt="" />
            <div className="overlay">
              <h3>App Login y Register + Crear invitacion con codigo QR</h3>
              <p>React + Node.js ( PERN STACK )</p>
            </div>
            <div id="boton">
                <a href="https://prueba-tecnicaa.netlify.app/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="https://github.com/Facu6M/Desarrollor-Full-Stack">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>

          <div className="proyecto">
            <img src={e_commerce1} alt="" />
            <div className="overlay">
              <h3>
                E-Commerce con busqueda de prodctos y detalles
              </h3>
              <p>React</p>
            </div>
            <div id="boton">
                <a href="https://facu6m.github.io/react_e-commerce_work/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="https://github.com/Facu6M/react_e-commerce_work">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>
          <div className="proyecto">
            <img src={e_commerce2} alt="" />
            <div className="overlay">
              <h3>E-COMMERCE estatica con carrito</h3>
              <p>React</p>
            </div>
            <div id="boton">
                <a href="https://facu6m.github.io/e-commerce/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="https://github.com/Facu6M/e-commerce">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>
          <div className="proyecto">
            <img src={pythonFlask} alt="" />
            <div className="overlay">
              <h3>Crear Usuario y Autenticacion con login</h3>
              <p>Python + Flask + MySQL</p>
            </div>
            <div id="boton">
                <a href="https://flask-xitb.onrender.com/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="https://github.com/Facu6M/flaask">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>
          <div className="proyecto">
            <img src={cear} alt="" />
            <div className="overlay">
              <h3>App para colegio Full Stack</h3>
              <p>React + Node.js + MySQL</p>
            </div>
            <div id="boton">
                <a href="https://colegiocear.netlify.app/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>
          <div className="proyecto">
            <img src={cafe} alt="" />
            <div className="overlay">
              <h3>Single Page cafe</h3>
              <p>React</p>
            </div>
            <div id="boton">
                <a href="https://facu6m.github.io/coffe-single-page/">
                  <p>Ver Proyecto</p>
                </a>
                <a href="https://github.com/Facu6M/coffe-single-page">
                  <p id="p1">Ver Codigo</p>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
