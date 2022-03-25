import React from 'react'
import imagen from './Imagenes/logonaranja.jpg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'



const navbar = () => {
  return (
  <div className='flex flex-wrap items-center justify-between px-12 py-1 mx-auto my-0 bg-white'>

      <div className='items-center'>
        <img src={imagen} className='w-24 rounded-full pt-2 ml-[22px]' ></img>
        <h2 className='font-poppins mx-mp '>Pet Shop Fullstack</h2>
    </div>

    <div>
    
    <ul className='flex flex-col space-x-4 font-poppins md:flex-row'>  
      <li>
      <NavLink to="/home" className="ml-4">Inicio</NavLink>
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

      <NavLink to="/ShoppingCart">
        <a><FontAwesomeIcon icon={faCartShopping} /></a>
      </NavLink>
      
    </ul>
    
    </div>

        
    </div>

  )
}

export default navbar