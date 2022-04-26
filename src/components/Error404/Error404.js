import React from 'react'
import PerroPeluca from '../../assets/Image/PerritoPeluca.jpg'
import Perro from '../../assets/Image/Perrito.jpg'

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4 mt-6">
        <div className="m-8 text-sm font-semibold text-center text-orange-500 font-poppins sm:text-xl">
          <p>Ooops.. <br/> La página seleccionada fue modificada o todavía no ha sido creada. Pero no te preocupes, podés volver a nuestra página principal con sólo un click.</p>
        </div>
        <div className="flex items-center m-6 font-extrabold font-poppins text-8xl">
          <img className="w-56 h-56 rounded-full" src={PerroPeluca} alt="Perro Peluca"/>
          <div className="mx-12 animate-pulse">
            <span className="text-red-400">4</span>
            <span className="mx-10 text-green-500">0</span>
            <span className="text-amber-400">4</span>
          </div>
          <img className="w-56 h-56 rounded-full" src={Perro} alt="Perro Sonrisa"/> 
        </div>
        <button className="px-4 py-2 mb-20 font-medium text-white bg-blue-500 rounded-md border-1">
          <a href="/">Volver a la página principal</a>
        </button>
    </div>
  )
}

export default Error404