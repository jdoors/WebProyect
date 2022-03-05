import React from 'react'


const divHidden = () => {
  document.getElementById('envios-gratis').style.setProperty('display', 'none')
}

const FreeDelivery = () => {

  return (
   
    <div id='envios-gratis' className='bg-[#C2E8CE] h-[50px] grid grid-cols-6 sm:flex sm:flex-wrap items-center sm:justify-center'>
        <h6 className='col-span-5 text-sm font-medium font-poppins'>Envíos gratis a todo el país para compras mayores a $10000.00</h6>
        <button onClick={divHidden} className='absolute w-3 col-span-1 font-bold sm:w-4 right-4 sm:right-14 sm:text-lg'>X</button>
    </div>
    
  )
}

export default FreeDelivery