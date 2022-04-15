import React from 'react'
import ProductoEnOferta, { ofertas } from './ProductoEnOferta';


const ultimasOfertas = () => {

  return (
    <div className='mt-10'>
      <h2 className='text-4xl font-bold text-center font-cormorant'>Últimas <span className='text-[#FF8126]'>Ofertas</span></h2>
      <div className='flex flex-wrap justify-evenly'>
        {ofertas.map((producto) =><ProductoEnOferta key={producto.id} data={producto}/>)}
      </div>
    </div>
  )
}

export default ultimasOfertas