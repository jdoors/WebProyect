import React from 'react';
import logoMascota from '../Footer/Imagenes/logomascota.jpg';

const Footer = () => {
  return (
    <div class="w-full bg-slate-100 text-black">
      <div class="xl:px-20 pb-6 lg:px-20 md:px-10 sm:px-5 px-10">
      <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-end">
        <div class="w-full sm:w-1/4 pt-2 flex flex-col space-y-4">
          <img src={logoMascota} alt="logo mascota"/> 
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <h2 class="font-poppins">Sobre Nosotros</h2>
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <h2 class="font-poppins">Productos</h2>
        </div>
        <div class="w-full sm:w-1/4 px-12 flex flex-col space-y-4">
          <h2 class="font-poppins">Contacto</h2>
        </div>
      </div>
      <div class="opacity-60 pt-2">
      <p>© 2022 Proyecto React.</p>
      </div>
      </div>
    </div>
);
}
export default Footer