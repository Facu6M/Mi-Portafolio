import React from 'react'
import styles from "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
    <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
    </a>
    <div className="redes">
        <a href="https://github.com/Facu6M"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/facundo-melita-794827238/"><i className="fa-brands fa-linkedin-in"></i></a>
    </div>
</footer>
  )
}

export default Footer