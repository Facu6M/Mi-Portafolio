import React from 'react'
import styles from "../styles/Section.css"

const Section = () => {
  return (
    <>
<h5 id="skills">Habilidades:</h5>
    <aside >
<div>
  <h2>HTML</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>CSS</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>Sass</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>Bootstrap</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>JavaScript</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>React, VITE</h2>
  <p>2 Años de experiencia</p>
</div>

    <div>
  <h2>Node.js</h2>
  <p>2 Años de experiencia</p>
</div>


<div>
  <h2>Python</h2>
  <p>2 Años de experiencia</p>
</div>


<div>
  <h2>Flask</h2>
  <p>2 Años de experiencia</p>
</div>

<div>
  <h2>MySQL</h2>
  <p>2 Años de experiencia</p>
</div>

     <div>
  <h2>PostgreSQL</h2>
   <p>2 años de experiencia</p>
</div>

<div>
  <h2>Postman</h2>
  <p>2 Años de experiencia</p>
</div>


  </aside>

<section id="curriculum" className="curriculum">
    <div className="contenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila">
            <div className="col izquierda">
                <h3>Educación</h3>
                <div className="item izq">
                    <h4>Tecnico superior en programacion</h4>
                    <span className="casa">Tec Lab</span>
                    <span className="fecha">2023 - 2024</span>
                    <p>Titulo en tecnico superior en programacion en el cual aprendi bastantes cosas desde desarrollo web hasta base de datos</p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
                <div className="item izq">
                    <h4>Titulo Secundario</h4>
                    <span className="casa">Colegio Modelo Marmol</span>
                    <span className="fecha">2015-2020</span>
                    <p>Graduado de titulo secundario en la rama de economia</p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
            </div>

            <div className="col derecha">
                <h3>Experiencia de trabajo</h3>
                <div className="item der">
                    <h4>Front-END Developer</h4>
                    <span className="casa">Freelancer</span>
                    <span className="fecha">2022 - 2023</span>
<p>Trabaje de freelancer durante 1 año en el que hize muchos trabajos desde paginas estaticas, hasta paginas e-commerce con carritos busqueda de prodctos, etc. Tambien trabaje en algunos full stack en el que hice la parte del backend </p>                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
                <div className="item der">
                    <h4>Full Stack Developer</h4>
                    <span className="casa">Colegio CEAR</span>
                    <span className="fecha">Agosto 2023 - Octubre 2023</span>
<p>Hice una app en el que los alumnos puedan ver sus notas y los maestros puedan editar y agregar notas, es full stack ya que estuve trabajando en la parte front-end con react y la parte back-end con python y la base de datos que use fue postgreSQL</p>
                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Section