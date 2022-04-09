import React from 'react'
import GatosProductos,{productsList} from './GatosProductos'


    

const Gatos = () => {

return (
    
    <div className=' grid auto-rows-min md:grid-cols-4 md:justify-items-center bg-white py-10' >
        {productsList.map((producto) =><GatosProductos key={producto.id} data={producto}/>)}
    </div>

)}

export default Gatos