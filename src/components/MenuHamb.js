import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'


const MenuHamb = () => {

return (

<div className='grid items-center grid-rows-6 space-y-4 text-center text-white bg-orange-400 h-max md:hidden'>

    <NavLink to="/" className='text-lg hover:text-slate-600'>Inicio</NavLink>
    <NavLink to="/Productos" className='text-lg hover:text-slate-600'>Productos</NavLink>
    <NavLink to="/contactos" className='text-lg hover:text-slate-600'>Contacto</NavLink>
    <NavLink to="/buscador"className='text-lg hover:text-slate-600'><FontAwesomeIcon icon={faMagnifyingGlass}/></NavLink>
    <NavLink to="/Login"className='text-lg hover:text-slate-600'><FontAwesomeIcon icon={faArrowRightToBracket}/></NavLink>
    <NavLink to="/ShoppingCart"className='text-lg hover:text-slate-600'><FontAwesomeIcon icon={faCartShopping}/></NavLink>


</div>    
)
}

export default MenuHamb
