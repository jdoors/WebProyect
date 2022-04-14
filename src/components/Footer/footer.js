import React from 'react';
import logoMascota from '../Footer/Imagenes/logonaranja.jpg';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="w-full bg-white text-black">
      <div class="xl:px-20 pb-6 lg:px-20 md:px-10 sm:px-5 px-10">
      <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-end">
        <div class="w-full sm:w-1/4 pt-2 flex flex-col space-y-4">
          <img className="bg-" src={logoMascota} alt="logo mascota"/> 
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <a class="font-poppins font-medium text-black " href= "#">Sobre Nosotros</a>
          <ol className='text-slate-600'>
            <li>Quiénes somos</li>
            <li>Concejos para tu mascota</li>
            <li>Preguntas frecuentes</li>
          </ol>
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <Link class="font-poppins font-medium text-black" to="/Productos">Productos</Link>
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <Link class="font-poppins font-medium text-black" to="/Contactos">Contacto</Link>
        </div>
      </div>
      </div>
    </div>
);
}
export default Footer