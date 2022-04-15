import React from 'react'
import PerroPeluca from './Images/PerritoPeluca.jpg'
import Perro from './Images/Perrito.jpg'

const Error404 = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center mt-6">
        <div className="font-poppins m-8 text-sm sm:text-xl text-center text-orange-500 font-semibold">
          <p>Ooops.. <br/> La página seleccionada fue modificada o todavía no ha sido creada. Pero no te preocupes, podés volver a nuestra página principal con sólo un click.</p>
        </div>
        <div className="font-poppins font-extrabold text-8xl m-6 flex items-center">
          <img className="w-56 h-56 rounded-full" src={PerroPeluca} alt="Perro Peluca"/>
          <div className="mx-12 animate-pulse">
            <span className="text-red-400">4</span>
            <span className="mx-10 text-green-500">0</span>
            <span className="text-amber-400">4</span>
          </div>
          <img className="w-56 h-56 rounded-full" src={Perro} alt="Perro Sonrisa"/> 
        </div>
        <button className="bg-blue-500 text-white border-1 px-4 py-2 rounded-md mb-20 font-medium">
          <a href="/">Volver a la página principal</a>
        </button>
    </div>
  )
}

export default Error404