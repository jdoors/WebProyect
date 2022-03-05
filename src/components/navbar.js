import React from 'react'
import imagen from './Imagenes/LogoNavbar.jpg'

const Navbar = () => {
  return (
    <div>

      <div>
        <img src={imagen}></img>
        <h2>Pet Shop Fullstack</h2>
      </div>

      <ul>
        <li>Inicio</li>
        <li>Perros</li>
        <li>Gatos</li>
        <li>Contacto</li>
      </ul>

    </div>
  )
}

export default Navbar