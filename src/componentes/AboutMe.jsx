import React from 'react'
import styles from "../styles/AboutMe.css"
import Perfil from "../img/fotomia.jpg"
// import CurriculumVitae from "../assets/CurriculumVitae.pdf"

const Main = () => {
  return (
<>
<section id="inicio" className="inicio">
    <div className="contenido-banner">
        <div className="contenedor-img">
             <img src={Perfil} />
        </div>
        <h1>FACUNDO MELITA</h1>
        <h2>Programador Full Stack - Experto en desarrollo web</h2>
        <div className="redes">
            <a href="#"><i className="fa-brands fa-github"> </i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</section>
<section id="sobremi" className="sobremi">
    <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p><span>Hola, soy Facundo Melita.  </span>
            Tengo 21 años, soy de argentina y soy programador Full-Stack. Empeze en la programacion en 2022 y desde ahi trato de siempre estar actualizado con las ultimas tecnologias y dar lo mejor de mi en cada uno de mis projectos.
         </p>

        <div className="fila">
            <div className="col">
                <h3>Datos Personales</h3>
                <ul>
                    <li>
                        <strong>Teléfono</strong>
                        +54 1151451631
                    </li>
                    <li>
                        <strong>Email</strong>
                        facu6p@gmail.com
                    </li>
                    <li>
                        <strong>Website</strong>
                        www.example.com
                    </li>
                </ul>
            </div>


        </div>
        {/* <button><a href={CurriculumVitae} download>
            Descargar CV </a><i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
        </button> */}
    </div>
</section>
</>
  )
}

export default Main