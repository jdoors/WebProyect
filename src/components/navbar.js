import React from 'react'
import imagen from './Imagenes/LogoNavbar.jpg'
import { NavLink } from 'react-router-dom'



const navbar = () => {
  return (
    <div className='items-center justify-between flex flex-wrap bg-[#E5E5E5] px-12 py-1 my-0 mx-auto'>

      <div className='items-center'>
        <img src={imagen} className='w-24 rounded-full pt-2' ></img>
        <h2 className='font-poppins mx-mp '>Pet Shop Fullstack</h2>

    </div>

    <div>
    
    <ul className='flex space-x-4 font-poppins'>  
      <li>
      <NavLink to="/Inicio">Inicio</NavLink>
      </li>  

      <li>
        <NavLink to="/Perros">Perros</NavLink>
      </li>

      <li>
        <NavLink to="Gatos">Gatos</NavLink>
      </li>

      <li>
        <NavLink to="Contactos">Contactos</NavLink>
      </li>
      </ul>
    </div>
    
    </div>

  )
}

export default navbar