import React from 'react'
import imagen from '../assets/Image/logonaranja.jpg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'


const navbar = ({handleClick}) => {
  return (

<div className='flex flex-wrap items-center justify-between px-12 py-1 mx-auto my-0 bg-white'>

  <div className='items-center'>
    <img src={imagen} className='w-24 rounded-full pt-2 ml-[22px]' ></img>
        <h2 className='font-poppins mx-mp '>Pet Shop Fullstack</h2>
  </div>

  <div>
    <div className='px-4 cursor-pointer md:hidden ' onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
  </div>

</div>

<div className='hidden md:block'>
    <ul className='flex flex-col space-x-4 font-poppins md:flex-row '>  
      <li>
        <NavLink to="/" className="ml-4">Inicio</NavLink>
      </li>  

      <li>
        <NavLink to="/Productos">Productos</NavLink>
      </li>

      <li>
        <NavLink to="/contactos">Contacto</NavLink>
      </li>
      
      <NavLink to="/buscador">
        <a><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
      </NavLink>

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