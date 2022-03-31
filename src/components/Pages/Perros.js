import React from 'react'
import PerrosProductos,{productsListDog} from './PerrosProductos'

const Perros = () => {
return (
    <div className=' grid auto-rows-min md:grid-cols-4 md:justify-items-center bg-white py-10 ' >
    {productsListDog.map((producto) =><PerrosProductos key={producto.id} data={producto}/>)}
</div>
)
}

export default Perros