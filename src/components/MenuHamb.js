import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'


const MenuHamb = () => {

return (

<div className='grid items-center grid-rows-6 text-center bg-[#FF8126] text-white md:hidden'>

    <NavLink to="/" >Inicio</NavLink>
    <NavLink to="/Productos">Productos</NavLink>
    <NavLink to="/contactos">Contacto</NavLink>
    <NavLink to="/buscador"><FontAwesomeIcon icon={faMagnifyingGlass}/></NavLink>
    <NavLink to="/Login"><FontAwesomeIcon icon={faArrowRightToBracket}/></NavLink>
    <NavLink to="/ShoppingCart"><FontAwesomeIcon icon={faCartShopping}/></NavLink>

</div>    
)
}

export default MenuHamb
