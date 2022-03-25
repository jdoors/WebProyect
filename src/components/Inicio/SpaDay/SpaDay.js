import React from 'react'
import FrenchBulldogPuppy from './Images/FrenchBulldogPuppy.jpeg'

const SpaDay = () => {
  return (
    <div className=' grid  auto-rows-min md:grid-cols-2 md:justify-items-center mt-8 mx-14 '>

      <div >
        <img className='w-[500px] h-[350px] opacity-100 md:w-[560px] md:h-[390px]' src={FrenchBulldogPuppy} alt='Bulldog Puppy' />
      </div>

      <div className='md:ml-3 mt-10'> 
        <h1 className='font-cormorant font-bold text-4xl text-[#FF8126]'> Sorprendelos</h1>
        <h2 className='font-cormorant font-bold text-4xl'> Tu mascota más relajada que nunca</h2>
        
        <p className='font-poppins font-medium not-italic text-xs leading-6 mt-3' >
        Mima a tu mascota con este kit especializado en un spa para perros.
        Contiene un folleto de bienestar, un minimasajeador corporal, un cepillo para el cabello, una lima de uñas, 
        una esponja quitapelusas y fragancias que propiciarán un ambiente calmado para que el perro y su familia disfruten de un agradable momento de tranquilidad.
        </p>
        <p className='font-poppins font-medium not-italic text-xs leading-6'> ¡Este paquete de spa es un regalo ideal para mostrarle a tu mascota cuánto lo amas!</p>
        <button className='bg-[#FF8126] text-white rounded w-[230px] h-10 mt-4 md:mt-8 mb-6'>Comprar</button>
        
      </div >

      
    </div>
  )
}

export default SpaDay
