import React from 'react'
import ProductoEnOferta, { ofertas } from './ProductoEnOferta';


const ultimasOfertas = () => {

  return (
    <div className='mt-10'>
      <h2 className='title-ultimas-ofertas font-bold text-4xl text-center'>Últimas <span className='text-orange-500'>Ofertas</span></h2>
      <div className='flex flex-wrap justify-evenly'>
        {ofertas.map((producto) =><ProductoEnOferta key={producto.id} data={producto}/>)}
      </div>
    </div>
  )
}

export default ultimasOfertas