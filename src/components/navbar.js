import React from 'react'
import imagen from './Imagenes/LogoNavbar.jpg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'



const navbar = () => {
  return (
    <div className='items-center justify-between flex flex-wrap bg-[#E5E5E5] px-12 py-1 my-0 mx-auto'>

      <div className='items-center'>
        <img src={imagen} className='w-24 rounded-full pt-2' ></img>
        <h2 className='font-poppins mx-mp '>Pet Shop Fullstack</h2>

    </div>

    <div>
    
    <ul className='flex flex-col md:flex-row space-x-4 font-poppins'>  
      <li>
      <NavLink to="/home">Inicio</NavLink>
      </li>  

      <li>
        <NavLink to="/perros">Perros</NavLink>
      </li>

      <li>
        <NavLink to="/gatos">Gatos</NavLink>
      </li>

      <li>
        <NavLink to="/contactos">Contactos</NavLink>
      </li>

      
      <div>
        <a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /> </a>
      </div> 
        
      <NavLink to="/Login">
        <a><FontAwesomeIcon icon={faArrowRightToBracket} /></a>
      </NavLink>

      <NavLink to="Carrito">
        <a><FontAwesomeIcon icon={faCartShopping} /></a>
      </NavLink>
      
    </ul>
    
    </div>
    
    </div>

  )
}

export default navbar