import React from 'react';
import logoMascota from '../../assets/Image/logonaranja.jpg';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="w-full bg-white text-black">
      <div class="xl:px-20 pb-6 lg:px-20 md:px-10 sm:px-5 px-10">
      <div class="pt-12 grid grid-cols-2 sm:grid-cols-5 space-y-2 gap-4 text-sm sm:text-lg text-center">
        <div class="w-full pt-2 flex flex-col space-y-4">
          <img className="w-28 sm:w-40" src={logoMascota} alt="logo mascota"/> 
        </div>
        <div class="px-4 sm:col-span-2 space-y-4 flex flex-col">
          <a class="font-poppins font-medium text-black " href= "#">Sobre Nosotros</a>
          <ol className='text-slate-600'>
            <li>Quiénes somos</li>
            <li>Consejos para tu mascota</li>
            <li>Preguntas frecuentes</li>
          </ol>
        </div>
        <div class="px-4 flex flex-col space-y-4">
          <Link class="font-poppins font-medium text-black" to="/Productos">Productos</Link>
        </div>
        <div class="px-4 flex flex-col space-y-4">
          <Link class="font-poppins font-medium text-black" to="/Contactos">Contacto</Link>
        </div>
      </div>
      </div>
    </div>
);
}
export default Footer