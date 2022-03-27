import React from 'react'
import adopta from '../Adopta/Image/adopta.jpg'

const adoptar = () => {
  return (
    <div className='grid mt-8 auto-rows-min md:grid-cols-2 md:justify-items-center mx-14'>

      <div className='mt-10 md:ml-3'> 
        <h1 className='font-cormorant font-bold text-4xl text-[#FF8126]'> Porqué adoptar una mascota?</h1>
                
        <p className='mt-3 text-xs not-italic font-medium leading-6 font-poppins' >
        Por su amor incondicional por el propietario y demás miembros de la familia.
        Porque no juzgan ni la personalidad ni el aspecto de las personas.
        Porque son compañeros fieles y pueden convertirse en nuestros mejores amigos.
        Porque siempre están contentos y nos contagian su buen humor. 
        </p>
        <button className='bg-[#FF8126] text-white rounded w-[230px] h-10 mt-4 md:mt-8 mb-6'>Leer más</button>
        
        <div >
        <img className='w-[500px] h-[350px] opacity-100 md:w-[560px] md:h-[390px]' src={adopta} alt='Adopta una mascota' />
        </div>
      </div >

      
    </div>
  )
}

export default adoptar
