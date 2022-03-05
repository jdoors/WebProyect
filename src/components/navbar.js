import React from 'react'
import imagen from './Imagenes/LogoNavbar.jpg'

const Navbar = () => {
  return (
    <div className='items-center justify-between flex bg-[#E5E5E5] px-12 py-1 my-0 mx-auto '>

      <div className='items-center'>
        <img src={imagen} className='w-24 rounded-full pt-2' ></img>
        <h2 className='font-poppins mx-mp'>Pet Shop Fullstack</h2>

    </div>

    <div>
    <ul className='flex space-x-4 font-poppins' >
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Perros</a></li>
        <li><a href='#'>Gatos</a></li>
        <li><a href='#'>Contacto</a></li>
      </ul> 
    </div>
    
    </div>
  )
}

export default Navbar